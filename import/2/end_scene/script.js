// end_scene.js

import "/import/2/end_scene/style.scss"
import { back_menu, play_again } from "/import/1/main/main.js";
import { now_data, body_values, init } from "/import/4/init/now.js";
import { SD_10, SD_11, SD_12, SD_18, SD_19 } from "/import/1/sound/script.js";
import { which_language } from "/import/1/language/script";

const createDiv = (nameId, nameClass, text, func, hover, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func); }
    if (hover) { itemModel.addEventListener("mouseover", hover); }
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
const diskDiv_1 = createDiv("diskDiv_1",);
const disk_name = createDiv("disk_name", 0, "Picture");
const disk_Xbtn = createDiv("disk_Xbtn", 0, "X");

const diskPic_1 = createDiv("diskPic_1", "diskPic", 0, () => { picture_click(1)} );
const diskPic_2 = createDiv("diskPic_2", "diskPic", 0, () => { picture_click(2)} );
const diskPic_3 = createDiv("diskPic_3", "diskPic", 0, () => { picture_click(3)} );
const diskPic_4 = createDiv("diskPic_4", "diskPic", 0, () => { picture_click(4)} );
const diskPic_Xbtn = createDiv("diskPic_Xbtn", 0, "X");

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
        english: "picture: check-in record",
        traditional: "照片: 報到紀錄",
        simplified: "照片: 报到记录",
        spanish: "imagen: registro de entrada",
    });
}, end_lock_1);

const next_iconBtn_1 = createDiv("next_iconBtn_1", "end_btn", 0, 0, () => {
    endBtn_hover({
        english: "data: background investigation",
        traditional: "資料: 背景調查",
        simplified: "资料: 背景调查",
        spanish: "datos: investigación de antecedentes",
    });
}, end_lock_2);


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
}
const endBtn_hover = (text) => {
    end_btnText.textContent = which_language(text);
    SD_12.currentTime = 0;
    SD_12.play();
}


disk_iconBtn_1.addEventListener("click", () => {
    if (end_lock_1.className === "end_lock") return;
    diskDiv_1.innerHTML = "";
    diskDiv_1.append(disk_name, disk_Xbtn);
    diskDiv_1.append(diskPic_1, diskPic_2, diskPic_3, diskPic_4);
    const diskPics = document.querySelectorAll(".diskPic");
    diskPics.forEach(element => {
        element.className = "diskPic";
    });
    endSceneDiv.appendChild(diskDiv_1);
    SD_10.play();
});
disk_Xbtn.addEventListener("click", () => {
    endSceneDiv.removeChild(diskDiv_1);
    SD_10.play();
})
// diskPic_1.addEventListener("click", () => {
//     diskPic_1.className = "diskPick_click";
//     diskDiv_1.appendChild(diskPic_Xbtn);
// });
const picture_click = (num) => {
    const diskPicElement = document.querySelector(`#diskPic_${num}`);
    if (diskPicElement) {
        diskPicElement.className = "diskPick_click";
        diskDiv_1.appendChild(diskPic_Xbtn);
        SD_18.currentTime = 0;
        SD_18.play();
    } 
}
diskPic_Xbtn.addEventListener("click", () => {
    diskDiv_1.removeChild(diskPic_Xbtn);
    diskPic_1.className = "diskPic";
    diskPic_2.className = "diskPic";
    diskPic_3.className = "diskPic";
    diskPic_4.className = "diskPic";
    SD_18.currentTime = 0;
    SD_18.play();
})
next_iconBtn_1.addEventListener("click", () => {
});

const its_lock = (event, num) => { //endlock
    event.target.parentElement.classList.add("end_lock_click");
    if(num === 1) {
        end_btnText.textContent = which_language({
            english: "unlock for 1000 score",
            traditional: "分數未達1000",
            simplified: "分数未达1000",
            spanish: "Desbloquear por 1000 puntos"
        });
    } else if (num === 2) {
        end_btnText.textContent = which_language({
            english: "unlock for 1500 score",
            traditional: "分數未達1500",
            simplified: "分数未达1500",
            spanish: "Desbloquear por 1500 puntos"
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

export { init_endScene,
    backToMenu_btn
 }

const renderEnd_content = () => {
    end_btns.append(retry_iconBtn_1, disk_iconBtn_1, next_iconBtn_1);
    // end_lock_1.className = "end_lock";
    // end_lock_2.className = "end_lock";
    if (now_data.win === true) {
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
            let score = 2000 - now_data.play_time;
            if (body_values.active < 5) {score+=100};
            if (body_values.hunger < 5) {score+=100};
            if (body_values.sanity > 5) {score+=100};
            num_anim(scoreNum, 0, score, 2000);
            if (score >= 1000 && score < 1499) {
                end_lock_1.className = "end_unlock";
                SD_19.play();
            } else if (score>1500) {
                end_lock_1.className = "end_unlock";
                end_lock_2.className = "end_unlock";
                SD_19.play();
            }

        } else if(num === 2) {
            backToMenu_btn.style.opacity = 1;
        }

    } else if (now_data.win === false) {
        challengeText.textContent = which_language({
            english: "lost connect",
            traditional: "訊號丟失",
            simplified: "信号丢失",
            spanish: "se perdió la conexión"
        });
        if(num === 0) {
            endSceneDiv.append(challengeText); 
        } else if(num === 1) {
            endSceneDiv.append(end_btns, end_btnText, backToMenu_btn);
            backToMenu_btn.style.opacity = 0;
        } else if(num === 2) {
            backToMenu_btn.style.opacity = 1;
        } 
    } else { return; }
    num+=1;
}
window.addEventListener("animationend", (event) => {
     if (event.animationName === "showEndScene_anim") { // end_scene
        renderEnd_content();
    } else if (event.animationName === "end_unlock_anim") {
        event.target.style.opacity = 0;
        // event.target.parentElement.remove(event)
    }
})
