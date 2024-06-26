// end_scene.js

import "/import/2/end_scene/style.scss"
import { back_menu, play_again } from "/import/1/main/main.js";
import { now_data, body_values } from "/import/4/init/now.js";
import { SD_10, SD_11, SD_12 } from "/import/1/sound/script.js";

const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    itemModel.id = nameId;
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func); }
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
const retry_endBtn_1 = createDiv("retry_endBtn_1", "end_btn", 0, () => {play_again()});
const disk_endBtn_1 = createDiv("disk_endBtn_1", "end_btn", 0, 0, end_lock_1);
const next_endBtn_1 = createDiv("next_endBtn_1", "end_btn", 0, 0, end_lock_2);

const diskDiv_1 = createDiv("diskDiv_1",);
const disk_Xbtn = createDiv("disk_Xbtn", 0, "X");

const end_btnText = createDiv("end_btnText", 0, "encrypt files");
const backToMenu_btn = createDiv("backtomenu_btn", 0, "back to menu", () => {back_menu()});

const init_endScene = (app) => {
    endSceneDiv.innerHTML = "";
    end_btns.innerHTML = "";
    end_lock_1.style.opacity = 1;
    end_lock_2.style.opacity = 1;
    end_lock_1.className = "end_lock";
    end_lock_2.className = "end_lock";

    num = 0;
    renderEnd_content();
    return app.appendChild(endSceneDiv);
}

retry_endBtn_1.addEventListener("mouseover", () => {
    end_btnText.textContent = "retry";
    SD_12.currentTime = 0;
    SD_12.play();
});
disk_endBtn_1.addEventListener("mouseover", () => {
    end_btnText.textContent = "disk of bennet"
    SD_12.currentTime = 0;
    SD_12.play();
});
disk_endBtn_1.addEventListener("click", () => {
    if (end_lock_1.className === "end_lock") return;
    diskDiv_1.innerHTML = "";
    diskDiv_1.appendChild(disk_Xbtn);
    endSceneDiv.appendChild(diskDiv_1);
    SD_10.play();
});
disk_Xbtn.addEventListener("click", () => {
    endSceneDiv.removeChild(diskDiv_1);
    SD_10.play();
})
next_endBtn_1.addEventListener("mouseover", () => {
    end_btnText.textContent = "one time ticket to challenge 2"
    SD_12.currentTime = 0;
    SD_12.play();
});
next_endBtn_1.addEventListener("click", () => {
});
const its_lock = (event, num) => { //endlock
    event.target.parentElement.classList.add("end_lock_click");
    if(num === 1) {
            end_btnText.textContent = "unlock for 1000 score";
        } else if (num === 2) {
            end_btnText.textContent = "unlock for 1500 score";
        }
    setTimeout(() => {
        event.target.parentElement.classList.remove("end_lock_click");
        end_btnText.textContent = "encrypt files";
    }, 1000);
    SD_10.pause();
    SD_11.currentTime = 0;
    SD_11.play();
};

export { init_endScene }

const renderEnd_content = () => {
    end_btns.append(retry_endBtn_1, disk_endBtn_1, next_endBtn_1);
    if (now_data.win === true) {
        challengeText.textContent = "score"   
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
            // console.log(score, now_data.play_time, body_values);
            if (score >= 1000 && score < 1500) {
                end_lock_1.className = "end_unlock";
            } else if (score>=1500) {
                end_lock_1.className = "end_unlock";
                end_lock_2.className = "end_unlock";
            }
        } else if(num === 2) {
            backToMenu_btn.style.opacity = 1;
        }

    } else if (now_data.win === false) {
        challengeText.textContent = "lost connect";   
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
