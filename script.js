// JavaScript to add a fun interaction to the page, such as making the text change color on click
document.querySelector('h1').addEventListener('click', function() {
    this.style.color = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Function to generate falling heart emojis
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Heart emoji
    
    // Set random position and animation timing
    const startX = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 2 + 3; // Random duration between 3s and 5s
    
    heart.style.left = `${startX}px`;
    heart.style.animationDuration = `${animationDuration}s`;

    // Append the heart to the rain container
    document.getElementById('rain').appendChild(heart);
    
    // Remove the heart after it has fallen
    setTimeout(() => {
        heart.remove();
    }, animationDuration * 1000); // After the animation ends
}

// Create a heart every 100ms
setInterval(createHeart, 100);
