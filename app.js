let started = false;
let userSeq = [];
let gameSeq = [];
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red","blue","green","yellow"];

document.addEventListener("keypress",function(){
    if(!started){
        console.log("Game started with the key ,",event.key);
        started = true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let btn = document.querySelector(`.${randColor}`);
    console.log("Random index:",randIdx);
    console.log("Random color:",randColor);
    console.log("Random button:",btn);
    btnFlash(btn);
}