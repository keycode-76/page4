 // 4/now.js

let now_data = {}
let body_values = {}

const init_nowData = () =>{
    body_values = {
        sleepy: 0,
        active:0,
        hunger: 0,
        sanity: 10,
    }
    now_data = {
        request: "",
        action: "",
        window_Max: 2000, // 窗戶出題速度 window
        window_Min: 1000,
        computer_normal: 7000, // 掉san 均速 computer
        computer_fast: 3000,
        computer_hyper: 1000,
        staff_work: 2000, // 員工走路速度 door
        play_time: 0, // 遊玩時長
        win: false, // 結束判斷動畫 end_scene

    }
}

let init_anim;
export { now_data, body_values, init_nowData, init_anim }