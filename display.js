// Display script - toont data van bedieningspaneel

let lastUpdateTime = 0;
let lastCelebrationState = 'false';
let lastDisplayedNumber = '-';
let lastDisplayedStatement = '';

// Vliegende foto's configuratie
const flyingImages = [
    'images/1.png',
    'images/2021-05-15 17_20_52-Window.png',
    'images/2021-05-23 20_29_22-.png',
    'images/guyon.jpg',
    'images/image.png',
    'images/image1.png',
    'images/image2.jpg',
    'images/image2.png',
    'images/imagergffg.jpg',
    'images/opgezwollen.png',
    'images/Palmboom_Dros.jpg',
    'images/peak.png',
    'images/Schermafbeelding 2025-08-07 225811.png',
    'images/Schermafbeelding 2025-08-07 233335.png',
    'images/unknown.png',
    'images/unknownhrgdgfg.png',
    'images/WhatsApp Image 2025-11-09 at 00.19.17.jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.20.18 (1).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.20.18 (2).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.20.18 (3).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.20.18 (4).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.20.18.jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.07 (1).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.07.jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (1).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (2).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (3).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (4).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (5).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (6).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (7).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (8).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08 (9).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.08.jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.09 (1).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.09 (2).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.23.09.jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.24.01 (1).jpeg',
    'images/WhatsApp Image 2025-11-09 at 00.24.01.jpeg'
];

function createFlyingImage() {
    if (flyingImages.length === 0) return;
    
    const img = document.createElement('img');
    img.src = flyingImages[Math.floor(Math.random() * flyingImages.length)];
    img.className = 'flying-image';
    
    // Random startpositie (van buiten het scherm)
    const side = Math.floor(Math.random() * 4); // 0=boven, 1=rechts, 2=onder, 3=links
    const size = Math.random() * 200 + 300; // 300-500px
    
    img.style.width = size + 'px';
    img.style.height = 'auto'; // Behoud aspect ratio
    
    // Random rotatie (beperkt)
    const rotation = Math.random() * 60 - 30; // -30 tot 30 graden
    const duration = Math.random() * 5 + 8; // 8-13 seconden
    
    // Bepaal start en eind positie op basis van kant
    let startX, startY, endX, endY;
    
    switch(side) {
        case 0: // van boven
            startX = Math.random() * 80 + 10; // 10-90%
            startY = -25;
            endX = Math.random() * 80 + 10; // 10-90%
            endY = 110;
            break;
        case 1: // van rechts
            startX = 110;
            startY = Math.random() * 80 + 10; // 10-90%
            endX = -25;
            endY = Math.random() * 80 + 10; // 10-90%
            break;
        case 2: // van onder
            startX = Math.random() * 80 + 10; // 10-90%
            startY = 110;
            endX = Math.random() * 80 + 10; // 10-90%
            endY = -25;
            break;
        case 3: // van links
            startX = -25;
            startY = Math.random() * 80 + 10; // 10-90%
            endX = 110;
            endY = Math.random() * 80 + 10; // 10-90%
            break;
    }
    
    img.style.left = startX + 'vw';
    img.style.top = startY + 'vh';
    
    // CSS variabelen voor animatie
    img.style.setProperty('--end-x', endX + 'vw');
    img.style.setProperty('--end-y', endY + 'vh');
    img.style.setProperty('--rotation', rotation + 'deg');
    img.style.animationDuration = duration + 's';
    
    document.body.appendChild(img);
    
    // Verwijder na animatie
    setTimeout(() => {
        img.remove();
    }, duration * 1000);
}

// Start vliegende foto's interval
setInterval(createFlyingImage, 60000); // Elke 60 seconden (1 minuut) een nieuwe foto

