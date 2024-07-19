 // 2/screen.js

import "/import/2/screen/style.scss"
import { snow_overlay } from "/import/5/snow/script.js";
import { now_data, init } from "/import/4/init/now.js";
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
const screenM = createDiv("screenM");
const screenR = createDiv("screenR");

let e = 0;
let step = 10;
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
    if (init.screenLimit<220) {
        screenBtnDiv.append(screenL, screenM, screenR );
    }  else {
        screenBtnDiv.append(screenL, screenR )
    }
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
const renderL = () => {
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
        if (e < init.screenLimit) {
        e+=step;
        const gameArea = document.querySelector("#gameArea")
        gameArea.style.transform = `translateX(${e}px)`;
        shock_sound = false;
        }
    }, init.intervalTime);
    SD_3.currentTime = 0;
    SD_3.play();
    SD_4.play();
}
const renderR = () => {
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
        if (e > -init.screenLimit) {
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
    }, init.intervalTime);
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
    }, 2000);
});
screenR.addEventListener('click', () => { 
    let timer;
    clearInterval(timer);
    renderR();
    timer = setTimeout(() => {
        renderLeave();
    }, 2000);
});
screenL.addEventListener('mouseenter', () => {renderL();});
screenR.addEventListener('mouseenter', () => {renderR();});
screenL.addEventListener('mouseleave', () => {renderLeave();});
screenR.addEventListener('mouseleave', () => {renderLeave();});
screenM.addEventListener('click', () => {renderLeave();});

 
 
 