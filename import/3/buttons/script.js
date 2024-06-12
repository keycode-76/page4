// 3/buttons.js

import "/import/3/buttons/style.scss";
import { now_data } from "/import/4/init/now.js";
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
const pass_btn = createDiv("pass_btn", "funcBtn", "2");
const danger_btn = createDiv("danger_btn", "funcBtn", "1");

const buttonsDiv = createDiv("buttonsDiv");

const renderButtons = (app) => {
    buttonsDiv.innerHTML = "";
    buttonsDiv.append(danger_btn, pass_btn)
    return app.appendChild(buttonsDiv);
}
export { renderButtons, pass_btn }

const clickFuncBtn = (who) => {
    
};

pass_btn.addEventListener("click", () => clickFuncBtn(0));
danger_btn.addEventListener("click", () => clickFuncBtn(1));


