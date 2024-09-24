// Trailer sound toggle
function toggleSound() {
    var trailer = document.getElementById('gameTrailer');
    if (trailer.muted) {
        trailer.muted = false;
        document.getElementById('soundButton').textContent = 'Mute';
    } else {
        trailer.muted = true;
        document.getElementById('soundButton').textContent = 'Unmute';
    }
}

// Countdown Timer
const releaseDate = new Date("December 31, 2024 00:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Released!";
    }
}, 1000);

// Show character details on hover
function showDetails(character) {
    alert("More information about " + character + " will be displayed here.");
}
