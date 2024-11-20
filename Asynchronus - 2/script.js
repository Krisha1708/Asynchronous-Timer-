let timerInterval;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

//Function to set timer in MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
   return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

}


//Start the Timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(() => {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

// Stop the Timer
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Reset the Timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = 0;
    timerDisplay.textContent = formatTime(seconds);
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Event Listener for Buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);