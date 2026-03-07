// Global state
let currentScene = 'landing';
const music = document.getElementById('bg-music');

// Music Playlist - Random Shuffle System
const playlist = [
    'audio/Aavan Jaavan Song  WAR 2  Hrithik Roshan, Kiara Advani  Pritam, Arijit Singh, Nikhita  Amitabh B - YRF.mp3',
    'audio/birthday-music.mp3',
    'audio/Gallan Goodiyaan Dil Dhadakne Do 128 Kbps.mp3',
    'audio/Ghungroo Song _ WAR _ Hrithik Roshan, Vaani Kapoor _ Arijit Singh, Shilpa _ Vishal & Shekhar, Kumaar.mp3',
    'audio/Hasan Raheem - Wishes ft Talwiinder  Prod by Umair (Official Lyric Video) - Hasan Raheem.mp3',
    'audio/Hass Hass (Official Video) Diljit X Sia.mp3',
    'audio/Jogi - thiarajxtt, Bir (Official Audio) - thiarajxtt.mp3',
    'audio/Makhna - Drive  Sushant Singh Rajput, Jacqueline Fernandez  Tanishk Bagchi, Asees Kaur - Zee Music Company.mp3',
    'audio/With You - AP Dhillon (Official Music Video) - APDHILLON.mp3'
];
let currentSongIndex = -1;

// Function to get random song index (different from current)
function getRandomSongIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * playlist.length);
    } while (randomIndex === currentSongIndex && playlist.length > 1);
    return randomIndex;
}

// Function to play random song
function playRandomSong() {
    currentSongIndex = getRandomSongIndex();
    music.src = playlist[currentSongIndex];
    music.load();
    music.play().catch(e => console.log('Autoplay prevented:', e));
}

// When song ends, play next random song
music.addEventListener('ended', () => {
    playRandomSong();
});

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
    // Play random song from playlist
    playRandomSong();
    
    // Show music control button
    document.getElementById('music-control').classList.remove('hidden');
    
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
    
    // Step 2: Show banner after 0.8 seconds
    setTimeout(() => {
        const banner = document.getElementById('banner');
        banner.classList.remove('hidden');
        banner.classList.add('show');
    }, 800);
    
    // Step 3: Show balloons2 GIFs after 1.6 seconds
    setTimeout(() => {
        const balloonLeft2 = document.getElementById('balloon-left-2');
        const balloonRight2 = document.getElementById('balloon-right-2');
        
        balloonLeft2.classList.remove('hidden');
        balloonLeft2.classList.add('show');
        balloonRight2.classList.remove('hidden');
        balloonRight2.classList.add('show');
    }, 1600);
    
    // Step 4: Show balloons1 GIFs after 2.4 seconds
    setTimeout(() => {
        const balloonLeft = document.getElementById('balloon-left');
        const balloonRight = document.getElementById('balloon-right');
        
        balloonLeft.classList.remove('hidden');
        balloonLeft.classList.add('show');
        balloonRight.classList.remove('hidden');
        balloonRight.classList.add('show');
    }, 2400);
    
    // Step 5: Create CSS balloons floating up from bottom after 3.2 seconds
    setTimeout(() => {
        createBalloons('balloons-container', 4, true);
    }, 3200);
    
    // Step 6: Show message container after all decorations
    setTimeout(() => {
        const messageContainer = document.getElementById('message-container');
        messageContainer.style.display = 'flex';
        
        const messageText = messageContainer.querySelector('.vn-text');
        typeText2(messageText, "Perfect! Looking festive now! 🎉 By the way... there's a special message for you.", () => {
            document.getElementById('message-btn').classList.remove('hidden');
        });
    }, 5500);
}

// Create balloons (middle area only)
function createBalloons(containerId, count, floatUp = false) {
    const container = document.getElementById(containerId);
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#54a0ff', '#00d2d3', '#9b59b6', '#ff6348'];
    const isMobile = window.innerWidth <= 768;
    
    for (let i = 0; i < count; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        if (isMobile) {
            // For mobile: shifted more to center-left
            balloon.style.left = (32 + Math.random() * 30) + '%';
            balloon.style.top = (28 + Math.random() * 20) + '%';
        } else {
            // Desktop: middle area (30-70%)
            balloon.style.left = (30 + Math.random() * 40) + '%';
            balloon.style.top = (20 + Math.random() * 40) + '%';
        }
        
        if (floatUp) {
            // Add float-up animation during decoration
            balloon.classList.add('float-up');
            balloon.style.animationDelay = (i * 0.3) + 's';
            
            // After float-up completes, switch to regular float animation
            setTimeout(() => {
                balloon.classList.remove('float-up');
                balloon.style.animation = 'float 3s ease-in-out infinite';
                balloon.style.animationDelay = Math.random() * 2 + 's';
            }, 2000 + (i * 300));
        } else {
            balloon.style.animationDelay = Math.random() * 2 + 's';
        }
        
        container.appendChild(balloon);
    }
}

