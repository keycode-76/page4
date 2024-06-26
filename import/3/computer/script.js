// 3/computer.js

import "/import/3/computer/style.scss";
import { now_data, body_values, init } from "/import/4/init/now.js";
import { SD_6 } from "/import/1/sound/script.js";
import { startScreen } from "/import/2/screen/script.js";
import { endDoor } from "/import/3/door/script.js";
import { randomGlass, window_request, endWindow } from "/import/3/window/script.js";
import { door_request } from "/import/3/door/script.js";

const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    // if (func) { itemModel.addEventListener("click", func) }
//     if (child1) itemModel.appendChild(child1);
//     if (child2) itemModel.append(child1, child2); 
    return itemModel;
};

const activeDiv = createDiv("activeDiv","screen_text");
const hungerDiv = createDiv("hungerDiv","screen_text");
const sanityDiv = createDiv("sanityDiv","screen_text");
const sleepyDiv = createDiv("sleepyDiv","screen_text");

const click_to_start = createDiv("click_to_start");
const wallPaper = createDiv("wallPaper");
const computerDiv = createDiv("computerDiv");

const initComputer = (app) => {
    computerDiv.innerHTML = "";
    wallPaper.className = "wallpaper_start";
    computerDiv.append(wallPaper, click_to_start);
    clearInterval(playtimer);
    return app.appendChild(computerDiv);
}

click_to_start.addEventListener("click", () => {
    computerDiv.innerHTML = "";
    wallPaper.className = "";
    computerDiv.append(wallPaper, activeDiv, hungerDiv, sanityDiv, sleepyDiv);
    valueTimer('active', now_data.computer_normal);
    valueTimer('hunger', now_data.computer_normal);
    valueTimer('sanity', now_data.computer_normal);
    renderScreentext();
    startScreen();
    randomGlass();
    window_request();
    door_request();
    startPlaytimer();
});

let playtimer;
const startPlaytimer = () => {
    playtimer = setInterval(() => {
        now_data.play_time += 15
    }, 1000);
};

let timers = {};
const valueTimer = (valueName, speed) => {
    timers[valueName] = setInterval(() => {
        if (body_values.sleepy >= 5) { user_end("win", 0); }
        else { 
            if (valueName === 'active') {
                if (body_values.active > 9) { user_end("lose", 1); }
                else { body_values.active += 1; }
            } else if (valueName === 'hunger') {
                if (body_values.hunger > 9) { user_end("lose", 2); }
                else { body_values.hunger += 1; }
            } else if (valueName === 'sanity') {
                if (body_values.sanity < 1) { user_end("lose", 3); }
                else { body_values.sanity -= 1; }
            }
            renderScreentext();
        }
    }, speed);
};

const valueStop = (valueName) => {
    clearInterval(timers[valueName]);
};
const user_end = (text, num) => {
    if (text === "lose") {
        now_data.win = false;
        computerDiv.textContent = "lose";
    } else if (text === "win") {
        now_data.win = true;
        computerDiv.textContent = "Win!!!"
    }
    endDoor(num);
    endWindow();
    stop＿all_timer();
    computerDiv.innerHTML = "";
}

const stop＿all_timer = () => {
    valueStop('active');
    valueStop('hunger');
    valueStop('sanity');
}

const which_language = (text) => {
    switch (init.language) {
        case "English":
            return text.english;
        case "Tradition-CN":
            return text.traditional;
        case "Simplified-CN":
            return text.simplified;
        case "Spanish":
            return text.spanish;
        // default:
        //     return text.english; // 初始語言
    }
};

const renderScreentext = () => {
    const texts = {
        sleepy: { english: "sleepy:", traditional: "睡意:", simplified: "睡意:", spanish: "sueño:" },
        active: { english: "active:", traditional: "活耀:", simplified: "活跃:", spanish: "activo:" },
        hunger: { english: "hunger:", traditional: "飢餓:", simplified: "饥饿:", spanish: "hambre:" },
        sanity: { english: "sanity:", traditional: "理智:", simplified: "理智:", spanish: "cordura:" }
    };

    sleepyDiv.textContent = `${which_language(texts.sleepy)} ${body_values.sleepy}`;
    activeDiv.textContent = `${which_language(texts.active)} ${body_values.active}`;
    hungerDiv.textContent = `${which_language(texts.hunger)} ${body_values.hunger}`;
    sanityDiv.textContent = `${which_language(texts.sanity)} ${body_values.sanity}`;

    SD_6.currentTime = 0;
    SD_6.play();
};

export { initComputer, valueTimer, valueStop, renderScreentext, 
    click_to_start
 }
 