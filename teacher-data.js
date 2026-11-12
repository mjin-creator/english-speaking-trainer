// Supplemental class material. Textbook data and existing question IDs stay unchanged.
const teacherLessons = [];
const examplePractice = [];
function addClass(lesson, number, en, ko, note='', alternatives=[]) {
  teacherLessons.push({id:`t${String(teacherLessons.length+1).padStart(3,'0')}`,lesson,
    group:`${lesson%2?lesson:lesson-1}-${lesson%2?lesson+1:lesson}과`,en,ko,
    pattern:classPattern(en), note, alternatives, source:'teacher', connection:`${lesson}과${number?' '+number+'번':''}`});
}
function addExample(block,en,ko,note='',alternatives=[]) {
  examplePractice.push({id:`e${String(examplePractice.length+1).padStart(3,'0')}`,lesson:block,
    group:`예문 ${block-2}~${block}과`,en,ko,pattern:classPattern(en),note,alternatives,source:'example'});
}
addClass(3,10,'fall asleep','잠들다','교재: I don\'t think I can fall asleep.');
addClass(3,10,'go to bed','잠자리에 들다');
addClass(3,10,'call it a night','오늘은 이만 마치다','반드시 바로 잠든다는 뜻은 아니에요.');
addClass(3,10,'try to fall asleep','잠들려고 해보다');
addClass(4,2,'Keep the change.','거스름돈은 가지세요.','교재: I didn\'t get my change.');
addClass(4,10,'tipsy','살짝 취한, 알딸딸한','drunk는 취한 상태로, 꼭 만취만 뜻하지 않아요.');
addClass(4,10,'drunk','취한','교재: I wasn\'t drunk at all.');
addClass(5,null,'How about meeting me at a café?','카페에서 저랑 만나는 게 어때요?','How about + 동사ing. 장소 앞에 at을 써요.');
addClass(5,10,'How about taking a taxi instead of the bus?','버스 대신 택시를 타는 게 어때요?','take a taxi 택시를 타다 / get a taxi 택시를 구해 타다 / grab a taxi 얼른 잡아 타다. How about 뒤에는 taking/getting/grabbing.',['How about getting a taxi instead of the bus?','How about grabbing a taxi instead of the bus?']);
addClass(6,null,'Would you please give me some space?','혼자 있을 여유를 좀 주시겠어요?','go away보다 덜 직접적이지만, 말투에 따라 단호하게 들릴 수 있어요.');
addClass(6,null,'Would you please hear me out?','제 말을 끝까지 들어주시겠어요?','listen to me도 정상 표현이에요. hear me out은 끝까지 들어 달라는 뜻이에요.');
addClass(6,3,'Would you please give me his contact information?','그분 연락처를 알려주시겠어요?','number는 전화번호, contact information/details는 연락처 정보.',['Would you please give me his contact details?']);
addClass(6,9,'Would you please turn down the music?','음악 소리 좀 줄여주시겠어요?','참고: reduce the volume / decrease the volume도 볼륨을 줄인다는 뜻이 통해요.');
addClass(7,8,"What's your New Year's resolution?",'새해 결심이 뭐예요?',"교재: What's your plan for this year? resolution은 실천할 결심이나 목표에 초점이 있어요.");
addClass(8,5,"Let's go for a stroll.",'느긋하게 산책하러 가요.','walk보다 여유롭게 거니는 느낌이에요.');
addClass(8,7,"Let's end this.",'이걸 끝내자.','finish는 완성·마무리, end는 종료에 초점이 있어요.');
addClass(9,5,'dead end','막다른 길','교재 There is no end.와 연결된 관련 어휘예요.');
addClass(9,6,'There is traffic congestion.','교통이 혼잡해요.','congestion 앞에 a를 쓰지 않아요. 교재: There is a traffic jam.');
addClass(9,7,'available','이용할 수 있는');
addClass(9,7,'unavailable','이용할 수 없는');
addClass(9,7,'vacant','비어 있음','화장실 문 표시에서 볼 수 있어요.');
addClass(9,7,'occupied','사용 중','화장실 문 표시에서 볼 수 있어요.');
addExample(3,'What type of personality do you have?','어떤 성격인가요?');
addExample(3,"I'm an introvert.",'저는 내향적인 사람이에요.','introvert/extrovert는 사람을 가리키는 명사, introverted/extroverted는 형용사예요. I\'m introverted.도 가능해요.',["I'm introverted."]);
addExample(3,"I'm an extrovert.",'저는 외향적인 사람이에요.','I\'m extroverted.도 가능해요.',["I'm extroverted."]);
addExample(3,'warm-hearted','마음이 따뜻한','have a warm heart = 따뜻한 마음을 갖고 있다.');
addExample(3,'considerate','배려심 있는');
addExample(3,'have a warm heart','따뜻한 마음을 갖고 있다');
addExample(3,'The class was fun.','그 수업은 즐거웠어요.','fun은 즐거운, funny는 웃긴. funny는 문맥에 따라 이상하다는 뜻도 있으며 꼭 부정적인 것은 아니에요.');
addExample(3,'The joke was funny.','그 농담은 웃겼어요.');
addExample(3,"She's fun.",'그녀는 함께 있으면 즐거운 사람이에요.');
addExample(3,"She's funny.",'그녀는 웃기는 사람이에요.');
addExample(6,'Is working out your hobby?','운동이 취미예요?','work out은 운동하다(동사), workout은 운동(명사)이며 장소를 뜻하지 않아요.');
addExample(6,'I work out at a gym.','헬스장에서 운동해요.','gym은 일상에서 자연스러운 표현이며 fitness center도 사용해요. exercise도 흔하고 더 넓은 의미의 운동이에요.');
addExample(6,'cardio','유산소 운동');
addExample(6,'strength training','근력 운동');
addExample(6,'squats','스쿼트');
addExample(6,'push-ups','팔굽혀펴기');
addExample(9,'I agree that you should learn AI skills.','네가 AI 활용 기술을 배워야 한다는 데 동의해요.','AI = artificial intelligence(인공지능). AI skills처럼 복수로 써요.');
addExample(9,'How could you not remember what happened yesterday?','어떻게 어제 있었던 일을 기억 못 할 수가 있어?');
addExample(9,"I'm trying to be a good mother to my son.",'아들에게 좋은 엄마가 되려고 노력하고 있어요.');
addExample(9,'Will you go to the baking class tomorrow?','내일 제빵 수업에 갈 거예요?','bakery는 빵집, baking은 굽는 활동, baking class는 제빵 수업이에요.');
addExample(9,'Are you done with the Level 1 textbook?','1단계 교재는 다 끝냈어요?','textbook = 교재 / be done with = 다 끝내다.');
addExample(9,"I agree that this food isn't tasty.",'이 음식이 맛없다는 데 동의해요.','agree that + 문장 / agree with + 사람·의견.');
addExample(9,'My brain is not functioning.','머리가 안 돌아가요.');
addExample(9,'How could you forget our appointment?','어떻게 우리 약속을 잊을 수가 있어?','appointment는 시간을 정해 둔 진료·상담 등의 약속. promise는 다짐하거나 약속한 내용. reservation/booking은 호텔·식당 예약. plans는 친구 등을 만날 약속에도 써요.');
addExample(9,'Will you try to get the license?','그 면허를 따려고 도전해 볼 거예요?');
addExample(9,'Do you want to grab some beer with me?','나랑 맥주 좀 마실래?','grab some beer/coffee는 캐주얼하게 사거나 마시자는 표현. drink beer도 흔하고 정상적인 표현이에요. grab a taxi는 택시 잡아 타다(5과 10번 연결).');
addExample(9,'What do you do for a living?','무슨 일을 하세요?','직업 맥락에서는 What do you do?도 같은 뜻. for a living은 생계를 위해서라는 뜻으로 파트타임도 포함하며 전업·정규직만 뜻하지 않아요.',['What do you do?']);
addExample(9,"What's your occupation?",'직업이 무엇인가요?','격식을 갖춘 표현이에요.');
addExample(9,"What's your hobby?",'취미가 뭐예요?','아래 downtime, keeping you busy 질문과 비교해 보세요.');
addExample(9,'What do you like to do in your downtime?','쉴 때 뭐 하는 걸 좋아해요?','downtime은 쉬는 시간, downtown은 도심이에요.');
addExample(9,"What's been keeping you busy lately?",'요즘 뭐 하느라 바빠요?','취미만이 아니라 최근 생활 전반에 대해 물어요.');
addExample(9,'How could you not listen to me?','어떻게 내 말을 안 들을 수가 있어?','선생님이 학생에게 직접 말하는 문장이에요.');
addExample(9,'How could you forget our wedding anniversary?','어떻게 우리 결혼기념일을 잊을 수가 있어?','wedding anniversary = 결혼기념일.');

function classPattern(en){
 const patterns=[['How about','How about + 동사ing?'],['Would you please','Would you please + 동사?'],['How could you','How could you + 동사?'],['I agree that','I agree that + 문장'],["I'm trying","I'm trying to + 동사"],['Will you','Will you + 동사?'],['Are you done','Are you done with + 명사?'],['Do you want','Do you want to + 동사?'],['There is','There is + 명사'],["Let's","Let's + 동사"],["I'm an","I'm + a/an + 명사"]];
 return patterns.find(([start])=>en.startsWith(start))?.[1]||(en.trim().split(/\s+/).length<=3?'관련 어휘·표현 떠올리기':'의문문·평서문으로 표현하기');
}
