// Global state
let currentScene = 'landing';
const music = document.getElementById('bg-music');

// Slideshow for landing page
let slideIndex = 0;
let slideshowInterval;

function startSlideshow() {
    const slides = document.querySelectorAll('#scene-landing .slide');
    if (slides.length === 0) return;
    
    slides[slideIndex].classList.add('active-slide');
    
    slideshowInterval = setInterval(() => {
        slides[slideIndex].classList.remove('active-slide');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active-slide');
    }, 3000);
}

// Initialize slideshow on page load
window.addEventListener('DOMContentLoaded', () => {
    startSlideshow();
});

// Scene transition function
function switchScene(fromScene, toScene) {
    const from = document.getElementById(`scene-${fromScene}`);
    const to = document.getElementById(`scene-${toScene}`);
    
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.add('active');
        currentScene = toScene;
    }, 1000);
}

// Scene 1 -> 2: Enter Site
function enterSite() {
    clearInterval(slideshowInterval);
    switchScene('landing', 'darkness');
    
    setTimeout(() => {
        typeText('darkness-text', "Dark, isn't it?", () => {
            document.getElementById('lights-btn').classList.remove('hidden');
        });
    }, 2000);
}

// Scene 2 -> 3: Turn on lights
function turnOnLights() {
    switchScene('darkness', 'lit');
    
    setTimeout(() => {
        typeText('music-text', "Ahh, much better! But wait... what's a party without music?", () => {
            document.getElementById('music-btn').classList.remove('hidden');
        });
    }, 1500);
}

// Scene 3 -> 4: Start music
function startMusic() {
    // Ensure music is loaded and play it
    music.load();
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(e => {
            console.log('Music playback failed:', e);
            // If autoplay fails, try again after user interaction
            document.addEventListener('click', () => {
                music.play().catch(err => console.log('Retry failed:', err));
            }, { once: true });
        });
    }
    
    switchScene('lit', 'decorated');
    
    setTimeout(() => {
        typeText('decorate-text', "Great choice! Now, let's decorate this place, shall we?", () => {
            document.getElementById('decorate-btn').classList.remove('hidden');
        });
    }, 1500);
}

// Decorate the room
function decorateRoom() {
    const scene = document.getElementById('scene-decorated');
    scene.classList.add('with-decorations');
    
    // Hide current container
    document.querySelector('#scene-decorated .vn-text-container').style.display = 'none';
    
    // Step 1: Show top decoration border first
    const topDecor = document.getElementById('top-decor');
    topDecor.classList.remove('hidden');
    topDecor.classList.add('show');
    
    // Step 2: Show banner after 1 second
    setTimeout(() => {
        const banner = document.getElementById('banner');
        banner.classList.remove('hidden');
        banner.classList.add('show');
    }, 1000);
    
    // Step 3: Create balloons after 2 seconds
    setTimeout(() => {
        createBalloons('balloons-container', 8);
    }, 2000);
    
    // Step 4: Show message container after all decorations
    setTimeout(() => {
        const messageContainer = document.getElementById('message-container');
        messageContainer.style.display = 'flex';
        
        const messageText = messageContainer.querySelector('.vn-text');
        typeText2(messageText, "Perfect! Looking festive now! 🎉 By the way... there's a special message for you.", () => {
            document.getElementById('message-btn').classList.remove('hidden');
        });
    }, 3000);
}

// Create balloons
function createBalloons(containerId, count) {
    const container = document.getElementById(containerId);
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#54a0ff', '#00d2d3', '#9b59b6', '#ff6348'];
    const isMobile = window.innerWidth <= 768;
    
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        if (isMobile) {
            // For mobile: keep balloons within visible range (10-85%)
            balloon.style.left = (10 + Math.random() * 75) + '%';
            // Higher vertical position to avoid blocking content
            balloon.style.top = (10 + Math.random() * 30) + '%';
        } else {
            // Desktop: better distribution across screen
            const side = Math.random();
            if (side < 0.35) {
                // Left side
                balloon.style.left = Math.random() * 25 + '%';
            } else if (side < 0.7) {
                // Right side
                balloon.style.left = (75 + Math.random() * 25) + '%';
            } else {
                // Middle scattered
                balloon.style.left = (25 + Math.random() * 50) + '%';
            }
            balloon.style.top = (15 + Math.random() * 45) + '%';
        }
        
        balloon.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(balloon);
    }
}

