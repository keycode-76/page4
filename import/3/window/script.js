// 3/window.js

import "/import/3/window/style.scss";
import { now_data, body_values } from "/import/4/init/now.js";
import { valueTimer, valueStop } from "/import/3/computer/script.js";
import { SD_9, SD_14, SD_15 } from "/import/1/sound/script.js";

const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    // if (func) { itemModel.addEventListener("click", func) }
    // if (child1 || child2) { 
    //     if (child1) itemModel.appendChild(child1);
    //     if (child2) itemModel.appendChild(child2); 
    // }, viewPort
    return itemModel;
};

const face_text = createDiv("face_text");
const face_state = createDiv("face_state");

const window_blink = createDiv("window_blink");
const face_rg = createDiv("face_rg");

const window_outLine = createDiv("window_outLine");

const windowDiv = createDiv("windowDiv");

const initWindow = (app) => {
    face_state.appendChild(face_text);
    windowDiv.innerHTML = "";
    windowDiv.className = "window_start";
    window_blink.style.opacity = 0;
    face_state.classList.value = "",
    face_text.classList.value = "",
    windowDiv.append(face_rg, face_state, window_blink, window_outLine);    
    windowIdle_loop();
    return app.appendChild(windowDiv);
}
const endWindow = () => {
    SD_15.pause();
    if( now_data.win === false ) {
        windowDiv.innerHTML = "",
        windowDiv.appendChild(window_outLine);
        windowDiv.className = "window_endLose";
        SD_9.play();
    } else if ( now_data.win === true ) {
        windowDiv.className = "window_start";
        face_state.className = "window_endWin";
        SD_14.play();
    }
}
let sp_Max = 8000;
let sp_Min = 100;
let windowTimer_blink;
let windowTimer_idle;
const windowIdle_loop = () => { //扎眼迴圈 
    window_blink.style.opacity = 0;
    const interval = Math.floor(Math.random() * (sp_Max - sp_Min + 1)) + sp_Min;
    windowTimer_idle = setTimeout(() => {
        window_blink.style.opacity = 1;
        windowTimer_blink = setTimeout(() => {
            windowIdle_loop();
        }, 150);
    }, interval);
};
const stopWindowIdle_loop = () => {
    clearTimeout(windowTimer_idle);
    clearTimeout(windowTimer_blink);
};
const window_request = () => {
    if (body_values.sleepy >= 5) return;
    if (now_data.request === "") {
        const interval = Math.floor(Math.random() * (now_data.window_Max - now_data.window_Min + 1)) + now_data.window_Min;
        setTimeout(() => {
            renderRequest();
        }, interval);
    }
};

const randomGlass = () => {
    const interval = Math.floor(Math.random() * 2);
    if (interval === 0) {
        face_state.className = "paper_1"
    } else if (interval === 1) {
        face_state.className = "paper_2"
    }
};
const request_value = [
    "active",
    "hunger",
    "sanity"
]
const renderRequest = () => {
    const randomIndex = Math.floor(Math.random() * request_value.length);
    windowDiv.className = "window_state",
    face_state.classList.value = "",
    face_state.className = `window_${randomIndex}`
    face_text.className = `face_text_${randomIndex}`
    now_data.request = request_value[randomIndex];
    valueStop(now_data.request);
    valueTimer(now_data.request, now_data.computer_fast);
    SD_15.pause();
    SD_15.play();
    return face_text;
}
const clearRequest =  () => {
    windowDiv.className = "window_start",
    face_state.classList.value = "",
    face_text.classList.value = "",
    SD_15.pause();
    window_request();
}
export { initWindow, randomGlass, window_request, clearRequest, endWindow,}
