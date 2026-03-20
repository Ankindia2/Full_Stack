setInterval(()=>{
document.getElementById('result');
const currentTime = Date.now();
// milisecond
const olympicTime = new Date(2028,6,14).getTime();
let timer = olympicTime-currentTime;

const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;

const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;

const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;

const second = Math.floor((timer)/(1000));
timer%=1000;

result.textContent =`days: ${day} hour: ${hour} minute: ${minute} second:${second}`

})