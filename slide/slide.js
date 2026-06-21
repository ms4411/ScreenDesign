//css 자동 적용
let link=document.createElement('link');
link.rel='stylesheet';
link.href='/slide/slide.css'
document.querySelector('head').appendChild(link);

// 기본 변수 선언
moveCnt=1; //움직임 횟수
let imgNum=document.querySelector(".slide-track").childElementCount; //이미지 수
let trackWidth=document.querySelector(".slide-box").clientWidth*imgNum; //트랙 전체 길이 (슬라이드 박스 기준으로 길이 지정)
const imgWidth=trackWidth/imgNum; //이미지 길이

document.querySelector(".slide-track").style.width=`${trackWidth}px` //트랙 길이 지정
// 이미지 길이 지정
for (const element of document.querySelectorAll(".slide-track>*")) {
    element.style.width=`${imgWidth}px`
}

// 새로운 트랙 생성(복제)
function newSlide(){
    let cloneTrack=document.querySelector(".slide-track").cloneNode(true); //트랙 복제
    document.querySelector(".slide-box").appendChild(cloneTrack); //복제된 트랙 화면에 넣기
    cloneTrack.style.transform=`translateX(${imgWidth*moveCnt*-1+trackWidth*2}px)`; //트랙 위치 현재 상황에 맞게 지정
    return cloneTrack; //반환
}
newSlide(); //기본적으로 트랙 2개 이용 (하나 이미 있는거 복제)

// 슬라이드 안 이미지 변경 용도
function changeImages(Images){
    // 트랙 전체 삭제
    for (const element of document.querySelectorAll(".slide-track")) {
        element.remove()
    }
    // 새로운 트랙 생성
    let slideTrack=document.createElement("div")
    // 트랙에 이미지 추가
    for (const contryImg of Images) {
        let image=document.createElement("img")
        image.src=contryImg
        slideTrack.appendChild(image)
    }
    // 클래스 추가
    slideTrack.classList.add("slide-track")
    // 슬라이드 박스에 새 트랙 추가
    document.querySelector(".slide-box").appendChild(slideTrack)
    // 트랙 2개 유지
    newSlide()
    // 이미지 크기 적용
    for (const element of document.querySelectorAll(".slide-track>*")) {
        element.style.width=`${imgWidth}px`
    }
    imgNum=Images.length //이미지 수 조정
    trackWidth=imgWidth*imgNum //트랙 길이 조정
    moveCnt=1 //처음부터 실행
}

// 자동 넘김
setInterval(()=>{
    let tracks=[...document.querySelectorAll(".slide-track")]; //배열로 변환하여 활용
    // 트랙의 위치 이동
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].style.transform=`translateX(${imgWidth*moveCnt*-1+trackWidth*i}px)`;
    }
    // 트랙 하나가 전부 지나갈 경우 삭제 및 새 트랙 생성
    if(imgNum<moveCnt){
        tracks.shift().remove()
        newSlide()
        moveCnt=1;
    }
    moveCnt+=1;
}, 3000)