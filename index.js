// Music player functionality
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;


// backgroundMusic.src = "naughty-girl.mp3";

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.querySelector('.music-icon').textContent = '🎵';
        isPlaying = false;
    } else {
        backgroundMusic.play();
        musicToggle.querySelector('.music-icon').textContent = '⏸️';
        isPlaying = true;
    }
});

// Scroll down functionality
document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});


// script.js
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const confirmed = document.getElementById('confirm').checked ? 'Yes' : 'No';

    // Create email body
    const subject = `RSVP for Fête Artistique - ${name}`;
    const body = `Name: ${name}%0D%0A
Email: ${email}%0D%0A
Phone: ${phone}%0D%0A
Confirmation: ${confirmed}%0D%0A
Dietary/Special Notes: ${message}%0D%0A%0D%0A
I agree to follow all event rules and commit to attending.`;

    // Create mailto link
    const mailtoLink = `mailto:oyizasophie@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show confirmation message
    alert('Thank you for your RSVP! Please check your email client to complete the submission.');
    
    // Reset form
    this.reset();
});