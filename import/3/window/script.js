// 3/window.js

import "/import/3/window/style.scss";
import { now_data, body_values } from "/import/4/init/now.js";
import { valueTimer, valueStop } from "/import/3/computer/script.js";

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

const noteContent = createDiv("noteContent");
const noteDiv = createDiv("noteDiv");

const window_blink = createDiv("window_blink");
const window_face = createDiv("window_face");

const state_1_window = createDiv("state_1_window");
// const state_2_window = createDiv("state_2_window");
// const state_3_window = createDiv("state_3_window");
// const state_4_window = createDiv("state_4_window");
const window_glass = createDiv("window_glass");
const window_outLine = createDiv("window_outLine");

const windowDiv = createDiv("windowDiv");

const initWindow = (app) => {
    noteDiv.appendChild(noteContent);
    window_glass.appendChild(state_1_window);
    windowDiv.innerHTML = "";
    windowDiv.className = "";
    window_blink.style.opacity = 0;
    windowDiv.append(window_glass, window_face, window_blink, window_outLine);    
    windowIdle_loop();
    return app.appendChild(windowDiv);
}
const endWindow = () => {
    windowDiv.className = "end_scene";
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
        }, 300);
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
        noteDiv.className = "paper_1"
    } else if (interval === 1) {
        noteDiv.className = "paper_2"
    }
};
const request_value = [
    "active",
    "hunger",
    "sanity"
]
const renderRequest = () => {
    const randomIndex = Math.floor(Math.random() * request_value.length);
    windowDiv.innerHTML = "";
    windowDiv.append(noteDiv, window_glass, window_outLine);
    noteContent.className = `window_${randomIndex}`
    now_data.request = request_value[randomIndex];
    valueStop(now_data.request);
    valueTimer(now_data.request, now_data.computer_fast);
    return noteContent;
}
const clearRequest =  () => {
    windowDiv.removeChild(noteDiv);
    window_request();
}
export { initWindow, randomGlass, window_request, clearRequest, endWindow,}
