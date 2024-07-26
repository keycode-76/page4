 // 2/game.js

import "/import/2/game/style.scss";
import { initScreen, endScreen, clearScreen } from "/import/2/screen/script.js";
import { backGround } from "/import/2/background/script.js";
import { initComputer } from "/import/3/computer/script.js";
import { initWindow } from "/import/3/window/script.js";
import { renderButtons } from "/import/3/buttons/script.js";
import { initDoor } from "/import/3/door/script.js";
import { init_endScene } from "/import/2/end_scene/script.js";
import { init_nowData } from "/import/4/init/now.js";

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
const gameFilter = createDiv("gameFilter");

const doorArea = createDiv("doorArea");
const computerArea = createDiv("computerArea");
const computerShadow = createDiv("computerShadow");

const tableArea = createDiv("tableArea");
const buttonsArea = createDiv("buttonsArea");

const windowArea = createDiv("windowArea");
const windowShadow = createDiv("windowShadow");

const importGame = (app) => {
    gameArea.innerHTML = "";
    init_nowData();
    initComputer(computerArea);
    renderButtons(buttonsArea);
    initWindow(windowArea);
    initDoor(doorArea);
    gameArea.style.transform = "translateX(0px)";
    gameArea.append(doorArea, computerShadow, computerArea, windowShadow, windowArea, tableArea, ) //buttonsArea, rulesArea
    gameArea.append(backGround, gameFilter);
    app.append(gameArea);
    initScreen(app);
};

window.addEventListener("animationend", (event) => {
    
    if (event.animationName === "bennet_anim") { // door lose
        endScreen();
    } else if (event.animationName === "staff_back_anim") { // door win
        endScreen();
    } else if (event.animationName === "end_screen_anim") { //screen
        clearScreen();
        gameArea.innerHTML = "";
        init_endScene(gameArea);
    }
});


export { importGame }