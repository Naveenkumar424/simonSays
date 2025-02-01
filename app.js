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

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let btn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    gameFlash(btn);
}

function btnPress(){
    btnFlash(this);
    userSeq.push(this.classList[1]);
    checkAns(userSeq.length-1);
}

let btnAll = document.querySelectorAll(".col");
for(btn of btnAll){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerText = `Game over your score was ${level} press any key to start...`;
        reset();
    }
}

function reset(){
    resetAlert();
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}

function resetAlert(){
    allBtns = document.querySelectorAll(".col");
    for(btn of allBtns){
         btn.classList.add("flash");
    }
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function(){
        for(btn of allBtns){
            btn.classList.remove("flash");
        }
        body.style.backgroundColor = "white";
    },250);
}