// Show letter
function showLetter() {
    const overlay = document.getElementById('letter-overlay');
    overlay.classList.remove('hidden');
    
    // Your birthday message here - customize this!
    const message = `Dear Friend,

Happy Birthday! 🎉

I hope this little surprise brings a smile to your face! You deserve all the happiness in the world today and every day.

Thank you for being such an amazing person and an incredible friend. Your kindness, laughter, and presence make everything better.

Here's to another year of wonderful memories, adventures, and dreams coming true!

Wishing you the best birthday ever!

With love and warm wishes,
Your Friend 💝`;
    
    typeText('letter-content', message, () => {
        document.getElementById('close-letter-btn').classList.remove('hidden');
    }, 30);
}

// Close letter
function closeLetter() {
    const overlay = document.getElementById('letter-overlay');
    overlay.classList.add('hidden');
    
    // Transition to cake scene
    switchScene('decorated', 'cake');
    
    // Recreate decorations for cake scene
    setTimeout(() => {
        createBalloons('balloons-container-cake', 8);
        
        // Show top decoration in cake scene
        const topDecorCake = document.getElementById('top-decor-cake');
        topDecorCake.classList.add('show');
        
        typeText('setup-text', "Now then... let's set up the table for the celebration! 🎉", () => {
            document.getElementById('setup-table-btn').classList.remove('hidden');
        });
    }, 1500);
}

// Setup table - show table first
function setupTable() {
    document.getElementById('cake-container').classList.remove('hidden');
    document.getElementById('setup-table-container').style.display = 'none';
    
    // Show whisky + coke container
    const whiskyContainer = document.getElementById('whisky-container');
    whiskyContainer.style.display = 'flex';
    
    setTimeout(() => {
        // Show whisky + coke on table
        const whiskyCoke = document.getElementById('whisky-coke');
        whiskyCoke.classList.remove('hidden');
        whiskyCoke.classList.add('show');
        
        const whiskyText = whiskyContainer.querySelector('.vn-text');
        typeText2(whiskyText, "Start karte hai daru with coke 🥃", () => {
            document.getElementById('whisky-btn').classList.remove('hidden');
        });
    }, 1000);
}

// Show hookah
function showHookah() {
    document.getElementById('whisky-container').style.display = 'none';
    
    const hookahContainer = document.getElementById('hookah-container');
    hookahContainer.style.display = 'flex';
    
    // Show hookah on table
    const hookah = document.getElementById('hookah');
    hookah.classList.remove('hidden');
    hookah.classList.add('show');
    
    setTimeout(() => {
        const hookahText = hookahContainer.querySelector('.vn-text');
        typeText2(hookahText, "Hookha ko kaise bhul sakte hain!! 💨", () => {
            document.getElementById('hookah-btn').classList.remove('hidden');
        });
    }, 500);
}

// Show brownie
function showBrownie() {
    document.getElementById('hookah-container').style.display = 'none';
    
    const brownieContainer = document.getElementById('brownie-container');
    brownieContainer.style.display = 'flex';
    
    // Show brownie on table
    const brownie = document.getElementById('brownie');
    brownie.classList.remove('hidden');
    brownie.classList.add('show');
    
    setTimeout(() => {
        const brownieText = brownieContainer.querySelector('.vn-text');
        typeText2(brownieText, "Brownie to permanent hai 😉", () => {
            document.getElementById('brownie-btn').classList.remove('hidden');
        });
    }, 500);
}

// Show cake
function showCake() {
    document.getElementById('brownie-container').style.display = 'none';
    
    const cakeTextContainer = document.getElementById('cake-text-container');
    cakeTextContainer.style.display = 'flex';
    
    // Show cake on table
    const cakeItem = document.getElementById('cake-item');
    cakeItem.classList.remove('hidden');
    cakeItem.classList.add('show');
    
    setTimeout(() => {
        const cakeText = cakeTextContainer.querySelector('.vn-text');
        typeText2(cakeText, "Birthday without cake??? That's not happening! 🎂✨", () => {
            document.getElementById('cake-btn').classList.remove('hidden');
        });
    }, 500);
}

