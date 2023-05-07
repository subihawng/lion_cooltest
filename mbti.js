const titleContainer = document.querySelector(".title-container");
const titleBtn = document.querySelector("#startBtn");
const questionContainer = document.querySelector('.question-container');
const question = document.querySelector('#question');
const type = document.querySelector('#type');
const aBtn = document.querySelector("#a");
const bBtn = document.querySelector('#b');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('#progress-text');
const COOL = document.querySelector('#COOL');
const explain = document.querySelector('#explain');
const image = document.querySelector('#result-img');
const resultContainer = document.querySelector('.result-container');


const q = {
    1: {
        "title": "내 애인이 이성친구에게 자기가 쓰던 림밥을 빌려준다면?", 
        "type": "A", 
        "B": "‘쓰던 걸 빌려준다고?' 질투난다.", 
        "A": "‘림밥 정도야 뭐~’ 빌려줄 수 있다고 생각한다."
    },
    2: {
        "title": "내 애인이 이성친구와 단 둘이 맞담을 피러간다면?", 
        "type": "A", 
        "B": "'따로 피러가면 안되나?’ 애인에게 같이 있자고 한다.", 
        "A": "‘난 담배안피니까 어쩔 수 없지..’ 보내준다."
    },
    3: {
        "title": "내 애인이 데이트 중 이성친구에게 급한 일이 생겼다며 가야할 거 같다고 한다면?", 
        "type": "A", 
        "A": "‘급한 일이면 어쩔 수 없지 뭐’ 보내준다.", 
        "B": "‘데이트 중에? 미쳤나?’ 짜증난다."
    },
    4: {
        "title": "내 애인이 동성 친구 생일파티로 헌팅 포차를 간다고 한다면?", 
        "type": "A", 
        "A": "‘친구 생일파티라는데 뭐..’ 가라간다.", 
        "B": "‘술집이 그렇게 많은데 굳이 헌포를?’ 갈거면 헤어지고 가라한다."
    },
    5: {
        "title": "내 애인이 전남친/전여친이 사준 폰케이스를 끼고 다닌 걸 알게된다면?", 
        "type": "A", 
        "B": "‘헤어졌으면 폰 케이스부터 바꿔야하는 거 아니야?’ 당장 빼라한다.", 
        "A": "‘뺴는 걸 까먹었겠지 뭐.’ 알아서 바꾸게 나둔다."
    },
    6: {
        "title": "내 애인이 내가 잠깐 자리를 비운사이에 이성에게 번호를 따이는 걸 목격한다면?", 
        "type": "A", 
        "A": "‘역시 내 애인이야’ 뿌듯해한다", 
        "B": "‘‘번호 줬어? 남자친구 있다고 했어?’ 캐묻는다."
    },
    7: {
        "title": "내 애인이 나 만나기 전에 4년동안 연애한 사실을 알게되었다면?", 
        "type": "A", 
        "B": "‘나랑 연애하면서 전애인을 떠올릴까?’ 자기전에 계속 생각난다.", 
        "A": "‘오래 연애하는 사람이면 믿을만 하겠다.’ 오히려 좋아한다."
    },
    8: {
        "title": "내 애인의 이성친구가 알고보니 전남친/전여친 관계였다면?", 
        "type": "A", 
        "B": "‘친구는 절대 될 수 없어.’ 나랑 사귈꺼면 정리하라고 한다.", 
        "A": "‘그렇구낭~ 우리 저녁은 뭐 먹을까?’ 관심을 가지지 않는다."
    },
    9: {
        "title": "내 애인의 테블릿에서 이성친구랑 수업시간에 장난친 메모를 발견한다면?", 
        "type": "A", 
        "B": "‘ㅋ 하라는 공부는 안하고 뭐하는짓이지’ 이거 뭐냐고 물어본다.", 
        "A": "‘친구랑 재밌게 노네’ 하려던 작업 마저한다."
    },
    10: {
        "title": "동성친구랑 술마시러 간다는 내 애인, 전화 도중에 이성의 목소리가 들린다면?", 
        "type": "A", 
        "A": "‘종업원이겠지’ 애인이랑 마저 하던 전화를 한다.", 
        "B": "‘옆에 누구야?’ 영상통화를 건다."
    },
    11: {
        "title": "우연히 보게 된 내 애인의 카톡, 아직 지우지 않은 전여친/전남친과의 카톡방을 본다면?’", 
        "type": "A", 
        "A": "‘있는지도 몰랐을 듯?’ 어차피 헤어진거니까 나둔다.", 
        "B": "‘전 애인의 흔적을 지우는 건 서로 간의 예의지!’ 내가 지운다."
    },
    12: {
        "title": "내 애인의 이성친구가 길에서 외투를 입는다고 애인에게 가방을 들어달라고 하는걸 본다면?", 
        "type": "A", 
        "B": "‘길바닥에 가방을 던져버릴까?’ 차라리 내가 대신 들어준다.", 
        "A": "‘외투 입는다는데 들어줄 수도 있지~’ 다 입을 때까지 남친 옆에서 기다린다."
    }
}
const result = {
    "COOL": {
        "title": "이 시대의 진정한 쏘쿨남", 
        "explain": "오호 완전한 쏘쿨남인 당신! 당신이 지나갈 때마다 주변인들은 추워서 얼어버릴지도?", 
        "img": "coolcool.png"
    },
    "NORMAL": {
        "title": "쿨하지도 찌질하지도 않은 보통남", 
        "explain": "딱 적당한 쿨함을 가지고 있는 당신! 쿨하지 못할 것 같을 때에는 애인에게 솔직하게 말해보세요!", 
        "img": "notcool.png"
    },
    "NOT_COOL": {
        "title": "이 시대의 진정한 쿨찐남", 
        "explain": "쿨한 향기조차 나지 않는 당신! 당신이 지나갈 때마다 주변인들은 더워서 익어버릴지도?", 
        "img": "normal.png"
    }
}


let num = 1;
let cool_result = '';
let progress = 0;

titleBtn.addEventListener('click',()=>{
    titleContainer.style.display='none';
    questionContainer.style.display='block';
    updateQuestion();
});

aBtn.addEventListener('click',()=>{
    switch(type.innerHTML){
        case "A":
            let cool=parseInt(A.value);
            console.log(cool);
            A.setAttribute('value',cool+1);
            break;
    }
    updateQuestion();
    increaseProgressBar();
});

bBtn.addEventListener('click',()=>{
    updateQuestion();
    increaseProgressBar();
});

function updateQuestion(){
    if(num==13){
        questionContainer.style.display='none';
        resultContainer.style.display='block';
        if(A.value>8){ cool_result+='COOL';}
        if (A.value>4 && A.value<=8){cool_result+='NORMAL';}
        if(A.value<=4){cool_result+='NOT_COOL';}

        COOL.innerHTML=result[cool_result].title;
        explain.innerHTML=result[cool_result].explain;
        image.setAttribute('src',result[cool_result].img);

    }
    question.innerHTML=q[num].title;
    type.innerHTML=q[num].type;
    aBtn.innerHTML=q[num].A;
    bBtn.innerHTML=q[num].B;
    num++;
}
function increaseProgressBar(){
    progress += 1;
    if (progress > 12) {
      progress = 12;
    }
    const width = (progress / 12) * 100;
    progressBar.style.width = width + '%';
    progressBar.setAttribute('aria-valuenow', progress);
    progressText.textContent = `${progress}/12`;
}