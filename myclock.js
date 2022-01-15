let a;
let date;
let time;
const opt = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString("en-IN",opt);
    time = a.getHours().toLocaleString('en-US',{minimumIntegerDigits:2}) + ':' + a.getMinutes().toLocaleString('en-US',{minimumIntegerDigits:2}) + ':' + a.getSeconds().toLocaleString('en-US',{minimumIntegerDigits:2});
    document.getElementById('date').innerHTML = date;    document.getElementById('time').innerHTML = time;
}, 1000);