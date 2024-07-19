// Set the countdown date
var countDownDate = new Date('2024-07-25T10:00:00').getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    
    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in elements with respective IDs
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // If the countdown is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Function to create falling logos
// function createLogo() {
//     const logoContainer = document.querySelector('.logo-container');
//     const logo = document.createElement('img');
//     logo.src = 'Project_Logo-removebg-preview.png'; 
//     logo.classList.add('logo');
//     logo.style.left = `${Math.random() * 100}vw`;
//     logo.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5 and 10 seconds
//     logoContainer.appendChild(logo);

//     // Remove the logo after it falls
//     setTimeout(() => {
//         logo.remove();
//     }, 10000); // Adjust time to match animation duration
// }

// // Create logos at intervals
// setInterval(createLogo, 500); // Adjust interval as needed

// Unmute and play the audio after the page loads
window.addEventListener('load', () => {
    const audio = document.getElementById('background-audio');
    audio.muted = false;
    audio.play();
});




const text = "Coming Soon!";
const container = document.querySelector('.coming-soon');
let index = 0;

function showText() {
    
    if (index < text.length) {
        container.innerHTML += text[index];
        index++;
        setTimeout(showText, 150); // Adjust the delay to control the speed of the animation
    } else {
        setTimeout(() => {
            container.innerHTML = "";
            index = 0;
            setTimeout(showText, 500); // Waitimg timeee
        }, 1000); // Pause timeee
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showText();
});