// Confetti functie voor BINGO viering
function showMegaConfetti() {
    console.log('showMegaConfetti called!');
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
        console.error('Canvas not found!');
        return;
    }
    console.log('Canvas found:', canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log('Canvas size:', canvas.width, canvas.height);
    
    const confetti = [];
    const colors = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c', '#e91e63', '#ff6b6b', '#4ecdc4'];
    
    // VEEL MEER confetti voor BINGO!
    for (let i = 0; i < 800; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 12 + 8, // Grotere confetti
            d: Math.random() * 15 + 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.floor(Math.random() * 20) - 10,
            tiltAngleIncremental: Math.random() * 0.1 + 0.05,
            tiltAngle: 0
        });
    }
    
    console.log('Confetti created:', confetti.length);
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confetti.forEach((p, index) => {
            ctx.beginPath();
            ctx.lineWidth = p.r / 2;
            ctx.strokeStyle = p.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.moveTo(p.x + p.tilt + p.r, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
            ctx.stroke();
            
            p.tiltAngle += p.tiltAngleIncremental;
            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.tilt = Math.sin(p.tiltAngle) * 15;
            
            if (p.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });
        
        if (confetti.length > 0) {
            requestAnimationFrame(draw);
        } else {
            console.log('Confetti animation finished');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    draw();
    console.log('Confetti animation started');
}

// Vuurwerk functie voor BINGO viering
function createFireworks() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fireworks = [];
    const particles = [];
    
    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.4;
            this.speed = 5 + Math.random() * 4;
            this.color = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22'][Math.floor(Math.random() * 6)];
            this.exploded = false;
        }
        
        update() {
            if (!this.exploded) {
                this.y -= this.speed;
                if (this.y <= this.targetY) {
                    this.explode();
                    this.exploded = true;
                }
            }
        }
        
        draw() {
            if (!this.exploded) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;
                ctx.fill();
            }
        }
        
        explode() {
            const particleCount = 60; // Minder particles (was 100)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(this.x, this.y, this.color));
            }
        }
    }
    
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 6 + 2;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            this.alpha = 1;
            this.decay = Math.random() * 0.015 + 0.015; // Sneller vervagen
            this.gravity = 0.15;
            this.size = Math.random() * 3 + 1.5; // Iets kleinere particles
        }
        
        update() {
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.vy += this.gravity;
            this.x += this.vx;
            this.y += this.vy;
            this.alpha -= this.decay;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = this.color;
            ctx.fill();
            ctx.restore();
        }
    }
    
    let frameCount = 0;
    
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Minder vuurpijlen tegelijk
        if (frameCount % 12 === 0 && fireworks.length < 8) { // Was 8 frames en 12 vuurpijlen
            fireworks.push(new Firework());
        }
        
        // Update en teken vuurpijlen
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].draw();
            if (fireworks[i].exploded) {
                fireworks.splice(i, 1);
            }
        }
        
        // Update en teken particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].update();
            particles[i].draw();
            if (particles[i].alpha <= 0) {
                particles.splice(i, 1);
            }
        }
        
        frameCount++;
        
        // Korter laten lopen
        if (frameCount < 500) { // Was 800 frames
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    
    animate();
}

// Functie om de kleur te bepalen op basis van het nummer
function getNumberColor(number) {
    if (number >= 1 && number <= 10) return '#e74c3c'; // Rood
    if (number >= 11 && number <= 20) return '#3498db'; // Blauw
    if (number >= 21 && number <= 30) return '#f1c40f'; // Geel
    if (number >= 31 && number <= 40) return '#2ecc71'; // Groen
    if (number >= 41 && number <= 51) return '#9b59b6'; // Paars
    return '#667eea'; // Standaard
}

