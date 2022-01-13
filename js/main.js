let elList = document.querySelector(".box__list");
let elWrap = document.querySelector(".box__wrap");
let allImgBtn = document.querySelectorAll(".box__btns--img");
let elPlusBtn = document.querySelector(".box__count-plus");
let elMinusBtn = document.querySelector(".box__count-minus");
let elSumCount = document.querySelector(".box__sum-count");
let elCount = document.querySelector(".box__count");
let sliderlength;
let sum = 0;
let val = 0;
let bool = 1;

document.querySelectorAll(".box__btns--color").forEach(item => item.addEventListener("click", e => create(e.target.id)))

function create(itemName){
    elList.innerHTML = "";
    elWrap.innerHTML = "";
    elWrap.style.transform = `translateX(${0}px`;
    val = 0;
    sum = 0;
    for(let i in macBook){
        if(i == itemName){
            sliderlength = macBook[i].length;
            macBook[i].forEach(item => {
                elWrap.innerHTML += `<div class="box__slider-item"><img class="box__slider-img" src="${item}" alt=""></div>`;
                sum == 0 ? elList.innerHTML += `<li class="box__item box__item--active" value="${val}"><button class="box__item--btn"><img class="box__item--img" src="${item}" alt=""></button></li>` : elList.innerHTML += `<li class="box__item " value="${val}"><button class="box__item--btn"><img class="box__item--img" src="${item}" alt=""></button></li>`;
                sum = 1;
                val++;
            })
        }
    }
    slider();
    getBtns()
}

function getBtns (){
    activeBtn(document.querySelectorAll(".box__btns--storage"),"box__btns--storage-active");
    activeBtn(document.querySelectorAll(".box__btns--img"),"box__btns--img-active");
    activeBtn(document.querySelectorAll(".box__btns--color"),"box__btns--color-active");
    activeBtn(document.querySelectorAll(".box__item"),"box__item--active");
}

create("gold");

function slider(){document.querySelectorAll(".box__item").forEach(item => item.addEventListener("click", e => elWrap.style.transform = `translateX(-${500 * e.target.value}px)`))};

function activeBtn(arr,cl){
    arr.forEach(btn => {
        btn.addEventListener("click", e => {
            arr.forEach(btnActive => btnActive.classList.remove(cl))
            e.target.classList.add(cl)
        })
    })
} 

function editGb(val,gb){val.forEach(item => item.addEventListener("click", e => gb.innerHTML = e.target.textContent.slice(0,-2)))};

function getBgbtns(){
    editGb(document.querySelectorAll(".box__btns--img"),document.querySelector(".box__gb-img"));
    editGb(document.querySelectorAll(".box__btns--storage"),document.querySelector(".box__gb-storage"));
}
getBgbtns();
document.querySelector("#box_gb-btn-big").addEventListener("click", createGb)
function createGb(){
    document.getElementById("tb").style.display = "flex";
    getBtns();
    getBgbtns();
    if(bool == 1){
        document.getElementById("tb").addEventListener("click",()=> {
            document.getElementById("gb").style.display = "none";
            document.querySelector("#box__gb-big").classList.add("box__btns--img-active");
            document.querySelector(".box__gb-img").textContent = document.querySelector("#box__gb-big").textContent.slice(0,-2);
            check();
            getBtns();
        });
        bool = 0;
    }
    document.getElementById("gb").addEventListener("click", e => document.getElementById("tb").style.display = "none");
}
document.querySelectorAll(".box__btns--color").forEach(item => item.addEventListener("click", e => document.querySelector(".box__color").innerHTML = e.target.id));
function check(){
    document.querySelectorAll(".box__btns--storage").forEach(item => {
        item.addEventListener("click", e => {
            if(e.target.id != "tb"){
                document.getElementById("gb").style.display = "flex";
                document.querySelector("#box__gb-big").classList.remove("box__btns--img-active");
                document.querySelector(".box__gb-img").textContent = 8;
            }
        })
    })
}


changeSum(document.getElementById("gb"));
changeSum(document.getElementById("gb-2"));

function changeOnlySum(btn,count){
    let elSum = +elSumCount.textContent;
    btn.addEventListener("click", ()=> {
        elSum += count;
        elSumCount.textContent = elSum
    })
}

changeOnlySum(document.getElementById("box__gb-big"),50023);
changeOnlySum(document.getElementById("box_gb-btn-big"),10023);
changeOnlySum(document.getElementById("tb"),102023);

let defCount = +elSumCount.textContent;

function changeSum(btn){
    btn.addEventListener("click", ()=> elSumCount.textContent = defCount)
}

elPlusBtn.addEventListener("click", e => {
    let elSum = +elSumCount.textContent;
    let elCountMac = +elCount.textContent
    elCountMac ++;
    elSum += defCount;
    elSumCount.textContent = elSum;
    elCount.textContent = elCountMac;
    if(elCountMac >= 2)elMinusBtn.disabled = false;
})
elMinusBtn.addEventListener("click", ()=> {
    let elSum = +elSumCount.textContent;
    let elCountMac = +elCount.textContent;
    elCountMac --;
    elSum -= defCount;
    elSumCount.textContent = elSum;
    elCount.textContent = elCountMac;
    if(elCountMac <= 2)elMinusBtn.disabled = true;
})

