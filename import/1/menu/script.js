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

const level_1_menu = createDiv("level_1_menu", "menu_btn", 0, () => { menu_btn_click("lv1") });
const level_2_menu = createDiv("level_2_menu", "menu_btn", 0, () => { menu_btn_click("lv2") });
const volume_menu = createDiv("volume_menu", "menu_btn", 0, () => { menu_btn_click("volume") });
const credit_menu = createDiv("credit_menu", "menu_btn", 0, () => { menu_btn_click("credit") });

const menu_btns = createDiv("menu_btns");
const menu_img = createDiv("menu_img");
const menuArea = createDiv("menuArea");
const menu_bottom = createDiv("menu_bottom");

const lv2_working = createDiv("lv2_working");

const volume_add = createDiv("volume_add", 0, "+");
const volume_1 = createDiv(0, "volume_slot", "-");
const volume_2 = createDiv(0, "volume_slot", "-");
const volume_3 = createDiv(0, "volume_slot", "-");
const volume_4 = createDiv(0, "volume_slot", "-");
const volume_5 = createDiv(0, "volume_slot", "-");
const volume_slots = [volume_1, volume_2, volume_3, volume_4, volume_5];
const volume_sub = createDiv("volume_sub", 0, "-");

const credit_div = createDiv("credit_div");

let credit_list = [
    { title: "instruction music", text: "Adolf & The Bohemians - Old Bohemians Dance (1936)", type: "label"},
    { title: "HMCC Official", text: "HMCC.official", type: "a", link: "https://www.instagram.com/hmcc.official?igsh=MW5ybnFuemd3aWxmYg==",},
    { title: "Video source", text: "Nota TV show", type: "a", link: "",},
    { title: "font/fuente", text: "ChakraPetch-Bold", text2:"GochiHand-Regular", type: "label"},
    { title: "字體", text: "GenJyuuGothicL-Bold", text2:"ChenYuluoyan-Thin", type: "label"},
    { title: "字体", text: "No.82-ShangShouJianHeiCuTi", text2:"AaTaoTaoWuLongNaiLaoSu", type: "label"},
];

const instruct_div = createDiv("instruct_div");
const instruct_yes = createDiv("instruct_yes", 0, 0, () => {play_instruct()}); // 放到語言那裏了
const instruct_pass = createDiv("instruct_pass");

const warning_logo = createDiv("warning_logo");
const logo_menu = createDiv("logo_menu");
const logo_div = createDiv("logo_div");

let bottom_open = false; // volume的toggle

const render_icon = (app) => {
    logo_div.appendChild(logo_menu);
    app.appendChild(logo_div);
}
const renderMenu = (app) => {
    menuArea.innerHTML = "";
    menu_btns.innerHTML = "";
    menu_btns.append(level_1_menu, level_2_menu, volume_menu, credit_menu);
    menuArea.append(menu_img, menu_btns,);
    bottom_open = false;
    render_volume();
    return app.appendChild(menuArea);
};

const menu_btn_click = (name) => {
    menu_bottom.innerHTML = "";
    if (bottom_open) {
        bottom_open = false;
    } else {
        menuArea.appendChild(menu_bottom);
        if (name === "lv1") {
            menuArea.innerHTML = "";
            menuArea.appendChild(instruct_div);
            instruct_div.append(instruct_yes, instruct_pass);
        } else if (name === "lv2") {
            menu_bottom.append(lv2_working);
        } else if (name === "volume") {
            menu_bottom.append(volume_sub, volume_1, volume_2, volume_3, volume_4, volume_5, volume_add);
        } else if (name === "credit") {
            render_credit();
        }
        bottom_open = true;
    }
    SD_10.play();

}

const render_credit = () => {
    credit_div.innerHTML = "";
    credit_list.forEach((item) => {
        const title = document.createElement("div");
        title.textContent = item.title;
        title.className = "credit_title"

        let element;
        if (item.type === "a") {
            element = document.createElement("a");
            element.href = item.link; // Assuming a placeholder href
        } else if (item.type === "label") {
            element = document.createElement("label");

        }

        element.textContent = item.text;

        title.appendChild(element);

        if (item.text2) {
            const element2 = document.createElement("label");
            element2.textContent = `${item.text2}`;
            title.appendChild(element2);
        }
        credit_div.appendChild(title);
    });
    menu_bottom.appendChild(credit_div);
};
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
    } 
});

export { render_icon, renderMenu, instruct_pass,
     instruct_div, instruct_yes, level_1_menu, level_2_menu, volume_menu, credit_menu, lv2_working  }