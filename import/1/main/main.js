// 1/main.js

import "/import/1/main/style.scss"
import "/import/1/main/rwd.scss"
import { initScreen } from "/import/2/screen/script.js";
import { renderMenu, pass_tutorial } from "/import/1/menu/script.js";
import { importGame } from "/import/2/game/script.js";
import { transDiv } from "/import/2/transition/script.js";
const app = document.querySelector("#app");

initScreen(app);
// renderMenu(app);
importGame(app);
// pass_tutorial.addEventListener("click", () => {
//     app.removeChild(menuArea);
//     importGame(app);
//     app.appendChild(transDiv);
// });
const back_menu = () => {
    app.removeChild(gameArea);
    initScreen(app);
    renderMenu(app);
    
}
const play_again = () => {
    app.removeChild(gameArea);
    importGame(app);
}
export { back_menu, play_again }
// window.addEventListener("animationend", () => {
//     if (event.animationName === "showtrans_anim") {
//         app.removeChild(transDiv);

//     }
// })