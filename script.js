// List of predefined lines
const lines = [
    "Line 1: The quick brown fox jumps over the lazy dog.",
    "Line 2: To be or not to be, that is the question.",
    "Line 3: A journey of a thousand miles begins with a single step.",
    "Line 4: All that glitters is not gold.",
    "Line 5: The pen is mightier than the sword."
];

// Function to get a random line from the list
function getRandomLine() {
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
}

// Display the random line on the webpage
document.getElementById('randomLine').textContent = getRandomLine();
