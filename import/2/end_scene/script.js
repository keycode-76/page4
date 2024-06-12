// end_scene.js

import "/import/2/end_scene/style.scss"
import { back_menu, play_again } from "/import/1/main/main.js";
import { now_data } from "/import/4/init/now.js";

let num = 0;


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
const scoreText = createDiv("scoreText", 0, "SCORE");
const scoreNum = createDiv("scoreNum",);
const challengeText = createDiv("challengeText");
const nextChallenge_btn = createDiv("nextchallenge_btn", "end_btn");
const backToMenu_btn = createDiv("backtomenu_btn", "end_btn", "back to menu");

const init_endScene = (app) => {
    endSceneDiv.innerHTML = "";
    endSceneDiv.append(scoreText);
    num = 0;
    return app.appendChild(endSceneDiv);
}
backToMenu_btn.addEventListener("click", () => {
    back_menu();
});
nextChallenge_btn.addEventListener("click", () => {
    if (now_data.win === false) {
        play_again();
    } else if (now_data.win === true) {
        play_again();
    }
    
});
export { init_endScene }

const renderEnd_content = () => {
    if(num === 0) {
        endSceneDiv.append(scoreNum);
        let score = 2000 - now_data.play_time;
        if (now_data.win === true) {
            score+= 2000;
        }
        num_anim(scoreNum, 0, score, 2000);

    } else if(num === 1) {
        endSceneDiv.append(challengeText); 
        challengeText.textContent = "challenge failed"   
        nextChallenge_btn.textContent = "challenge again"  
        if (now_data.win === true) {
            challengeText.textContent = "challenge success"
            nextChallenge_btn.textContent = "next day challenge"
        }
    } else if(num === 2) {
        endSceneDiv.append(nextChallenge_btn, backToMenu_btn);
    } else { return; }
    num+=1;
}
window.addEventListener("animationend", (event) => {
    if (event.animationName === "showEndScene_anim") {
        renderEnd_content();
}})
