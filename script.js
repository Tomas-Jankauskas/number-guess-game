// Game variables
let randomNumber;
let attempts = 0;
const maxAttempts = 10;

// Initialize the game when the page loads
window.onload = function() {
    resetGame();
};

// Function to check user's guess
function checkGuess() {
    // Get user's guess
    const guessInput = document.getElementById('guess');
    const userGuess = parseInt(guessInput.value);
    
    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        setMessage('Please enter a valid number between 1 and 100.', 'red');
        return;
    }
    
    // Increase attempt counter
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    
    // Check user's guess
    if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the correct number in ${attempts} attempts!`, 'green');
        disableGame();
    } else if (attempts >= maxAttempts) {
        setMessage(`Game over! The number was ${randomNumber}.`, 'red');
        disableGame();
    } else if (userGuess < randomNumber) {
        setMessage('Too low! Try a higher number.', 'blue');
    } else {
        setMessage('Too high! Try a lower number.', 'blue');
    }
    
    // Clear input for next guess
    guessInput.value = '';
    guessInput.focus();
}

// Function to update message
function setMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.style.color = color;
}

// Function to disable game inputs
function disableGame() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}

// Function to reset/start a new game
function resetGame() {
    // Generate a random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Reset attempts
    attempts = 0;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    
    // Clear message
    setMessage('', 'black');
    
    // Enable game inputs
    document.getElementById('guess').disabled = false;
    document.getElementById('guess').value = '';
    document.querySelector('button').disabled = false;
    
    // Focus on input
    document.getElementById('guess').focus();
    
    console.log('New game started! Number:', randomNumber);
}

// Add event listener for Enter key
document.getElementById('guess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});
