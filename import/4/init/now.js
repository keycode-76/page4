 // 4/now.js

let now_data = {}
let body_values = {}

const init_nowData = () =>{
    clearInterval(playtimer);
    body_values = {
        sleepy: 0,
        active:0,
        hunger: 0,
        sanity: 10,
    }
    now_data = {
        request: "",
        action: "",
        window_Max: 3000, // 窗戶出題速度 window
        window_Min: 1000,
        computer_normal: 7000, // 掉san 均速 computer 7000
        computer_fast: 3500, // 4000
        computer_hyper: 1000,
        staff_work: 3000, // 員工走路速度 door
        play_time: 0, // 遊玩時長 computer & end_scene
        complete_request: 0, // 完成任務統計 door
        win: false, // 結束判斷動畫 end_scene
    }
}

// 平均: 40秒過關 6完成
// 最佳: 33秒過關 7完成
// 最佳: 36秒過關 8完成 3700

let playtimer;
const startPlaytimer = () => {
    playtimer = setInterval(() => {
        now_data.play_time+=1;
        // console.log(now_data.play_time, now_data.complete_request)
    }, 1500);
};
const init = {
    anim: 0,//遊戲動畫初始化
    language: "English",
    volume: 3,
    bonus_time: 5000, 
    bonus_value: 500,
    bonus_value_big: 2000,
    score_1: 3500,
    score_2: 5000,
  };
export { now_data, body_values, init_nowData, startPlaytimer, playtimer, init }