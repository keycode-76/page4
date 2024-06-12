 // 4/now.js

let now_data = {
    request: "",
    action: "",
    window_Max: 10000,
    window_Min: 3000,
    computer_normal: 8000,
    computer_fast: 5000,
    computer_hyper: 3000,
    play_time: 0,
    win: false,
}

let body_values = {
    sleepy: 0,
    active:0,
    hunger: 0,
    sanity: 10,
}

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
        window_Max: 10000,
        window_Min: 3000,
        computer_normal: 8000,
        computer_fast: 5000,
        computer_hyper: 3000,
        play_time: 0,
        win: false,
    }
}
// 0 open, 1 close, 2 light
/*
紅燈亮起才能開大門 否則咚會跑出來 我們還要把他驅趕回去
收到飢餓請求時 請開門讓人員送餐 請不要開燈
收到修理請求時 請開燈 再開門
收到清理請求時

返回的人員
無異常 請輸入5173
異常 請輸入5172

任務 下回合規則
*/

export { now_data, body_values, init_nowData }