// menu.js
import "/import/1/menu/style.scss";
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

const choice_menu = createDiv("choice_menu");
const setup_menu = createDiv("setup_menu", "menu_btn", "setup");
const play_menu = createDiv("play_menu", "menu_btn", "play");
const menu_btns = createDiv("menu_btns");
const menu_img = createDiv("menu_img");
const menuArea = createDiv("menuArea");

const warning_logo = createDiv("warning_logo");
const logo_1 = createDiv("logo_1");
const logoArea = createDiv("logoArea");

const next_tutorial = createDiv("next_tutorial");
const pass_tutorial = createDiv("pass_tutorial", "menu_btn", "pass");
const tutorial_1 = createDiv("tutorial_1");
const tutorialArea = createDiv("tutorialArea");

const renderMenu = (app) => {
    tutorialArea.append(tutorial_1, pass_tutorial, next_tutorial);
    logoArea.append(logo_1);
    menu_btns.append(play_menu, setup_menu, choice_menu)
    menuArea.append(menu_img, menu_btns,)
    return app.appendChild(menuArea);
}
play_menu.addEventListener("click", () => {
    menuArea.innerHTML = "";
    menuArea.appendChild(logoArea);
    logo_1.className = "show_menu";
    logo_1.style.opacity = 0;
    warning_logo.style.opacity = 0;
});
let now_logo = 0;
window.addEventListener("animationend", (event) => {
    if (event.animationName === "show_anim") {
        if(now_logo === 0) {
            event.target.className = "disappear_menu";
        } else if (now_logo === 1) {
            warning_logo.className = "disappear_menu";
        }
    } else if (event.animationName === "disappear_anim") {
        if(now_logo === 0) {
            event.target.className = "";
            logoArea.innerHTML = ""
            logoArea.appendChild(warning_logo);
            warning_logo.className = "show_menu";
            now_logo = 1;
        } else if (now_logo === 1) { 
            menuArea.innerHTML = "";
            menuArea.appendChild(tutorialArea);
        }
    }
});

export { renderMenu, pass_tutorial }