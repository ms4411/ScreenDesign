let starList=[];
let cnt=0;

//css 자동 적용
let starLink=document.createElement('link');
starLink.rel='stylesheet';
starLink.href='/star/star.css'
document.querySelector('head').appendChild(starLink);

//별 자동 생성
setInterval(()=>{
    // 별 개수 30개 넘어갈 시 하나 삭제
    if(starList.length>30){
        let star=starList.shift();
        star.remove();
    }
    // 새로운 별 생성
    starList.push(createStar())
}, Math.random()*700) //랜덤하게 생성
//starBox 선언 및 css지정
let starBox=document.querySelector('.star-box');
starBox.style.position='relative'

function createStar(){
    let star=document.createElement('div'); //요소 생성
    let randV=Math.random()*5+1; //랜덤값 생성
    //별 크기 지정
    star.style.width=`${randV}px`; 
    star.style.height=`${randV}px`;
    //위치 지정
    star.style.top=`${Math.random()*90}%`
    star.style.left=`${Math.random()*90+5}%`
    //클래스 추가
    star.classList.add('star');
    //화면에 추가
    starBox.appendChild(star);
    return star
}