function updateDisplay() {
    try {
        // Haal data op uit localStorage
        const currentRound = localStorage.getItem('bingo_currentRound');
        const currentGoal = localStorage.getItem('bingo_currentGoal');
        const currentNumber = localStorage.getItem('bingo_currentNumber');
        const currentStatement = localStorage.getItem('bingo_currentStatement');
        const usedNumbers = localStorage.getItem('bingo_usedNumbers');
        const numberColor = localStorage.getItem('bingo_numberColor');

        // Update ronde display
        const roundDisplay = document.getElementById('roundDisplay');
        if (currentRound) {
            roundDisplay.textContent = currentRound;
        } else {
            roundDisplay.textContent = 'Welkom bij BINGO!';
        }

        // Update doel display
        const goalDisplay = document.getElementById('currentGoal');
        if (currentGoal) {
            goalDisplay.textContent = currentGoal;
        } else {
            goalDisplay.textContent = 'Wacht op ronde selectie...';
        }

        // Update nummer display
        const numberDisplay = document.getElementById('displayNumber');
        const ballWrapper = document.querySelector('.ball-wrapper');
        
        if (currentNumber && currentNumber !== '-') {
            const updateTimestamp = localStorage.getItem('bingo_updateTime');
            
            // Check if number changed
            if (currentNumber !== lastDisplayedNumber && lastDisplayedNumber !== '-') {
                // Fade out old number first
                numberDisplay.classList.add('fade-out');
                ballWrapper.classList.add('fade-out');
                
                setTimeout(() => {
                    // Then roll in new number
                    numberDisplay.classList.remove('fade-out');
                    ballWrapper.classList.remove('fade-out');
                    numberDisplay.style.animation = 'none';
                    numberDisplay.offsetHeight; // Trigger reflow
                    numberDisplay.style.animation = 'rollIn 1s ease-out';
                    numberDisplay.textContent = currentNumber;
                    lastDisplayedNumber = currentNumber;
                    
                    // Update kleur op basis van nummer
                    numberDisplay.style.backgroundColor = getNumberColor(parseInt(currentNumber));
                }, 800); // Wacht op fade-out (half van 1.5s)
            } else if (updateTimestamp && updateTimestamp !== lastUpdateTime) {
                // First number or timestamp changed
                lastUpdateTime = updateTimestamp;
                numberDisplay.classList.remove('fade-out');
                ballWrapper.classList.remove('fade-out');
                numberDisplay.style.animation = 'none';
                numberDisplay.offsetHeight; // Trigger reflow
                numberDisplay.style.animation = 'rollIn 1s ease-out';
                numberDisplay.textContent = currentNumber;
                lastDisplayedNumber = currentNumber;
                
                // Update kleur op basis van nummer
                numberDisplay.style.backgroundColor = getNumberColor(parseInt(currentNumber));
            } else if (currentNumber !== lastDisplayedNumber) {
                // Just update if different but no animation needed
                numberDisplay.textContent = currentNumber;
                lastDisplayedNumber = currentNumber;
                numberDisplay.classList.remove('fade-out');
                ballWrapper.classList.remove('fade-out');
                
                // Update kleur op basis van nummer
                numberDisplay.style.backgroundColor = getNumberColor(parseInt(currentNumber));
            }
        } else {
            // Fade out de bal wanneer er geen nummer meer is
            if (!numberDisplay.classList.contains('fade-out') && numberDisplay.textContent !== '-') {
                numberDisplay.classList.add('fade-out');
                ballWrapper.classList.add('fade-out');
                setTimeout(() => {
                    if (numberDisplay.classList.contains('fade-out')) {
                        numberDisplay.textContent = '-';
                        numberDisplay.style.backgroundColor = '#667eea';
                        numberDisplay.classList.remove('fade-out');
                        ballWrapper.classList.remove('fade-out');
                        lastDisplayedNumber = '-';
                    }
                }, 1500); // Na fade-out animatie (1.5 seconden)
            } else if (numberDisplay.textContent === '-') {
                numberDisplay.style.backgroundColor = '#667eea';
                lastDisplayedNumber = '-';
            }
        }

        // Update stelling display
        const statementDisplay = document.getElementById('displayStatement');
        
        if (currentStatement) {
            // Voor ronde 3 (muziekronde): toon "Welk nummer is dit?" in plaats van artiest + titel
            let displayText = currentStatement;
            
            // Check of we in muziekronde (ronde 3) zitten
            if (currentRound && currentRound.includes('3')) {
                displayText = '🎵 Welk nummer is dit? 🎵';
            }
            
            // Trigger animation if statement changed
            if (currentStatement !== lastDisplayedStatement) {
                statementDisplay.style.animation = 'none';
                statementDisplay.offsetHeight; // Trigger reflow
                statementDisplay.style.animation = 'fadeInStatement 0.5s ease-out 1.5s forwards';
                lastDisplayedStatement = currentStatement;
            }
            statementDisplay.textContent = displayText;
        } else {
            statementDisplay.textContent = 'Wacht op de volgende stelling...';
            lastDisplayedStatement = '';
        }

        // Update gebruikte nummers
        const container = document.getElementById('displayUsedNumbers');
        if (usedNumbers) {
            const numbers = JSON.parse(usedNumbers);
            const existingNumbers = Array.from(container.children).map(el => parseInt(el.textContent));
            
            // Check for new numbers
            const newNumbers = numbers.filter(num => !existingNumbers.includes(num));
            
            if (newNumbers.length > 0 || numbers.length !== existingNumbers.length) {
                container.innerHTML = '';
                numbers.sort((a, b) => a - b).forEach((num, index) => {
                    const span = document.createElement('span');
                    span.className = 'used-number';
                    span.textContent = num;
                    
                    // Pas kleur toe op basis van nummer
                    span.style.backgroundColor = getNumberColor(num);
                    
                    // Don't animate existing numbers
                    const isNew = newNumbers.includes(num);
                    if (!isNew) {
                        span.style.animation = 'none';
                    }
                    
                    container.appendChild(span);
                });
            }
        } else {
            container.innerHTML = '';
        }

        // Check voor BINGO viering
        const isCelebrating = localStorage.getItem('bingo_celebration');
        const celebrationOverlay = document.getElementById('bingoCelebrationOverlay');
        
        console.log('Celebration check:', isCelebrating, 'Last state:', lastCelebrationState);
        
        if (isCelebrating === 'true') {
            const winner = localStorage.getItem('bingo_winner');
            const goalAchieved = localStorage.getItem('bingo_goal_achieved');
            
            if (winner && goalAchieved) {
                document.getElementById('celebrationGoal').textContent = goalAchieved;
                document.getElementById('celebrationWinner').textContent = `🏆 ${winner} heeft gewonnen! 🏆`;
                celebrationOverlay.classList.remove('hidden');
                
                // Speel confetti en vuurwerk als celebration net is gestart
                if (lastCelebrationState === 'false') {
                    console.log('Starting celebration effects!');
                    showMegaConfetti();
                    setTimeout(() => createFireworks(), 500); // Start vuurwerk na 0.5 seconden
                }
            }
            lastCelebrationState = 'true';
        } else {
            celebrationOverlay.classList.add('hidden');
            lastCelebrationState = 'false';
        }

        // Check voor Pending BINGO
        const isPending = localStorage.getItem('bingo_pending');
        const pendingOverlay = document.getElementById('pendingBingoOverlay');
        
        if (isPending === 'true') {
            const pendingGoal = localStorage.getItem('bingo_pending_goal');
            const pendingName = localStorage.getItem('bingo_pending_name') || 'deze persoon';
            
            if (pendingGoal) {
                document.getElementById('pendingGoal').textContent = `Doel: ${pendingGoal}`;
                document.getElementById('pendingQuestion').textContent = `Heeft ${pendingName} BINGO?`;
                pendingOverlay.classList.remove('hidden');
            }
        } else {
            pendingOverlay.classList.add('hidden');
        }

        // Check voor Volgend Doel overlay
        const showNextGoal = localStorage.getItem('bingo_next_goal_overlay');
        const nextGoalOverlay = document.getElementById('volgendDoelOverlay');
        
        if (showNextGoal === 'true') {
            const nextGoalText = localStorage.getItem('bingo_next_goal_text');
            
            if (nextGoalText) {
                document.getElementById('nextGoalText').textContent = nextGoalText;
                nextGoalOverlay.classList.remove('hidden');
            }
        } else {
            nextGoalOverlay.classList.add('hidden');
        }

        // Check voor Alle Doelen overlay
        const showAllGoals = localStorage.getItem('bingo_all_goals_overlay');
        const allGoalsOverlay = document.getElementById('alleDoelenhOverlay');
        
        if (showAllGoals === 'true') {
            allGoalsOverlay.classList.remove('hidden');
        } else {
            allGoalsOverlay.classList.add('hidden');
        }

        // Check voor Ronde Start overlay
        const showRoundStart = localStorage.getItem('bingo_round_start_overlay');
        const roundStartOverlay = document.getElementById('rondeStartOverlay');
        
        if (showRoundStart === 'true') {
            const roundName = localStorage.getItem('bingo_round_start_name');
            const roundGoal = localStorage.getItem('bingo_round_start_goal');
            
            if (roundName && roundGoal) {
                document.getElementById('rondeStartRoundName').textContent = roundName;
                document.getElementById('rondeStartGoalText').textContent = roundGoal;
                roundStartOverlay.classList.remove('hidden');
            }
        } else {
            roundStartOverlay.classList.add('hidden');
        }

    } catch (error) {
        console.error('Error updating display:', error);
    }
}

