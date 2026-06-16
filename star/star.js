let starList=[];
let cnt=0;

//css 자동 적용
let starLink=document.createElement('link');
starLink.rel='stylesheet';
starLink.href='/star/star.css'
document.querySelector('head').appendChild(starLink);

//별 자동 생성
setInterval(()=>{
    if(starList.length>10){
        let star=starList.shift();
        star.remove();
    }
    starList.push(createStar())
}, Math.random()*700+300)

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

    star.classList.add('star');
    starBox.appendChild(star);
    return star
}