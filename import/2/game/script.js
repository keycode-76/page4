 // 2/game.js

import "/import/2/game/style.scss";
import { initScreen, clearScreen } from "/import/2/screen/script.js";
import { backGround } from "/import/2/background/script.js";
import { initComputer } from "/import/3/computer/script.js";
import { initWindow } from "/import/3/window/script.js";
import { renderButtons } from "/import/3/buttons/script.js";
import { initDoor } from "/import/3/door/script.js";
import { init_endScene } from "/import/2/end_scene/script.js";
import { now_data, init_nowData } from "/import/4/init/now.js";

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
const gameArea = createDiv("gameArea");
const doorArea = createDiv("doorArea");
const computerArea = createDiv("computerArea");
const tableArea = createDiv("tableArea");
const buttonsArea = createDiv("buttonsArea");
const rulesArea = createDiv("rulesArea");

const lightArea = createDiv("lightArea");
const fileArea = createDiv("fileArea");

const windowArea = createDiv("windowArea");

const importGame = (app) => {
    gameArea.innerHTML = "";
    init_nowData();
    initComputer(computerArea);
    renderButtons(buttonsArea);
    initWindow(windowArea);
    initDoor(doorArea);
    gameArea.append(doorArea, computerArea, windowArea, tableArea, ) //buttonsArea, rulesArea
    gameArea.appendChild(backGround);
    app.append(gameArea);
    initScreen(app);
    startPlaytimer();
}

window.addEventListener("animationend", (event) => {
    if (event.animationName === "end_screen_anim") {
        clearScreen();
        gameArea.innerHTML = "";
        init_endScene(gameArea);
        clearInterval(playtimer);
    }
});

let playtimer;
const startPlaytimer = () => {
    playtimer = setInterval(() => {
        now_data.play_time += 15
    }, 1000);
};

export { importGame }