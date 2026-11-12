// Use only voices actually exposed by this device and browser.
function englishVoiceScore(voice) {
  const name=voice.name||'';
  return (/natural|neural|enhanced|premium/i.test(name)?100:0)
    + (/google|samantha|ava|allison|serena|daniel/i.test(name)?20:0)
    + (/^en[-_]US$/i.test(voice.lang)?8:0)
    + (voice.default?1:0);
}
function rankedEnglishVoices(voices) {
  return voices.filter(v=>/^en(?:[-_]|$)/i.test(v.lang||''))
    .sort((a,b)=>englishVoiceScore(b)-englishVoiceScore(a)||(a.name||'').localeCompare(b.name||''));
}
function setupEnglishSpeech(synth, root=document, storage=localStorage) {
  const select=root.querySelector('#englishVoice');
  const rate=root.querySelector('#englishRate');
  const status=root.querySelector('#englishVoiceStatus');
  let saved={};
  try{saved=JSON.parse(storage.getItem('culcomEnglishSpeech')||'{}')||{};}catch{}
  let selected=typeof saved.voice==='string'?saved.voice:'';
  rate.value=['0.9','1','1.1'].includes(String(saved.rate))?String(saved.rate):'1';
  let voices=[];
  function choice(){return voices.find(v=>v.voiceURI===selected)||voices[0]||null;}
  function describe(){
    const v=choice();
    status.textContent=v?`${selected&&v.voiceURI===selected?'선택한':'자동 추천'} 목소리: ${v.name} (${v.lang}). 기기와 브라우저에 따라 목소리와 억양이 달라요.`
      :'영어 목소리 목록을 불러오는 중입니다. 목록이 없으면 기기의 기본 영어 음성으로 재생해요.';
    if(selected&&!voices.some(v=>v.voiceURI===selected))status.textContent+=' 저장한 목소리를 사용할 수 없어 자동 추천으로 재생해요.';
  }
  function refresh(){
    voices=rankedEnglishVoices(synth.getVoices());
    select.replaceChildren();
    const auto=root.createElement('option');auto.value='';auto.textContent='자동 추천';select.appendChild(auto);
    voices.forEach(v=>{const o=root.createElement('option');o.value=v.voiceURI;o.textContent=`${v.name} · ${v.lang}`;select.appendChild(o);});
    select.value=voices.some(v=>v.voiceURI===selected)?selected:'';
    describe();
  }
  function save(){try{storage.setItem('culcomEnglishSpeech',JSON.stringify({voice:selected,rate:Number(rate.value)}));}catch{}}
  select.onchange=()=>{selected=select.value;save();describe();};
  rate.onchange=save;
  refresh();
  synth.addEventListener('voiceschanged',refresh);
  return {apply(utterance){const voice=choice();if(voice){utterance.voice=voice;utterance.lang=voice.lang;}utterance.rate=Number(rate.value)||1;utterance.pitch=1;},refresh};
}
