// 🎉 Button click event
document.getElementById('reveal-btn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise-message');
  surprise.style.display = 'block';
  
  // Simple confetti effect
  createConfetti();
});

// 🎊 Create confetti animation
function createConfetti() {
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
