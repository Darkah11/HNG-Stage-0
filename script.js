const time = document.querySelector("[data-testid='test-user-time']");


// current utc time in ms
function updateTime() {
    const currentTime = new Date().getTime();
    time.innerHTML = `${currentTime}ms`;
}

setInterval(updateTime, 1000);
