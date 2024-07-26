// end_scene.js

import "/import/2/end_scene/style.scss"
import { back_menu, play_again } from "/import/1/main/main.js";
import { now_data, body_values, init } from "/import/4/init/now.js";
import { SD_10, SD_11, SD_12, SD_18, SD_19 } from "/import/1/sound/script.js";
import { which_language } from "/import/1/language/script";

const createDiv = (nameId, nameClass, text, func, hover, leave, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func); }
    if (hover) { itemModel.addEventListener("mouseover", hover); }
    if (leave) { itemModel.addEventListener("mouseleave", leave); }
    if (child1 || child2) { 
        if (child1) itemModel.appendChild(child1);
        if (child2) itemModel.appendChild(child2); 
    }
    return itemModel;
};

let num = 0;
const num_anim = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        if (Math.floor(progress * (end - start) + start) > 0) {
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        } else {
          obj.innerHTML = 0;
        }
        if (progress < 1) { window.requestAnimationFrame(step); }
      };
      window.requestAnimationFrame(step);
};

const endSceneDiv = createDiv("endSceneDiv");
const challengeText = createDiv("challengeText");
const scoreNum = createDiv("scoreNum",);

const end_lock_1 = createDiv("end_lock_1", 0, 0, (event) => {its_lock(event, 1)});
const end_lock_2 = createDiv("end_lock_2", 0, 0, (event) => {its_lock(event, 2)});

const end_btns = createDiv("end_btns");
const disk_open = createDiv("disk_open",);

const disk_name = createDiv("disk_name", 0);
const disk_Xbtn = createDiv("disk_Xbtn", 0, "X");

const pic_text_1 = createDiv(0, "pic_text")
const pic_text_2 = createDiv(0, "pic_text")
const pic_text_3 = createDiv(0, "pic_text")
const pic_text_4 = createDiv(0, "pic_text")
const pic_1_5 = createDiv(0, "disk_2 disk_data_5-1")
const pic_1_6 = createDiv(0, "disk_2 disk_data_6-1")
const pic_1_7 = createDiv(0, "disk_2 disk_data_7-1")
const pic_1_8 = createDiv(0, "disk_2 disk_data_8-1")

const pic_text_detect = createDiv("pic_text_detect", 0, 0, ()=> {pictrue_click()})

const diskPic_1 = createDiv("diskPic_1", "diskPic", 0, () => { picture_icon_click(1)}, );
const diskPic_2 = createDiv("diskPic_2", "diskPic", 0, () => { picture_icon_click(2)}, );
const diskPic_3 = createDiv("diskPic_3", "diskPic", 0, () => { picture_icon_click(3)}, );
const diskPic_4 = createDiv("diskPic_4", "diskPic", 0, () => { picture_icon_click(4)}, );
const diskPic_5 = createDiv("diskPic_5", "diskPic", 0, () => { picture_icon_click(5)}, );
const diskPic_6 = createDiv("diskPic_6", "diskPic", 0, () => { picture_icon_click(6)}, );
const diskPic_7 = createDiv("diskPic_7", "diskPic", 0, () => { picture_icon_click(7)}, );
const diskPic_8 = createDiv("diskPic_8", "diskPic", 0, () => { picture_icon_click(8)}, );
const diskPic_9 = createDiv("diskPic_9", "diskPic", 0,  );

const diskPic_Xbtn = createDiv("diskPic_Xbtn", 0, "X");
const disk_video_Xbtn = createDiv("disk_video_Xbtn", 0, "X");
const end_btnText = createDiv("end_btnText");
const backToMenu_btn = createDiv("backtomenu_btn", 0, 0, () => {back_menu()});
const retry_iconBtn_1 = createDiv("retry_iconBtn_1", "end_btn", 0, () => { play_again() }, () => {
    endBtn_hover({
        english: "retry",
        traditional: "再挑戰",
        simplified: "再挑战",
        spanish: "reintentar"
    });
});
const disk_iconBtn_1 = createDiv("disk_iconBtn_1", "end_btn", 0, 0, () => {
    endBtn_hover({
        english: "data: The usual appearance",
        traditional: "資料: 平日的樣子",
        simplified: "资料: 平日的样子",
        spanish: "datos: La apariencia habitual",
    });
}, 0, end_lock_1);
const disk_iconBtn_2 = createDiv("disk_iconBtn_2", "end_btn", 0, 0, () => {
    endBtn_hover({
        english: "data: True appearance",
        traditional: "資料: 真實樣貌",
        simplified: "资料: 真实样貌",
        spanish: "datos: Apariencia real",
    });
}, 0, end_lock_2);

