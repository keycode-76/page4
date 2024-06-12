 // 1/sound.js

import heyFile from "/assets/sound/click/hey.wav";
import barbarFile from "/assets/sound/click/a burr bour.wav";
import machine1File from "/assets/sound/click/machine_1.wav";
import machine2File from "/assets/sound/click/machine_2.wav";
import workingFile from "/assets/sound/click/working.wav";
import beepFile from "/assets/sound/click/beep.wav";

const SD_1 = new Audio(heyFile);
const SD_2 = new Audio(barbarFile);
const SD_3 = new Audio(machine1File);
const SD_5 = new Audio(machine2File);
const SD_4 = new Audio(workingFile);
const SD_6 = new Audio(beepFile);

SD_4.loop = true; 
SD_1.pause();
SD_2.pause();
SD_3.pause();
SD_5.pause();
SD_4.pause();
SD_6.pause();
// const slotSD_1 = new Audio(slot1File);
// btnSD_1.volume = 0.2;
// hitSD_1.volume = 0.5;

export { SD_1, SD_2, SD_3, SD_4, SD_5, SD_6
 }