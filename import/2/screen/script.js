 // 2/screen.js

import "/import/2/screen/style.scss"
import { snow_overlay } from "/import/5/snow/script.js";
import { now_data } from "/import/4/init/now.js";
import { SD_3, SD_4, SD_5, SD_13, SD_16 } from "/import/1/sound/script.js";

const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    // if (text) { itemModel.textContent = text; }
    // if (func) { itemModel.addEventListener("click", func) }
    // if (child1 || child2) { 
    //     if (child1) itemModel.appendChild(child1);
    //     if (child2) itemModel.appendChild(child2); 
    // }, viewPort
    return itemModel;
};
 
const viewPort = createDiv("viewPort");
const view_lose_cover = createDiv("view_lose_cover");
const view_lose_up = createDiv("view_lose_up");
const view_lose_down = createDiv("view_lose_down");
const view_lose = createDiv("view_lose");
const view_win = createDiv("view_win");
const view_border = createDiv("view_border");

const screenBtnDiv = createDiv("screenBtnDiv");
const screenL = createDiv("screenL");
const screenR = createDiv("screenR");

let e = 0;
let screenLimit = 220;
let step = 10;
let intervalTime = 80; // 时间间隔，单位毫秒
let intervalId = null;
let shock_sound = false; // 讓驚嚇音效不要一直觸發

const initScreen  = (app) => {
    viewPort.innerHTML = "",
    screenBtnDiv.innerHTML = "",
    e = 0;
    intervalId = null;
    viewPort.append(view_border, snow_overlay);
    app.appendChild(viewPort);
}
const startScreen = () => {
    screenBtnDiv.append(screenL, screenR, );
    viewPort.appendChild(screenBtnDiv);
}
export { initScreen, startScreen, clearScreen, endScreen }

const endScreen = () => {
    SD_4.pause();
    clearInterval(intervalId);
    viewPort.removeChild(screenBtnDiv);
    if (now_data.win === false ) {
        view_lose.innerHTML = "";
        view_lose.append(view_lose_up, view_lose_down);
        viewPort.appendChild(view_lose);
        SD_13.play();
    } else if (now_data.win === true ) {
        viewPort.appendChild(view_win);
    }
}
const clearScreen = () => {
    viewPort.innerHTML = "",
    screenBtnDiv.innerHTML = "",
    viewPort.appendChild(snow_overlay);
    const gameArea = document.querySelector("#gameArea");
    gameArea.style.transform = "translateX(0px)"; // 防止畫面偏移
}
window.addEventListener("animationend", (event) => {
    if (event.animationName === "lose_screenDown_anim") { // screen 牙齒的遮蔽物
        view_lose.appendChild(view_lose_cover);
    }
});


const renderLimit = () => {
    if (window.innerWidth > 960) { 
        screenLimit = 360; intervalTime = 30;
    } else if (window.innerWidth > 450 && window.innerWidth < 960) {
        screenLimit = 220; intervalTime = 50; 
    } else { screenLimit = 110; intervalTime = 100;}
}
const renderL = () => {
    renderLimit();
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
        if (e < screenLimit) {
        e+=step;
        const gameArea = document.querySelector("#gameArea")
        gameArea.style.transform = `translateX(${e}px)`;
        shock_sound = false;
        }
    }, intervalTime);
    SD_3.currentTime = 0;
    SD_3.play();
    SD_4.play();
}
const renderR = () => {
    renderLimit();
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
        if (e > -screenLimit) {
        e-=step;
        const gameArea = document.querySelector("#gameArea");
        gameArea.style.transform = `translateX(${e}px)`;
        }
        if(e < -140 && now_data.request != "") {
            if(shock_sound === false) {
                SD_16.play();
                shock_sound = true;
            }
        }
    }, intervalTime);
    SD_3.currentTime = 0;
    SD_3.play();
    SD_4.play();
}
const renderLeave = () => {
    clearInterval(intervalId);
    SD_4.pause();
    SD_5.currentTime = 0;
    SD_5.play();
}
screenL.addEventListener('click', () => { 
    let timer;
    clearInterval(timer);
    renderL();
    timer = setTimeout(() => {
        renderLeave();
    }, 800);
});
screenR.addEventListener('click', () => { 
    let timer;
    clearInterval(timer);
    renderR();
    timer = setTimeout(() => {
        renderLeave();
    }, 800);
});
screenL.addEventListener('mouseenter', () => {renderL();});
screenR.addEventListener('mouseenter', () => {renderR();});
screenL.addEventListener('mouseleave', () => {renderLeave();});
screenR.addEventListener('mouseleave', () => {renderLeave();});

 
 
 