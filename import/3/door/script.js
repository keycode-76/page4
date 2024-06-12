// 3/door.js

import "/import/3/door/style.scss";
import { now_data, body_values } from "/import/4/init/now.js";
import { renderScreentext, valueStop } from "/import/3/computer/script.js";
import { clearRequest } from "/import/3/window/script.js";
import { SD_1, SD_2 } from "/import/1/sound/script.js";

const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func) }
    // if (child1 || child2) { 
    //     if (child1) itemModel.appendChild(child1);
    //     if (child2) itemModel.appendChild(child2); 
    // }, viewPort
    return itemModel;
};

const staff_door = createDiv("staff_door");
const doorFrame = createDiv("doorFrame");
const doorDiv = createDiv("doorDiv");

const feed_btn = createDiv("feed_btn", 0, "feed", () => {renderStaff("right", "hunger")});
const clean_btn = createDiv("clean_btn", 0, "clean", () => {renderStaff("right", "sanity")});
const play_btn = createDiv("playbtn", 0, "play", () => {renderStaff("right", "active")});
const door_btns = createDiv("door_btns");
const request_btn = createDiv("request_btn", 0, "request");

const initDoor = (app) => { //初始 
    doorDiv.innerHTML = "";
    doorDiv.append(staff_door, door_btns, doorFrame);
    doorDiv.className = "";
    staff_door.style.opacity = 1;
    doorIdle_loop();
    return app.appendChild(doorDiv);
}
const door_request = () => {
    door_btns.appendChild(request_btn);
}
const endDoor = (num) => { //結束 
    stopDoorIdle_loop();
    if (now_data.win === false) {
        doorDiv.className = "end_scene"
        if (num === 1) { 
            staff_door.className = "bennet_1";
        } else if (num === 2) { 
            staff_door.className = "bennet_2";
        } else if (num === 3) { 
            staff_door.className = "bennet_3";
        }
    } else {
        staff_door.className = "back_1"
    }
}
let sp_Max = 8000;
let sp_Min = 100;
let doorTimer_blink;
let doorTimer_idle;
const doorIdle_loop = () => { //扎眼迴圈 
    staff_door.className = "staff_idle";
    const interval = Math.floor(Math.random() * (sp_Max - sp_Min + 1)) + sp_Min;
    doorTimer_idle = setTimeout(() => {
        staff_door.className = "staff_blink";
        doorTimer_blink = setTimeout(() => {
            doorIdle_loop();
        }, 250);
    }, interval);
};
const stopDoorIdle_loop = () => {
    clearTimeout(doorTimer_idle);
    clearTimeout(doorTimer_blink);
};

request_btn.addEventListener("click", () => { //點擊請求 
    door_btns.innerHTML = "";
    door_btns.append(feed_btn, clean_btn, play_btn);
    SD_1.play();
});
const renderStaff = (text, action) => { //執行請求 
    // if (now_data.request === 0) return;
    if (action) now_data.action = action;
    stopDoorIdle_loop();
    staff_door.classList.value = "";
    staff_door.classList.add(`${text}_1`);
    door_btns.innerHTML = "";
    if(text === "right") {
        SD_2.play();
    }
}
const request_complete = () => { //完成請求
    if (now_data.action === "hunger") {
        body_values.hunger -= 2;
        body_values.sanity += 1;
    } else if (now_data.action === "sanity") {
        body_values.sanity += 2;
        body_values.active -= 1;
    } else if (now_data.action === "active") {
        body_values.active -= 2;
        body_values.hunger += 1;
    }
    if (now_data.request === now_data.action) { 
        now_data.request = "";
        body_values.sleepy += 1;
        // valueStop(now_data.action);
        // valueTimer(now_data.action, now_data.sp_normal);
        clearRequest();
    }
    renderScreentext();
    now_data.action = "";
}

window.addEventListener("animationend", (event) => {
    if (event.animationName === "staff_right_anim") {
        renderStaff("left");
        

    } else if (event.animationName === "staff_left_anim") {
        if (body_values.sleepy >= 5) return;
        door_btns.appendChild(request_btn);
        doorIdle_loop();
        request_complete();
    } else if (event.animationName === "staff_back_anim") {
        staff_door.style.opacity = 0;
    }
});

export { initDoor, endDoor, door_request }
