const selectMenu = document.querySelectorAll('select');
const content = document.querySelectorAll('.content');
const setTime = document.querySelector('.time');
const btn = document.querySelector('.button');
let setAlarm, alarmState = 'noset';
let ringtone = new Audio('./file/ringtone.mp3');


for(let i = 23; i>= 0 ; i--){
    i = i < 10 ? '0' + i : i;
    let option = `<option value="00">00</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="00">00</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? '0' + h: h;
    m = m < 10 ? '0' + m: m;
    s = s < 10 ? '0' + s: s;

    setTime.innerHTML = `${h}:${m}:${s}`;
    if (setAlarm == `${h}:${m}`) {
        ringtone.play();
        ringtone.loop = true;
    }
}, 1000);

btn.addEventListener('click', () => {
    setAlarm = `${selectMenu[0].value}:${selectMenu[1].value}`;
    if (setAlarm.includes('Hour') || setAlarm.includes('Minute')) {
        return alert('Select the right time!');
    }
})
function checkState(state){
    if (state == 'noset') {
        content.classList.add('disable');
        btn.innerText = 'clear alarm';
        alarmState = 'set';
    }
    else{
        content.classList.remove("disable");
        btn.innerText = "set alarm";
        setAlarm = '';
        ringtone.pause();
        alarmState = 'noset';
    }

}