// Show letter
function showLetter() {
    const overlay = document.getElementById('letter-overlay');
    overlay.classList.remove('hidden');
    
    
    const message = `hyy kumkum!!!,

Happy Birthday! 🎉

I hope this little surprise brings a smile to your face! You deserve all the happiness in the world.

Never seen anyone chersishing the birthday as much as you do. Your enthusiasm and joy are infectious, and it's always a pleasure to see you light up on your special day.

Here's to another year of wonderful memories and dreams coming true!

With love and warm wishes,


Manan`;
    
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
    
    // Recreate decorations for cake scene (fewer balloons in middle)
    setTimeout(() => {
        createBalloons('balloons-container-cake', 4);
        
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
        typeText2(whiskyText, "Shuru karte hai daru with coke😅", () => {
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
        typeText2(hookahText, "Hookha kaise bhul sakte hain!! (Haryanvi genes jo hai)", () => {
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
        typeText2(brownieText, "Brownie toh permanent hai 😉", () => {
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
        typeText2(wishText, "But first make a WISH! (Dont worry, say it out loud, I dont have your mic access)", () => {
            document.getElementById('wish-btn').classList.remove('hidden');
        });
    }, 500);
}

// Blow candle
let blowClickCount = 0;
const requiredBlows = 5;

function blowCandle() {
    blowClickCount = 0; // Reset counter
    document.getElementById('wish-container').style.display = 'none';
    
    const blowContainer = document.getElementById('blow-container');
    blowContainer.style.display = 'flex';
    
    setTimeout(() => {
        const blowText = blowContainer.querySelector('.vn-text');
        typeText2(blowText, "Made your wish? Great! Now it's time to blow out the candle! 🎂", () => {
            document.getElementById('blow-btn').classList.remove('hidden');
        });
    }, 500);
}

// Blow candle action with multiple clicks
function blowCandleAction() {
    blowClickCount++;
    
    const blowBtn = document.getElementById('blow-btn');
    const blowContainer = document.getElementById('blow-container');
    const blowText = blowContainer.querySelector('.vn-text');
    
    // Add ripple animation
    blowBtn.classList.add('ripple-effect');
    setTimeout(() => {
        blowBtn.classList.remove('ripple-effect');
    }, 600);
    
    if (blowClickCount === 1) {
        // First click - change text
        blowText.textContent = '';
        typeText2(blowText, "You go to gym, thoda jaan lgaoo! 💪");
    } else if (blowClickCount < requiredBlows) {
        // Continue clicking (2-4 clicks)
        blowText.textContent = `Almost there! ${requiredBlows - blowClickCount} more... 😤`;
    } else {
        // Success after 5 clicks!
        const flame = document.getElementById('flame');
        flame.classList.add('blown');
        
        blowBtn.classList.add('hidden');
        blowText.textContent = '';
        
        setTimeout(() => {
            typeText2(blowText, "YAY! You did it! 🎉🎊", () => {
                // Show cut cake after success message
                setTimeout(() => {
                    document.getElementById('blow-container').style.display = 'none';
                    
                    const cutContainer = document.getElementById('cut-container');
                    cutContainer.style.display = 'flex';
                    
                    setTimeout(() => {
                        const cutText = cutContainer.querySelector('.vn-text');
                        typeText2(cutText, "Now let's cut this beautiful cake! 🎂✨", () => {
                            document.getElementById('cut-cake-btn').classList.remove('hidden');
                        });
                    }, 500);
                }, 1500);
            });
        }, 500);
    }
}

// Cut cake - stay on scene with fireworks and flying hearts
function cutCake() {
    // Hide cut button and text
    document.getElementById('cut-cake-btn').classList.add('hidden');
    const cutContainer = document.getElementById('cut-container');
    const cutText = cutContainer.querySelector('.vn-text');
    cutText.textContent = '';
    
    // Start fireworks on cake scene
    const cakeConfettiContainer = document.getElementById('cake-confetti-container');
    createConfettiOnElement(cakeConfettiContainer);
    
    // Start flying hearts
    createFlyingHearts();
    
    // Show Nacho BC button after 5 seconds (no text)
    setTimeout(() => {
        document.getElementById('nacho-btn').classList.remove('hidden');
    }, 5000);
}

// Go to final beach scene
function goToFinal() {
    // Stop flying hearts
    if (window.flyingHeartsInterval) {
        clearInterval(window.flyingHeartsInterval);
    }
    
    // Clear fireworks container
    const cakeConfettiContainer = document.getElementById('cake-confetti-container');
    cakeConfettiContainer.innerHTML = '';
    
    // Switch to beach scene
    switchScene('cake', 'final');
    
    // Make each letter dance individually
    setTimeout(() => {
        const beachText = document.querySelector('#beach-final-container .vn-text');
        const text = beachText.innerHTML;
        
        // Wrap each character in a span with staggered animation delay
        let wrappedText = '';
        let delay = 0;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (char === '<') {
                // Handle HTML tags (like <br>)
                const tagEnd = text.indexOf('>', i);
                wrappedText += text.substring(i, tagEnd + 1);
                i = tagEnd;
                continue;
            }
            
            if (char === ' ') {
                wrappedText += '<span class="dancing-letter space"></span>';
            } else if (char !== '\n' && char !== '\r') {
                wrappedText += `<span class="dancing-letter" style="animation-delay: ${delay * 0.05}s">${char}</span>`;
                delay++;
            }
        }
        
        beachText.innerHTML = wrappedText;
    }, 500);
    
    // Show home button
    setTimeout(() => {
        document.getElementById('home-button').classList.remove('hidden');
    }, 500);
}

// Go back to home/start
function goToHome() {
    // Simply refresh the page to restart everything cleanly
    location.reload();
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

// Create Diwali-style fireworks on specific element
function createConfettiOnElement(container) {
    const colors = ['#ff6b9d', '#c44569', '#f8b500', '#54a0ff', '#00d2d3', '#9b59b6', '#ff6348', '#ffd700', '#ff1744', '#00e676', '#ffea00', '#ff9100', '#e040fb', '#00bcd4'];
    
    // Create initial burst of fireworks
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFireworkBurst(container, colors);
        }, i * 300);
    }
    
    // Keep creating fireworks continuously
    setInterval(() => {
        createFireworkBurst(container, colors);
        // Sometimes create double burst for more dramatic effect
        if (Math.random() > 0.6) {
            setTimeout(() => {
                createFireworkBurst(container, colors);
            }, 200);
        }
    }, 1000);
}

// Create single firework burst
function createFireworkBurst(container, colors) {
    const x = Math.random() * 80 + 10; // 10-90% horizontal
    const y = Math.random() * 60 + 10; // 10-70% vertical
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = 30 + Math.floor(Math.random() * 25); // 30-55 particles
    
    for (let i = 0; i < particles; i++) {
        const spark = document.createElement('div');
        spark.className = 'firework spark';
        spark.style.left = x + '%';
        spark.style.top = y + '%';
        spark.style.backgroundColor = color;
        
        // Random direction and distance
        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 120 + Math.random() * 180; // Random velocity 120-300px
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        spark.style.animation = `explode ${1.2 + Math.random() * 0.6}s ease-out forwards`;
        
        container.appendChild(spark);
        
        // Remove after animation
        setTimeout(() => {
            spark.remove();
        }, 2500);
    }
}

// Create confetti (for final scene)
function createConfetti() {
    const container = document.getElementById('confetti-container');
    createConfettiOnElement(container);
}

// Create flying hearts (flying in all directions)
function createFlyingHearts() {
    const container = document.getElementById('flying-hearts-container');
    const heartColors = ['#ff6b9d', '#ff1744', '#f50057', '#ff4081', '#ff80ab', '#e91e63'];
    
    window.flyingHeartsInterval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'flying-heart';
        
        // Random color
        const color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.setProperty('--heart-color', color);
        
        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        heart.style.left = startX + '%';
        heart.style.top = startY + '%';
        
        // Random movement direction (anywhere on screen)
        const angle = Math.random() * Math.PI * 2; // Random angle 0-360 degrees
        const distance = 250 + Math.random() * 500; // Random distance 250-750px
        
        const tx20 = Math.cos(angle) * distance * 0.3; // 30% of distance at 20%
        const ty20 = Math.sin(angle) * distance * 0.3;
        const tx100 = Math.cos(angle) * distance; // Full distance at 100%
        const ty100 = Math.sin(angle) * distance;
        
        // Random rotation
        const rotation = Math.random() * 360;
        const rotationEnd = rotation + (Math.random() * 360 - 180);
        
        // Set CSS variables for animation
        heart.style.setProperty('--tx-20', tx20 + 'px');
        heart.style.setProperty('--ty-20', ty20 + 'px');
        heart.style.setProperty('--tx-100', tx100 + 'px');
        heart.style.setProperty('--ty-100', ty100 + 'px');
        heart.style.setProperty('--rotation', rotation + 'deg');
        heart.style.setProperty('--rotation-end', rotationEnd + 'deg');
        
        // Random animation duration (2-4 seconds)
        heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        container.appendChild(heart);
        
        // Remove after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 250);
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

