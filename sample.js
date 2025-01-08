/*
// CHRISTMAS
const snowflakeContainer = document.getElementById('snowflakes');
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2 + 1,
  speed: Math.random() * 0.5 + 0.2,
}));

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animateStars);
}


function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄'; // Snowflake icon
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Random size
  snowflake.style.animationDuration = Math.random() * 20 + 30 + 's'; // Random fall speed
  snowflake.style.opacity = Math.random(); // Random opacity

  snowflakeContainer.appendChild(snowflake);

  // Remove snowflake after animation completes
  snowflake.addEventListener('animationend', () => snowflake.remove());
}

// Create new snowflakes at intervals
setInterval(createSnowflake, 900);

// Start animations
animateStars();
*/


// REGULAR
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2 + 1,
  speed: Math.random() * 0.5 + 0.2,
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(animate);
}

animate();
