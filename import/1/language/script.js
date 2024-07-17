// language.js
import "/import/1/language/style.scss";
import { init } from "/import/4/init/now.js";
import { level_1_menu, level_2_menu, volume_menu, credit_menu, 
    instruct_div, instruct_yes, instruct_pass, lv2_working } from "/import/1/menu/script";
import { trans_text } from "/import/2/transition/script";
import { click_to_start } from "/import/3/computer/script";
import { backToMenu_btn, pic_text_1, pic_text_2, pic_text_3, pic_text_4 } from "../../2/end_scene/script";
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
const instruct_videos = [
    document.querySelector("#instruct_video_0"),
    document.querySelector("#instruct_video_1"),
    document.querySelector("#instruct_video_2"),
    document.querySelector("#instruct_video_3"),
];

const languageMap = {
    "English": 0,
    "Tradition-CN": 1,
    "Simplified-CN": 2,
    "Spanish": 3
};

instruct_yes.addEventListener("click", () => {
    const videoIndex = languageMap[init.language];
    const video = instruct_videos[videoIndex];
    video.play();
    video.style.display = 'block';
});
const videoEnd = (video) => {
    video.style.display = "none";
    instruct_pass.click();
};
instruct_videos.forEach(video => {
    video.addEventListener("ended", () => videoEnd(video));
});


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
        backMenu: "Back to menu",
        stillWork : "Coming in September 2024",
        pic1: `Lunch time in the monitoring room.`,
        pic2: `The facial features of Bennet with low sanity.`,
        pic3: `The staff playing cards with the active Bennet.`,
        pic4: `This year's eating contest has invited the hungry Bennet.`,
        credit: "Credit",
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
        backMenu: "回到首頁",
        stillWork : "將在2024年9月上線",
        pic1: `監控室的午餐時間。`,
        pic2: `理智過低的Bennet臉部特徵。`,
        pic3: `執行員和活耀的Bennet打撲克牌。`,
        pic4: `這一屆的大胃王挑戰現場請來了飢餓的Bennet。`,
        credit: "工作人員",
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
        backMenu: "返回首页",
        stillWork : "将在2024年9月上线",
        pic1: `监控室的午餐时间。`,
        pic2: `理智过低的Bennet脸部特征。`,
        pic3: `执行员和活跃的Bennet打扑克牌。`,
        pic4: `这一届的大胃王挑战现场请来了饥饿的Bennet。`,
        credit: "工作人员",
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
        backMenu: "Volver al menú",
        stillWork : "Llegará en Septiembre de 2024",
        pic1: `La hora del almuerzo en la sala de monitoreo.`,
        pic2: `Las características faciales de Bennet con baja cordura.`,
        pic3: `El personal jugando a las cartas con Bennet activo.`,
        pic4: `El desafío de comer de este año ha invitado a Bennet hambriento.`,
        credit: "Créditos",
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
    lv2_working.textContent = all_language("stillWork");
    pic_text_1.textContent = all_language("pic1");
    pic_text_2.textContent = all_language("pic2");
    pic_text_3.textContent = all_language("pic3");
    pic_text_4.textContent = all_language("pic4");
    credit_menu.textContent = all_language("credit")

    switch (init.language) {
        case "English":
            return document.body.lang = "en";
        case "Tradition-CN":
            return document.body.lang = "cnt";
        case "Simplified-CN":
            return document.body.lang = "cns";
        case "Spanish":
            return document.body.lang = "es";
        default:
        document.body.lang = "en";
        break;
    }
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
