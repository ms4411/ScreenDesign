let addMenuList=[];
let selectId=null;
let defaltScreen='/나라/contryHome.html'
let tempUrl='/나라/contryHome.html'

function selectById(id){
    selectId=id;
}
function createButton(imgUrl, url,id){
    let btn=document.createElement("button");
    let a=document.createElement("a");
    let img = document.createElement('img');
    
    img.src=imgUrl;
    img.alt="이미지 불러오기 실패"
    btn.appendChild(img);
    btn.classList.add("logo");
    if (id!=null)
        btn.id=id;
    btn.onclick=()=>{
        changeScreen(url,id);
        selectById(id);
    };
    return btn;
}
function addButton(img, url,id=null){
    addMenuList.push(createButton(img, url, id));
}
function elementalList(){
    addButton("/rsc/logo/windLogo.png","/나라/mond.html",'wind');
    addButton("/rsc/logo/rockLogo.png","/mond.html",'rock');
    addButton("/rsc/logo/lightningLogo.png","/mond.html",'lightning');
    addButton("/rsc/logo/plantLogo.png","/mond.html",'plant');
    addButton("/rsc/logo/waterLogo.png","/mond.html",'water');
    addButton("/rsc/logo/fireLogo.png","/mond.html",'fire');
    addButton("/rsc/logo/iceLogo.png","/mond.html",'ice');
}
function changeScreen(url,id){
    document.getElementById('screen').src=url;
    if(id==selectId){
        selectById(null)
        document.getElementById('screen').src=defaltScreen;
    }
    else{
        selectById(id);
    }
    console.log(selectId,id);
}

fetch('/menu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('menu').innerHTML = data;
        addMenuList.forEach(element => {
            if (element.id==selectId){
                element.classList.add('select');
            }
            document.getElementById("menu-list").appendChild(element);
        });
    })
    .catch(error => console.error('메뉴 불러오기 실패:', error));
document.getElementById('screen').src=defaltScreen;
