 // 2/screen.js

import "/import/2/screen/style.scss"
import { snow_overlay } from "/import/5/snow/script.js";
import { now_data } from "/import/4/init/now.js";
import { SD_3, SD_4, SD_5 } from "/import/1/sound/script.js";

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
const view_lose = createDiv("view_lose");
const view_win = createDiv("view_win");

const screenBtnDiv = createDiv("screenBtnDiv");
const screenL = createDiv("screenL");
const screenR = createDiv("screenR");

const initScreen  = (app) => {
    screenBtnDiv.append(screenL, screenR, );
    viewPort.append(snow_overlay, screenBtnDiv);
    app.appendChild(viewPort);
}
export { initScreen, clearScreen }

let e = 0;
let screenLimit = 220;
let step = 10;
let intervalTime = 80; // 时间间隔，单位毫秒
let intervalId = null;

const endScreen = () => {
    viewPort.removeChild(screenBtnDiv);
    if (now_data.win === false ) {
        viewPort.appendChild(view_lose);
    } else if (now_data.win === true ) {
        viewPort.appendChild(view_win);
    }
}
const clearScreen = () => {
    viewPort.innerHTML = ""; 
    const gameArea = document.querySelector("#gameArea")
    gameArea.style.transform = "translateX(0px)";
}
window.addEventListener("animationend", (event) => {
    if (event.animationName === "bennet_anim") {
        endScreen();
    } else if (event.animationName === "staff_back_anim") {
        endScreen();
    }
});
screenL.addEventListener('mouseenter', () => {
if (window.innerWidth > 960) 
    { screenLimit = 360; intervalTime = 30;
} else { screenLimit = 220; intervalTime = 50; }
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
        if (e < screenLimit) {
        e+=step;
        const gameArea = document.querySelector("#gameArea")
        gameArea.style.transform = `translateX(${e}px)`;
        }
    }, intervalTime);
    SD_3.play();
    SD_4.play();
});
screenL.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    SD_4.pause();
    SD_5.play();
});
screenR.addEventListener('mouseenter', () => {
if (window.innerWidth > 960) 
    { screenLimit = 360; intervalTime = 30;
} else { screenLimit = 220; intervalTime = 50; }
    clearInterval(intervalId); // 确保没有其他定时器在运行
    intervalId = setInterval(() => {
    //  console.log(e)
        if (e > -screenLimit) {
        e-=step;
        gameArea.style.transform = `translateX(${e}px)`;
        // } else {
        //     clearInterval(intervalId);
        }
    }, intervalTime);
    SD_3.play();
    SD_4.play();
});
screenR.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
    SD_4.pause();
    SD_5.play();
});

 
 
 