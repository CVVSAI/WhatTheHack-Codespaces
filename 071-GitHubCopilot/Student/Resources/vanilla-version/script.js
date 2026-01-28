// Game State
let score = 0;
let timeLeft = 30;
let isGameActive = false;
let moleTimer = null;
let countdownTimer = null;
let activeMoles = new Set();

// DOM Elements
const gameBoard = document.getElementById('gameBoard');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const gameOverDiv = document.getElementById('gameOver');
const finalScoreDisplay = document.getElementById('finalScore');
const playAgainBtn = document.getElementById('playAgainBtn');

// Game Configuration
const GAME_DURATION = 30; // seconds
const NUM_HOLES = 9;
const MOLE_APPEAR_INTERVAL = 800; // milliseconds
const MOLE_VISIBLE_TIME = 1500; // milliseconds

// Initialize Game Board
function initializeBoard() {
    gameBoard.innerHTML = '';
    for (let i = 0; i < NUM_HOLES; i++) {
        const hole = document.createElement('div');
        hole.classList.add('hole');
        hole.dataset.index = i;
        
        const mole = document.createElement('div');
        mole.classList.add('mole');
        
        hole.appendChild(mole);
        hole.addEventListener('click', whackMole);
        gameBoard.appendChild(hole);
    }
}

// Start Game
function startGame() {
    if (isGameActive) return;
    
    isGameActive = true;
    score = 0;
    timeLeft = GAME_DURATION;
    activeMoles.clear();
    
    updateScore();
    updateTimer();
    
    startBtn.disabled = true;
    gameOverDiv.classList.add('hidden');
    
    // Clear all moles
    document.querySelectorAll('.hole').forEach(hole => {
        hole.classList.remove('mole-up', 'whacked');
    });
    
    // Start spawning moles
    moleTimer = setInterval(spawnMole, MOLE_APPEAR_INTERVAL);
    
    // Start countdown timer
    countdownTimer = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Spawn Mole
function spawnMole() {
    if (!isGameActive) return;
    
    // Get available holes (not currently showing moles)
    const holes = Array.from(document.querySelectorAll('.hole'));
    const availableHoles = holes.filter(hole => 
        !hole.classList.contains('mole-up') && 
        !hole.classList.contains('whacked')
    );
    
    if (availableHoles.length === 0) return;
    
    // Select random hole
    const randomHole = availableHoles[Math.floor(Math.random() * availableHoles.length)];
    const holeIndex = randomHole.dataset.index;
    
    // Show mole
    randomHole.classList.add('mole-up');
    activeMoles.add(holeIndex);
    
    // Hide mole after visible time
    setTimeout(() => {
        if (randomHole.classList.contains('mole-up')) {
            randomHole.classList.remove('mole-up');
            activeMoles.delete(holeIndex);
        }
    }, MOLE_VISIBLE_TIME);
}

// Whack Mole
function whackMole(event) {
    if (!isGameActive) return;
    
    const hole = event.currentTarget;
    const holeIndex = hole.dataset.index;
    
    // Check if mole is up
    if (hole.classList.contains('mole-up') && !hole.classList.contains('whacked')) {
        // Successful whack
        hole.classList.add('whacked');
        hole.classList.remove('mole-up');
        activeMoles.delete(holeIndex);
        
        score++;
        updateScore();
        
        // Reset whacked state after animation
        setTimeout(() => {
            hole.classList.remove('whacked');
        }, 300);
    }
}

// Update Score Display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Update Timer Display
function updateTimer() {
    timerDisplay.textContent = timeLeft;
    
    // Change color when time is running out
    if (timeLeft <= 10) {
        timerDisplay.style.color = '#ff4444';
    } else {
        timerDisplay.style.color = 'white';
    }
}

// End Game
function endGame() {
    isGameActive = false;
    
    // Clear timers
    clearInterval(moleTimer);
    clearInterval(countdownTimer);
    
    // Hide all moles
    document.querySelectorAll('.hole').forEach(hole => {
        hole.classList.remove('mole-up', 'whacked');
    });
    
    activeMoles.clear();
    
    // Show game over screen
    finalScoreDisplay.textContent = score;
    gameOverDiv.classList.remove('hidden');
    
    startBtn.disabled = false;
}

// Reset Game
function resetGame() {
    if (isGameActive) {
        endGame();
    }
    
    score = 0;
    timeLeft = GAME_DURATION;
    
    updateScore();
    updateTimer();
    
    gameOverDiv.classList.add('hidden');
    startBtn.disabled = false;
    
    // Clear all moles
    document.querySelectorAll('.hole').forEach(hole => {
        hole.classList.remove('mole-up', 'whacked');
    });
}

// Event Listeners
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
playAgainBtn.addEventListener('click', () => {
    resetGame();
    startGame();
});

// Initialize the game board on page load
initializeBoard();
