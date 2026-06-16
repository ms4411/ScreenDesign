moveCnt=1;
const imgNum=document.querySelector(".slide-track").childElementCount;
const trackWidth=document.querySelector(".slide-box").clientWidth*imgNum;
const imgWidth=trackWidth/imgNum;
console.log(imgWidth, trackWidth)

//css 자동 적용
let link=document.createElement('link');
link.rel='stylesheet';
link.href='/slide/slide.css'
document.querySelector('head').appendChild(link);

document.querySelector(".slide-track").style.width=`${trackWidth}px`
for (const element of document.querySelectorAll(".slide-track>*")) {
    element.style.width=`${imgWidth}px`
}

function newSlide(){
    let cloneTrack=document.querySelector(".slide-track")
        .cloneNode(true);
    document.querySelector(".slide-box").appendChild(cloneTrack);
    return cloneTrack;
}
newSlide();

setInterval(()=>{
    let tracks=[...document.querySelectorAll(".slide-track")];
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].style.transform=`translateX(${imgWidth*moveCnt*-1+trackWidth*i}px)`;
    }
    if(imgNum<moveCnt){
        tracks.shift().remove()
        newSlide().style.transform=`translateX(${imgWidth*moveCnt*-1+trackWidth*2}px)`;

        moveCnt=1;
    }
    moveCnt+=1;
}, 1000)