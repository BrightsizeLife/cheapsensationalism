// Example list of "scribbles"
const scribbles = [
    "Reality is often stranger than fiction.",
    "The stars don’t care if you stare back.",
    "Your thoughts define your world.",
    "Scribble something new every day.",
    "Chaos is a ladder, or a spiral.",
    "Don't fight the urge... to think sideways."
];

// DOM Elements
const scribbleDisplay = document.getElementById('scribble-display');
const newScribbleButton = document.getElementById('new-scribble');

// Function to display a random scribble
function displayRandomScribble() {
    const randomIndex = Math.floor(Math.random() * scribbles.length);
    scribbleDisplay.textContent = scribbles[randomIndex];
}

// Event Listener for the "New Scribble" button
newScribbleButton.addEventListener('click', displayRandomScribble);
