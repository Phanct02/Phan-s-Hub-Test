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

// Function to validate user input
function validateInput(input) {
    return input.length >= 7 && /\d/.test(input) && /[a-zA-Z]/.test(input);
}

// Add event listener to the form
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    const errorMessage = document.getElementById('errorMessage');
    if (validateInput(userInput)) {
        errorMessage.textContent = '';
        document.getElementById('randomLine').textContent = getRandomLine();
    } else {
        errorMessage.textContent = 'Input must be at least 7 characters long and contain both letters and numbers.';
        document.getElementById('randomLine').textContent = ''; // Clear random line if validation fails
    }
});