// Update elke 100ms om real-time sync te hebben
setInterval(updateDisplay, 100);

// Ook bij storage events
window.addEventListener('storage', updateDisplay);

// Initiële update
updateDisplay();

// Gordijn functionaliteit - luister naar commando van control panel
const curtainOverlay = document.getElementById('curtainOverlay');
const pauseText = document.getElementById('pauseText');

function checkCurtainCommand() {
    const openCommand = localStorage.getItem('bingo_open_curtain');
    const isPaused = localStorage.getItem('bingo_paused') || 'false';
    
    if (openCommand === 'true' && curtainOverlay && !curtainOverlay.classList.contains('opening')) {
        curtainOverlay.style.display = 'block';
        curtainOverlay.classList.remove('closing');
        curtainOverlay.classList.add('opening');
        
        // Verberg pauze tekst
        if (pauseText) {
            pauseText.classList.add('hidden');
        }
        
        // Verberg gordijnen alleen als we niet in pauze zijn
        if (isPaused !== 'true') {
            setTimeout(() => {
                if (localStorage.getItem('bingo_paused') !== 'true') {
                    curtainOverlay.style.display = 'none';
                }
            }, 2500);
        }
        
        // Reset het commando
        localStorage.setItem('bingo_open_curtain', 'false');
    }
}

