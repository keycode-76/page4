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
        pic1: `ID Photo Session: A furry creature is having its ID photo taken.
        It looks somewhat nervous, seeming a bit unfamiliar with the process. 
        The background is a standard blue backdrop.`,
        pic2: `Nighttime Incident: The creature is holding up a chair defensively, appearing startled.
        Two staff members are attempting to calm it down. The background is a blue room, 
        with windows on the wall indicating it's nighttime.`,
        pic3: `In the Laboratory: In a bright room, the creature is seated on a chair.
        Two researchers are facing it, and it appears calm, cooperating well with the researchers.
        There is a black window on the wall of the room, which has soft-textured walls.`,
        pic4: `Document Snapshot:
        Name: Bennet
        Height: 2 meters
        Weight: 160 kilograms
        Species: Unknown
        Physical Features: Furry light-colored fur, two tentacles on each side of the face, red nose.
        Important body structures resemble those of humans.
        Emotionally unstable at night, caution advised due to its strength and potential for aggression.
        Currently observed to have three types of emotions... [Not passed security clearance]`,
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
        pic1: `證件照拍攝中: 一隻毛茸茸的人正在拍攝證件照。
        牠神情有些緊張，似乎有些不習慣。背景是一面標準的藍色背景布。`,
        pic2: `夜晚突發事件: 那傢伙舉起椅子防身，似乎受到了驚嚇。旁邊兩個工作人員正在努力安撫，讓牠不要激動。背景是一個藍色的房間，牆上的窗戶顯示出已經是黑夜。`,
        pic3: `研究室中: 一個明亮的房間內，那傢伙坐在椅子上。
        兩位研究人員面對著牠，牠看起來情緒平穩，十分配合研究員。
        房間牆上有一面黑色的窗戶，牆壁是柔軟的質地組成。`,
        pic4: `文件側拍:
        名字-Bennet
        身高-2米
        體重-160公斤
        物種-不清楚
        外表特徵-毛茸茸的淺色毛皮、左右臉上各兩支觸手、紅色的鼻子。
        身體重要構造與人類相似
        情緒在夜晚時特別不穩定，需留意其強大力量，具備攻擊危險
        目前觀測到的情緒有三種...[未通過安全審核]`,
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
        pic1: `证件照拍摄中: 一只毛茸茸的人正在拍摄证件照。 
        它神情有些紧张，似乎有些不习惯。背景是一面标准的蓝色背景布。`,
        pic2: `夜晚突发事件: 那家伙举起椅子防身，似乎受到了惊吓。 
        旁边两个工作人员正在努力安抚，让它不要激动。背景是一个蓝色的房间，墙上的窗户显示出已经是黑夜。`,
        pic3: `研究室中: 一个明亮的房间内，那家伙坐在椅子上。
        两位研究人员面对着它，它看起来情绪平稳，十分配合研究员。房间墙上有一面黑色的窗户，墙壁是柔软的质地组成。`,
        pic4: `文件侧拍: 名字-Bennet 
        身高-2米 
        体重-160公斤 
        物种-不清楚 
        外表特征-毛茸茸的浅色毛皮、左右脸上各两支触手、红色的鼻子。 
        身体重要构造与人类相似 情绪在夜晚时特别不稳定，需留意其强大力量，具备攻击危险 
        目前观测到的情绪有三种...[未通过安全审核]`,
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
        pic1: `Sesión de foto de identificación: 
        Una criatura peluda está siendo fotografiada para su identificación.
        Parece algo nerviosa, mostrándose un poco desconocida con el proceso.
        El fondo es un telón azul estándar.`,
        pic2: `Incidente nocturno: La criatura sostiene una silla defensivamente, pareciendo sorprendida.
        Dos miembros del personal están tratando de calmarla. El fondo es una habitación azul,
        con ventanas en la pared que indican que es de noche.`,
        pic3: `En el laboratorio: En una habitación luminosa, la criatura está sentada en una silla.
        Dos investigadores la están observando, y parece tranquila, cooperando bien con los investigadores.
        Hay una ventana negra en la pared de la habitación, que tiene paredes de textura suave.`,
        pic4: `Instantánea del documento:
        Nombre: Bennet
        Altura: 2 metros
        Peso: 160 kilogramos
        Especie: Desconocida
        Características físicas: Pelaje peludo de color claro, dos tentáculos a cada lado de la cara, nariz roja.
        Estructuras corporales importantes se asemejan a las de los humanos.
        Emocionalmente inestable por la noche, se recomienda precaución debido a su fuerza y potencial agresivo.
        Actualmente se observan tres tipos de emociones... [No ha pasado el control de seguridad]`,
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