const init_endScene = (app) => {
    endSceneDiv.innerHTML = "";
    end_btns.innerHTML = "";
    end_lock_1.style.opacity = 1;
    end_lock_2.style.opacity = 1;
    end_lock_1.className = "end_lock";
    end_lock_2.className = "end_lock";
    num = 0;
    renderEnd_content();
    endBtn_idle();
    return app.appendChild(endSceneDiv);
}
const endBtn_idle = () => {
    end_btnText.textContent = which_language({
        english: "Encrypt files",
        traditional: "加密檔案",
        simplified: "加密文件",
        spanish: "Encriptar archivos"
    });
    const pic_texts = document.querySelectorAll(".pic_text");
    switch (init.language) { // 語言
        case "English":
            pic_text_detect.setAttribute("lang", "en");    
            return end_btnText.setAttribute("lang", "en");
        case "Tradition-CN":
            pic_text_detect.setAttribute("lang", "cnt");    
            return end_btnText.setAttribute("lang", "cnt");
        case "Simplified-CN":
            pic_text_detect.setAttribute("lang", "cns");    
            return end_btnText.setAttribute("lang", "cns");
        case "Spanish":
            pic_text_detect.setAttribute("lang", "es");    
            return end_btnText.setAttribute("lang", "es");
        default:
            end_btnText.setAttribute("lang", "en");
        break;
    }
}
const endBtn_hover = (text) => {
    end_btnText.textContent = which_language(text);
    disk_name.textContent = which_language(text);
    SD_12.currentTime = 0;
    SD_12.play();
}
const renderEnd_content = () => {
    end_btns.append(retry_iconBtn_1, disk_iconBtn_1, disk_iconBtn_2);
    challengeText.textContent = which_language({
        english: "score",
        traditional: "分數",
        simplified: "分数",
        spanish: "puntuación"
    });
    if(num === 0) {
        endSceneDiv.append(challengeText); 
    } else if(num === 1) {
        endSceneDiv.append(scoreNum, end_btns, end_btnText, backToMenu_btn);
        backToMenu_btn.style.opacity = 0;
        let score = init.bonus_time - (now_data.play_time*80);
        if (score<0) score = 0;
        score += (now_data.complete_request*100);
        if (body_values.active < 5) {score+=init.bonus_value}; // 500
        if (body_values.hunger < 5) {score+=init.bonus_value};
        if (body_values.sanity > 5) {score+=init.bonus_value};
        if (body_values.active < 3 && body_values.hunger < 3 && body_values.sanity > 7) {
            score+=init.bonus_value_big }; // 2000
        if (now_data.win === true) {score+=1000;} // win 1000
        num_anim(scoreNum, 0, score, 2000);
        if (score >= init.score_1 && score < init.score_2) {
            end_lock_1.className = "end_unlock";
            SD_19.play();
        } else if (score>init.score_2) {
            end_lock_1.className = "end_unlock";
            end_lock_2.className = "end_unlock";
            SD_19.play();
        }
    } else if(num === 2) {
        backToMenu_btn.style.opacity = 1;
    }
    num+=1;
}
const its_lock = (event, num) => { //endlock
    event.target.parentElement.classList.add("end_lock_click");
    if(num === 1) {
        end_btnText.textContent = which_language({
            english: `unlock for ${init.score_1} score`,
            traditional: `分數未達${init.score_1}`,
            simplified: `分数未达${init.score_1}`,
            spanish: `Desbloquear por ${init.score_1} puntos`
        });
    } else if (num === 2) {
        end_btnText.textContent = which_language({
            english: `unlock for ${init.score_2} score`,
            traditional: `分數未達${init.score_2}`,
            simplified: `分数未达${init.score_2}`,
            spanish: `Desbloquear por ${init.score_2} puntos`
        });
    }
    setTimeout(() => {
        event.target.parentElement.classList.remove("end_lock_click");
        endBtn_idle();
    }, 1000);
    SD_10.pause();
    SD_11.currentTime = 0;
    SD_11.play();
};
disk_iconBtn_1.addEventListener("click", () => {
    if (end_lock_1.className === "end_lock") return;
    disk_open.innerHTML = "";
    disk_open.append(disk_name, disk_Xbtn);
    disk_open.append(diskPic_1, diskPic_2, diskPic_3, diskPic_4);
    const diskPics = document.querySelectorAll(".diskPic");
    diskPics.forEach(element => {
        element.className = "diskPic";
    });
    endSceneDiv.appendChild(disk_open);
    SD_10.play();
});
disk_iconBtn_2.addEventListener("click", () => {
    if (end_lock_2.className === "end_lock") return;
    disk_open.innerHTML = "";
    disk_open.append(disk_name, disk_Xbtn);
    disk_open.append(diskPic_5, diskPic_6, diskPic_7, diskPic_8, diskPic_9);
    const diskPics = document.querySelectorAll(".diskPic");
    diskPics.forEach(element => {
        element.className = "diskPic";
    });
    endSceneDiv.appendChild(disk_open);
    SD_10.play();
});
disk_Xbtn.addEventListener("click", () => {
    endSceneDiv.removeChild(disk_open);
    SD_10.play();
});
let pic_click_num = 0;

