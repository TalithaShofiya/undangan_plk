const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    }
}