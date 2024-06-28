// 1/main.js

import "/import/1/main/style.scss"
import "/import/1/main/rwd.scss"
import { initScreen } from "/import/2/screen/script.js";
import { renderMenu, instruct_pass } from "/import/1/menu/script.js";
import { importGame } from "/import/2/game/script.js";
import { init_trans } from "/import/2/transition/script.js";
import { SD_10 } from "/import/1/sound/script.js";

const app = document.querySelector("#app");

initScreen(app);
renderMenu(app);
// importGame(app);

instruct_pass.addEventListener("click", () => {
    app.innerHTML = "";
    initScreen(app);
    // if (menuArea) { app.removeChild(menuArea); }
    importGame(app);
    init_trans(app);
    SD_10.play();
});
const back_menu = () => {
    app.removeChild(gameArea);
    initScreen(app);
    renderMenu(app);
    SD_10.play();
}
const play_again = () => {
    app.removeChild(gameArea);
    importGame(app);
    SD_10.play();
}
export { back_menu, play_again }
window.addEventListener("animationend", () => {
    if (event.animationName === "showtrans_anim") {
        app.removeChild(transDiv);
    }
})