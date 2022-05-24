const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const deg = 6;

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hour.style.setProperty('--rotate', (hh) + (mm / 12) + "deg");
    min.style.setProperty('--rotate', mm + 'deg');
    sec.style.setProperty('--rotate', ss + 'deg');
});

