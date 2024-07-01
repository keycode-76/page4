// menu.js
import "/import/1/menu/style.scss";
import { init } from "/import/4/init/now.js";
import { render_sound, SD_10 } from "/import/1/sound/script.js";


const createDiv = (nameId, nameClass, text, func, child1, child2) => {
    const itemModel = document.createElement("div");
    if (nameId) { itemModel.id = nameId; }
    if (nameClass) { itemModel.className = nameClass; }
    if (text) { itemModel.textContent = text; }
    if (func) { itemModel.addEventListener("click", func) }    
//     if (child1) itemModel.appendChild(child1);
//     if (child2) itemModel.append(child1, child2); 
    return itemModel;
};


const level_2_menu = createDiv("level_2_menu", "menu_btn");

const level_1_menu = createDiv("level_1_menu", "menu_btn");
const volume_menu = createDiv("volume_menu", "menu_btn");
const menu_btns = createDiv("menu_btns");
const menu_img = createDiv("menu_img");
const menuArea = createDiv("menuArea");
const menu_bottom = createDiv("menu_bottom");

const volume_add = createDiv("volume_add", 0, "+");
const volume_1 = createDiv(0, "volume_slot", "-");
const volume_2 = createDiv(0, "volume_slot", "-");
const volume_3 = createDiv(0, "volume_slot", "-");
const volume_4 = createDiv(0, "volume_slot", "-");
const volume_5 = createDiv(0, "volume_slot", "-");
const volume_slots = [volume_1, volume_2, volume_3, volume_4, volume_5];

const volume_sub = createDiv("volume_sub", 0, "-");

const instruct_div = createDiv("instruct_div");
const instruct_yes = createDiv("instruct_yes", 0, 0, () => {play_instruct()}); // 放到語言那裏了
const instruct_pass = createDiv("instruct_pass");

const warning_logo = createDiv("warning_logo");
const logo_1 = createDiv("logo_1");
const logoArea = createDiv("logoArea");
const tutorialArea = createDiv("tutorialArea");

let volume_open = false; // volume的toggle

const renderMenu = (app) => {
    menuArea.innerHTML = "";
    menu_btns.innerHTML = "";
    menu_btns.append(level_1_menu, level_2_menu, volume_menu);
    menuArea.append(menu_img, menu_btns,);
    volume_open = false;
    render_volume();
    return app.appendChild(menuArea);
}
level_1_menu.addEventListener("click", () => {
    menuArea.innerHTML = "";
    menuArea.appendChild(instruct_div);
    instruct_div.append(instruct_yes, instruct_pass);
    SD_10.play();
});
volume_menu.addEventListener("click", () => {
    menu_bottom.innerHTML = "";
    if (volume_open) {
        volume_open = false;
    } else {
        menuArea.appendChild(menu_bottom);
        menu_bottom.append(volume_sub, volume_1, volume_2, volume_3, volume_4, volume_5, volume_add);
        volume_open = true;
    }
    SD_10.play();
});


volume_add.addEventListener("click", () => {
    if (init.volume < volume_slots.length) {
        init.volume += 1;
        render_volume();
    }
});
volume_sub.addEventListener("click", () => {
    if (init.volume > 0) {
        init.volume -= 1;
        render_volume();
    }
});

const render_volume = () => {
    volume_slots.forEach((slot, index) => {
        slot.textContent = (index < init.volume) ? "|" : "-";
        render_sound();
        SD_10.play();
    });
};

// level_2_menu.addEventListener("click", () => {});
const play_instruct = () => { // instruct_yes 放到語言那裏了
    menuArea.remove(instruct_div);
    SD_10.play();
};

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

export { renderMenu, instruct_pass,
     instruct_div, instruct_yes, level_1_menu, level_2_menu, volume_menu,  }