document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes();
    createCountdownCircles();
    startCountdown();
});

function createCountdownCircles() {
    const countdownContainers = document.querySelectorAll('.timer-container');

    countdownContainers.forEach(container => {
        const circle = document.createElement('div');
        circle.className = 'timer-circle';
        container.appendChild(circle);
    });
}

// الدالة animateSnowflake وغيرها تبقى كما هي من السابق


function createCountdownCircles() {
    const countdownContainers = document.querySelectorAll('.timer-container');

    countdownContainers.forEach(container => {
        const circle = document.createElement('div');
        circle.className = 'timer-circle';
        container.appendChild(circle);
    });
}

// الدالة animateSnowflake وغيرها تبقى كما هي من السابق


document.addEventListener("DOMContentLoaded", function () {
    createSnowflakes();
    startCountdown();
});

function createSnowflakes() {
    const numSnowflakes = 50; // تعديل حسب الرغبة

    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    positionSnowflake(snowflake);
    document.body.appendChild(snowflake);
    animateSnowflake(snowflake);
}

function positionSnowflake(snowflake) {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    const randomSize = Math.random() * 10; // تعديل حجم الثلج حسب الرغبة

    snowflake.style.left = `${randomX}px`;
    snowflake.style.top = `${randomY}px`;
    snowflake.style.width = `${randomSize}px`;
    snowflake.style.height = `${randomSize}px`;
}

function animateSnowflake(snowflake) {
    const animationDuration = Math.random() * 5 + 5; // تعديل مدة الحركة حسب الرغبة

    snowflake.style.animationDuration = `${animationDuration}s`;

    const keyframes = [
        { transform: 'translateY(0) rotate(0deg)' },
        { transform: `translateY(${window.innerHeight}px) rotate(360deg)` }
    ];

    snowflake.animate(keyframes, {
        duration: animationDuration * 1000,
        iterations: Infinity
    });
}

function startCountdown() {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function updateCountdown() {
        const currentDate = new Date();
        const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);
        const timeDifference = newYearDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    updateCountdown(); // للتأكد من بدء العد التنازلي عند تحميل الصفحة
    setInterval(updateCountdown, 1000);
}