const picture_icon_click = (num) => {
    const diskPicElement = document.querySelector(`#diskPic_${num}`);
    if (diskPicElement) {
        diskPicElement.className = `diskPick_click disk_data_${num}`;
        disk_open.append(diskPic_Xbtn, pic_text_detect);
        pic_click_num = num;
        SD_18.currentTime = 0;
        SD_18.play();
    } 
};
const pictrue_click = () => {
    pic_text_detect.innerHTML = "";
    switch (pic_click_num) {
        case 1:
            pic_text_detect.appendChild(pic_text_1);
            break;
        case 2:
            pic_text_detect.appendChild(pic_text_2);
            break;
        case 3:
            pic_text_detect.appendChild(pic_text_3);
            break;
        case 4:
            pic_text_detect.appendChild(pic_text_4);
            break;
        case 5:
            pic_text_detect.appendChild(pic_1_5);
            break;
        case 6:
            pic_text_detect.appendChild(pic_1_6);
            break;
        case 7:
            pic_text_detect.appendChild(pic_1_7);
            break;
        case 8:  
            pic_text_detect.appendChild(pic_1_8);
            break;
        default:
            return;
    }
    let timer;
    clearInterval(timer);
    timer = setTimeout(() => {
        picture_leave();
    }, 1000);
};
const picture_leave = () => {
    pic_text_detect.innerHTML = "";
};
diskPic_Xbtn.addEventListener("click", () => {
    disk_open.removeChild(diskPic_Xbtn);
    disk_open.removeChild(pic_text_detect);
    diskPic_1.className = "diskPic";
    diskPic_2.className = "diskPic";
    diskPic_3.className = "diskPic";
    diskPic_4.className = "diskPic";
    diskPic_5.className = "diskPic";
    diskPic_6.className = "diskPic";
    diskPic_7.className = "diskPic";
    diskPic_8.className = "diskPic";
    diskPic_9.className = "diskPic";
    
    pic_click_num = 0;
    SD_18.currentTime = 0;
    SD_18.play();
});

diskPic_9.addEventListener("click", () => {
    const video = document.querySelector("#disk2_video");
    video.currentTime = 0;
    video.play();
    video.style.display = 'block';
    disk_open.appendChild(disk_video_Xbtn);
    video.addEventListener("ended", () => {
        video.style.display = "none";
        disk_video_Xbtn.click();
    });
    disk_video_Xbtn.addEventListener("click", () => { 
        video.style.display = "none"; 
        video.pause();
        disk_open.removeChild(disk_video_Xbtn);
    })
});

export { init_endScene,
    backToMenu_btn, pic_text_1, pic_text_2, pic_text_3, pic_text_4
 }

window.addEventListener("animationend", (event) => {
     if (event.animationName === "showEndScene_anim") { // end_scene
        renderEnd_content();
    } 
})
