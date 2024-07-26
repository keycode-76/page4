// trans.js

import "/import/2/transition/style.scss";
import { SD_17 } from "/import/1/sound/script.js";

const transDiv = document.createElement("div");
const trans_text = document.createElement("div");
const trans_snow = document.createElement("div");

const init_trans = (app) => {
    transDiv.innerHTML = "";
    transDiv.className = "";
    transDiv.id= "transDiv";
    trans_text.id= "trans_text";
    trans_snow.id = "trans_snow";
    trans_text.style.display = "block";
    transDiv.append(trans_text);
    loading_show();
    return app.appendChild(transDiv);
};
 
const loading_show = () => { //endlock
    setTimeout(() => {
        trans_text.style.display = "none";
        transDiv.append(trans_snow);
        transDiv.className = "trans_fade";
        SD_17.play();
    }, 5000);
};

export { init_trans, 
    trans_text }