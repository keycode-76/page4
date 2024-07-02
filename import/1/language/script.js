// language.js
import "/import/1/language/style.scss";
import { init } from "/import/4/init/now.js";
import { level_1_menu, level_2_menu, volume_menu, instruct_div, instruct_yes, instruct_pass } from "/import/1/menu/script";
import { trans_text } from "/import/2/transition/script";
import { click_to_start } from "/import/3/computer/script";
import { backToMenu_btn } from "../../2/end_scene/script";
const createDiv = (nameId, nameClass, text, func) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func) }
    return itemModel;
};
const languageDiv = createDiv("languageDiv");
const englishBtn = createDiv("englishBtn", "langBtn", "English", () => { clickLanguage("English") });
const traditionalBtn = createDiv("traditionalBtn", "langBtn", "繁體中文", () => { clickLanguage("Tradition-CN") });
const simplifiedBtn = createDiv("simplifiedBtn", "langBtn", "简体中文", () => { clickLanguage("Simplified-CN") });
const spanishBtn = createDiv("spanishBtn", "langBtn", "Español", () => { clickLanguage("Spanish") });

const initLanguage = (app) => {
    languageDiv.innerHTML = "";
    languageDiv.append(traditionalBtn, simplifiedBtn, spanishBtn, englishBtn);
    return app.appendChild(languageDiv);
};
const which_language = (text) => { // end, computer
    switch (init.language) {
        case "English":
            return text.english;
        case "Tradition-CN":
            return text.traditional;
        case "Simplified-CN":
            return text.simplified;
        case "Spanish":
            return text.spanish;
    }
};
export { initLanguage, which_language }

// video area //
const instruct_video_0 = document.querySelector("#instruct_video_0");
const instruct_video_1 = document.querySelector("#instruct_video_1");
instruct_yes.addEventListener("click", () => {
    if (init.language === "English") {
        instruct_video_0.play();
        instruct_video_0.style.display = 'block';
    } else if (init.language === "Tradition-CN") {
        instruct_video_1.play();
        instruct_video_1.style.display = 'block';
    }
});
const videoEnd = (video) => {
    video.style.display = "none";
    instruct_pass.click();
};
instruct_video_0.addEventListener("ended", () => videoEnd(instruct_video_0));
instruct_video_1.addEventListener("ended", () => videoEnd(instruct_video_1));


const language_data = {
    english: {
        lvl1: "Chapter 1",
        lvl2: "Chapter 2",
        volume: "Volume",
        instruct_qz: "Would you like to watch instruction?",
        play: "Play",
        pass: "Pass",
        loading: "LOADING",
        clickStart: "Click to start",
        backMenu: "Back to menu"
    },
    traditional: {
        lvl1: "第一章節",
        lvl2: "第二章節",
        volume: "音量",
        instruct_qz: "是否播放教程?",
        play: "播放",
        pass: "略過",
        loading: "載入中",
        clickStart: "點擊開始",
        backMenu: "回到首頁"
    },
    simplified: {
        lvl1: "第一章节",
        lvl2: "第二章节",
        volume: "音量",
        instruct_qz: "是否播放教程?",
        play: "播放",
        pass: "略过",
        loading: "加载中",
        clickStart: "点击开始",
        backMenu: "返回首页"
    },
    spanish: {
        lvl1: "Capítulo 1",
        lvl2: "Capítulo 2",
        volume: "Volumen",
        instruct_qz: "¿Te gustaría ver las instrucciones?",
        play: "Reproducir",
        pass: "Saltar",
        loading: "CARGANDO",
        clickStart: "Haga clic para comenzar",
        backMenu: "Volver al menú"
    }
};

const clickLanguage = (language) => {
    init.language = language;

    level_1_menu.textContent = all_language("lvl1");
    level_2_menu.textContent = all_language("lvl2");
    volume_menu.textContent = all_language("volume");
    instruct_div.textContent = all_language("instruct_qz");
    instruct_yes.textContent = all_language("play");
    instruct_pass.textContent = all_language("pass");
    trans_text.textContent = all_language("loading");
    click_to_start.textContent = all_language("clickStart");
    backToMenu_btn.textContent = all_language("backMenu");
};

const all_language = (key) => {
    switch (init.language) {
        case "English":
            return language_data.english[key];
        case "Tradition-CN":
            return language_data.traditional[key];
        case "Simplified-CN":
            return language_data.simplified[key];
        case "Spanish":
            return language_data.spanish[key];
        default:
            return language_data.english[key]; // 初始語言
    }
};


// // language area //
// let country = {
//     menu_play: { english: "Play", traditional: "播放", simplified: "播放", spanish: "Jugar" },
//     menu_volume: { english: "Volume", traditional: "音量", simplified: "音量", spanish: "Volumen" },
//     instruct_div: { english: "Would you like to watch instruction?", traditional: "是否播放教程?", simplified: "是否播放教程?", spanish: "¿Te gustaría ver las instrucciones?" },
//     instruct_yes: { english: "Play", traditional: "播放", simplified: "播放", spanish: "Reproducir" },
//     instruct_pass: { english: "Pass", traditional: "略過", simplified: "略过", spanish: "Saltar" },
//     loading: { english: "LOADING", traditional: "載入中", simplified: "加载中", spanish: "CARGANDO" },
//     clickStart: { english: "Click to start", traditional: "點擊開始", simplified: "点击开始", spanish: "Haga clic para comenzar" },
//     backMenu: { english: "Back to menu", traditional: "回到首頁", simplified: "返回首页", spanish: "Volver al menú" }
// };

// const all_language = (text) => { // 語言神器
//     switch (init.language) {
//         case "English":
//             return text.english;
//         case "trandition-CN":
//             return text.chinese;
//         case "Simplified-CN":
//             return text;
//         case "Spanish":
//             return text.spanish;
//         // default:
//         //     return texts.english; // 初始語言
//     }
// }
// // language area //
// let country = { // 0, 1
//     menu_play: ["Play","播放"],
//     menu_volume: ["Volume", "音量"],
//     instruct_div: ["Would you like to watch instruction ?", "是否播放教程?"],
//     instruct_yes: ["Play", "撥放"],
//     instruct_pass: ["Pass", "略過"],
//     loading: ["LOADING", "載入中"],
//     clickStart: ["click to start", "點擊開始"],
//     backMenu: [" Back to menu", "回到首頁"],
// }

// const clickLanguage = (text) => {
//     init.language = text;
//     if (text === "English") {
//         play_menu.textContent = country.menu_play[0];
//         volume_menu.textContent = country.menu_volume[0];
//         instruct_div.textContent = country.instruct_div[0];
//         instruct_yes.textContent = country.instruct_yes[0];
//         instruct_pass.textContent = country.instruct_pass[0];
//         trans_text.textContent = country.loading[0];
//         click_to_start.textContent = country.clickStart[0];
//         backToMenu_btn.textContent = country.backMenu[0];

//     } else if (text === "Chinese") {
//         play_menu.textContent = country.menu_play[1];
//         volume_menu.textContent = country.menu_volume[1];
//         instruct_div.textContent = country.instruct_div[1];
//         instruct_yes.textContent = country.instruct_yes[1];
//         instruct_pass.textContent = country.instruct_pass[1];
//         trans_text.textContent = country.loading[1];
//         click_to_start.textContent = country.clickStart[1];
//         backToMenu_btn.textContent = country.backMenu[1];
//     }
// };