// Check voor pauze status
let lastPausedState = localStorage.getItem('bingo_paused') || 'false';

function checkPauseStatus() {
    const isPaused = localStorage.getItem('bingo_paused') || 'false';
    
    // Alleen actie ondernemen als de status is veranderd
    if (isPaused === lastPausedState) {
        return;
    }
    
    lastPausedState = isPaused;
    
    if (isPaused === 'true') {
        // Pauze geactiveerd - sluit gordijnen met animatie
        if (curtainOverlay) {
            const leftCurtain = curtainOverlay.querySelector('.curtain-left');
            const rightCurtain = curtainOverlay.querySelector('.curtain-right');
            
            // Toon overlay
            curtainOverlay.style.display = 'block';
            
            // Zet gordijnen eerst in open positie (zonder animatie)
            if (leftCurtain && rightCurtain) {
                leftCurtain.style.transition = 'none';
                rightCurtain.style.transition = 'none';
                leftCurtain.style.transform = 'translateX(-100%)';
                rightCurtain.style.transform = 'translateX(100%)';
                
                // Force reflow
                void leftCurtain.offsetWidth;
                
                // Nu transition terug aanzetten
                leftCurtain.style.transition = '';
                rightCurtain.style.transition = '';
                
                // Gebruik requestAnimationFrame voor betere timing
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        leftCurtain.style.transform = 'translateX(0)';
                        rightCurtain.style.transform = 'translateX(0)';
                    });
                });
            }
        }
        if (pauseText) {
            setTimeout(() => {
                if (pauseText) pauseText.classList.remove('hidden');
            }, 1000);
        }
    } else {
        // Pauze beëindigd
        if (pauseText) {
            pauseText.classList.add('hidden');
        }
        // Reset inline styles zodat CSS classes weer werken
        if (curtainOverlay) {
            const leftCurtain = curtainOverlay.querySelector('.curtain-left');
            const rightCurtain = curtainOverlay.querySelector('.curtain-right');
            
            if (leftCurtain && rightCurtain) {
                leftCurtain.style.transition = '';
                rightCurtain.style.transition = '';
                leftCurtain.style.transform = '';
                rightCurtain.style.transform = '';
            }
        }
    }
}

// Check regelmatig voor gordijn commando en pauze status
setInterval(() => {
    checkCurtainCommand();
    checkPauseStatus();
}, 100);

// Toon melding dat display klaar is
console.log('BINGO Display gereed - wacht op updates van bedieningspaneel');
