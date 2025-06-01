const text = "I ❤️ YOU";
const heartDiv = document.getElementById("heartText");

text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    heartDiv.appendChild(span);
});

const particles = document.getElementById('particles');

heartDiv.addEventListener('click', () => {
    const rect = heartDiv.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const symbols = ['✨', '💖', '🌸', '⭐️'];

    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        const dx = (Math.random() - 0.5) * 600 + 'px';
        const dy = (Math.random() - 0.5) * 600 + 'px';
        star.style.setProperty('--dx', dx);
        star.style.setProperty('--dy', dy);

        star.style.color = ['#ff69b4', '#ffd700', '#ff1493', '#f9c5d1'][Math.floor(Math.random() * 4)];

        particles.appendChild(star);
        setTimeout(() => star.remove(), 2500);
    }
});