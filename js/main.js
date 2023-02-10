const year = document.querySelector('#year')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

const preloader = document.querySelector('#preloader')
const countdown = document.querySelector('#countdown')

// Делаем расчеты 
const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);


// 
year.innerHTML += currentYear + 1;

function updateCounter(){
    const currentTime = new Date();

    const diff = nextYear - currentTime;

    // перевод в дни
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

    // часов всего
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

    // минут всего
    const minutesLeft = Math.floor(diff / 1000/ 60) % 60;

    // секунд всего
    const secundsLeft = Math.floor(diff / 1000) % 60;
    
    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerHTML = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerHTML = secundsLeft < 10 ? '0' + secundsLeft : secundsLeft;
}

// запуск функции в интервал 1 секунда 
setInterval(updateCounter, 1000);

setTimeout(function(){
    preloader.remove();
    countdown.style.display = "flex";
}, 1000)
