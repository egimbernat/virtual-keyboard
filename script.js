let isCapsLock = false;
let stopwatchInterval;
let elapsedSeconds = 0;

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const output = document.getElementById('output');
        const keyText = key.textContent;

        if (keyText === 'Bksp') {
            output.value = output.value.slice(0, -1);
        } else if (keyText === 'Borrar') {
            output.value = '';
        } else if (keyText === 'Caps') {
            isCapsLock = !isCapsLock;
            key.classList.toggle('active', isCapsLock);
        } else if (keyText === 'Space') {
            output.value += ' ';
        } else {
            output.value += isCapsLock ? keyText.toUpperCase() : keyText;
        }
    });
});

function updateTime() {
    elapsedSeconds++;
    const hours = Math.floor(elapsedSeconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedSeconds % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedSeconds % 60).toString().padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('startPause').addEventListener('click', () => {
    const startPauseButton = document.getElementById('startPause');
    if (startPauseButton.textContent === 'Start') {
        stopwatchInterval = setInterval(updateTime, 1000);
        startPauseButton.textContent = 'Pause';
    } else {
        clearInterval(stopwatchInterval);
        startPauseButton.textContent = 'Start';
    }
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    elapsedSeconds = 0;
    document.getElementById('time').textContent = '00:00:00';
    document.getElementById('startPause').textContent = 'Start';
});
