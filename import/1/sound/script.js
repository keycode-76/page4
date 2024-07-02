 // 1/sound.js

import { init } from "/import/4/init/now.js";

import heyFile from "/assets/sound/click/hey.wav";
import barbarFile from "/assets/sound/click/a burr bour.wav"; // no use
import machine1File from "/assets/sound/click/machine_1.wav";
import machine2File from "/assets/sound/click/machine_2.wav";
import workingFile from "/assets/sound/click/working.wav";
import beepFile from "/assets/sound/click/beep.wav";
import footstepFile from "/assets/sound/footStep.wav";
import walkRightFile from "/assets/sound/walkRight.wav";
import squeezeFile from "/assets/sound/squeeze.wav";
import clickFile from "/assets/sound/click/tapeClick_2.wav";
import lockFile from "/assets/sound/click/lock_1.wav";
import hoverFile from "/assets/sound/click/hover_1.wav";
import horrorFile from "/assets/sound/ending/horror_1.wav";
import snoozeFile from "/assets/sound/ending/snooze_2.wav";
import heartbeatFile from "/assets/sound/heartbeat_2.wav";
import suspenseFile from "/assets/sound/horror_2.wav";
import tvSnowFile from "/assets/sound/tvSnow.wav";
import pageFlipFile from "/assets/sound/ending/pageFlip.mp3"; // too small
import unlockFile from "/assets/sound/ending/unlock.wav"; // too small




const SD_1 = new Audio(heyFile);
const SD_2 = new Audio(barbarFile);
const SD_3 = new Audio(machine1File);
const SD_5 = new Audio(machine2File);
const SD_4 = new Audio(workingFile); //screen
const SD_6 = new Audio(beepFile); //computer
const SD_7 = new Audio(footstepFile); //door
const SD_8 = new Audio(walkRightFile); //window need change and smaller
const SD_9 = new Audio(squeezeFile); //window
const SD_10 = new Audio(clickFile); //main, menu
const SD_11 = new Audio(lockFile); //end_scene
const SD_12 = new Audio(hoverFile); //end_scene
const SD_13 = new Audio(horrorFile); //screen
const SD_14 = new Audio(snoozeFile); //window
const SD_15 = new Audio(heartbeatFile); //window
const SD_16 = new Audio(suspenseFile); //screen
const SD_17 = new Audio(tvSnowFile); //transition
const SD_18 = new Audio(pageFlipFile); //end_scene
const SD_19 = new Audio(unlockFile); //end_scene


SD_4.loop = true; 
SD_15.loop = true;
SD_1.pause();
SD_2.pause();
SD_3.pause();
// SD_4.pause();
SD_5.pause();
SD_6.pause();
SD_7.pause(); //0620
SD_8.pause();
SD_9.pause();
SD_10.pause();
SD_11.pause();
SD_12.pause();
SD_13.pause();
SD_14.pause();
// SD_15.pause();
SD_16.pause();
SD_17.pause();
SD_18.pause();
SD_19.pause();


const instruct_video_0 = document.querySelector("#instruct_video_0");
const instruct_video_1 = document.querySelector("#instruct_video_1");

const sound_array = [
    instruct_video_0, instruct_video_1,
    SD_1, SD_2, SD_3, SD_4, SD_5, SD_6,  SD_7, SD_8, SD_9, SD_10, 
    SD_11, SD_12, SD_13, SD_14, SD_15, SD_16, SD_17, SD_18, SD_19,
]
const render_sound = () => {
    sound_array.forEach(sound => {
        sound.volume = init.volume/5;
    });
}

export { render_sound, 
    SD_1, SD_2, SD_3, SD_4, SD_5, SD_6,  SD_7, SD_8, SD_9, SD_10, 
    SD_11, SD_12, SD_13, SD_14, SD_15, SD_16, SD_17, SD_18, SD_19,
 }