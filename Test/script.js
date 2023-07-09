
const numBars = 6;
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
const barsContainer = document.getElementById('bars');
const bars = [];

for (let i = 0; i < numBars; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = Math.floor(Math.random() * 150) + 'px';
    bar.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    barsContainer.appendChild(bar);
    bars.push(bar);
}

let isAnimating = false;
let animationId;

document.getElementById('startBtn').addEventListener('click', startAnimation);
document.getElementById('resetBtn').addEventListener('click', resetAnimation);
document.getElementById('stopBtn').addEventListener('click', stopAnimation);

function startAnimation() {
    if (!isAnimating) {
        isAnimating = true;
        animateBars();
    }
}

function animateBars() {
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        bar.style.animationPlayState = 'running';
    }
}

function resetAnimation() {
    isAnimating = false;
    barsContainer.classList.remove('animate');
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        bar.style.animationPlayState = 'paused';
    }
}

function stopAnimation() {
    isAnimating = false;
    barsContainer.classList.remove('animate');
    for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        bar.style.animationPlayState = 'paused';
    }
}