// Make wish
function makeWish() {
    document.getElementById('cake-text-container').style.display = 'none';
    
    const wishContainer = document.getElementById('wish-container');
    wishContainer.style.display = 'flex';
    
    setTimeout(() => {
        const wishText = wishContainer.querySelector('.vn-text');
        typeText2(wishText, "Before we cut the cake, make a wish! (You can say it out loud... I don't have microphone access, sorry! 😄)", () => {
            document.getElementById('wish-btn').classList.remove('hidden');
        });
    }, 500);
}

// Blow candle
function blowCandle() {
    document.getElementById('wish-container').style.display = 'none';
    
    const blowContainer = document.getElementById('blow-container');
    blowContainer.style.display = 'flex';
    
    setTimeout(() => {
        const blowText = blowContainer.querySelector('.vn-text');
        typeText2(blowText, "Made your wish? Great! Now it's time to blow out the candle! 🌬️", () => {
            document.getElementById('blow-btn').classList.remove('hidden');
        });
    }, 500);
}

// Blow candle action
function blowCandleAction() {
    const flame = document.getElementById('flame');
    flame.classList.add('blown');
    
    document.getElementById('blow-container').style.display = 'none';
    
    const cutContainer = document.getElementById('cut-container');
    cutContainer.style.display = 'flex';
    
    setTimeout(() => {
        const cutText = cutContainer.querySelector('.vn-text');
        typeText2(cutText, "Yay! Now let's cut this beautiful cake! 🔪", () => {
            document.getElementById('cut-cake-btn').classList.remove('hidden');
        });
    }, 1000);
}

// Cut cake and go to final scene
function cutCake() {
    switchScene('cake', 'final');
    
    // Create confetti
    createConfetti();
    
    setTimeout(() => {
        const finalText = `May all your dreams come true! 🌟

You are loved, appreciated, and celebrated today and always!

Have the most amazing birthday! 🎊`;
        
        typeText('final-text', finalText, () => {
            createHearts();
        }, 40);
    }, 1500);
}

// Typing effect
// Typing effect with skip on click
function typeText(elementId, text, callback, speed = 50) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    let index = 0;
    let interval;
    let completed = false;
    
    const skipTyping = () => {
        if (!completed) {
            clearInterval(interval);
            element.textContent = text;
            completed = true;
            element.removeEventListener('click', skipTyping);
            if (callback) callback();
        }
    };
    
    element.addEventListener('click', skipTyping);
    
    interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            completed = true;
            element.removeEventListener('click', skipTyping);
            if (callback) callback();
        }
    }, speed);
}

// Typing effect with element reference
function typeText2(element, text, callback, speed = 50) {
    element.textContent = '';
    let index = 0;
    let interval;
    let completed = false;
    
    const skipTyping = () => {
        if (!completed) {
            clearInterval(interval);
            element.textContent = text;
            completed = true;
            element.removeEventListener('click', skipTyping);
            if (callback) callback();
        }
    };
    
    element.addEventListener('click', skipTyping);
    
    interval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(interval);
            completed = true;
            element.removeEventListener('click', skipTyping);
            if (callback) callback();
        }
    }, speed);
}

// Create confetti
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#54a0ff', '#00d2d3', '#9b59b6', '#ff6348', '#ffd700'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(confetti);
            
            // Remove after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
    
    // Keep creating confetti
    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }, 300);
}

// Create floating hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heart.style.animationDelay = Math.random() * 1 + 's';
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }, 500);
}

// Music Control
const musicControl = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
let isMuted = false;

musicControl.addEventListener('click', () => {
    isMuted = !isMuted;
    
    if (isMuted) {
        music.muted = true;
        musicIcon.classList.remove('bi-volume-up-fill');
        musicIcon.classList.add('bi-volume-mute-fill');
        musicControl.classList.add('muted');
    } else {
        music.muted = false;
        musicIcon.classList.remove('bi-volume-mute-fill');
        musicIcon.classList.add('bi-volume-up-fill');
        musicControl.classList.remove('muted');
    }
});

