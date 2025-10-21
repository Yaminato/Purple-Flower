onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
 // Confetti Effect
    const title = document.getElementById('birthdayTitle');
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#FF6B9D', '#C44569', '#FFA07A', '#FFD700', '#9B5DE0', '#00D9FF', '#FFBBE1', '#A7FFEE'];


    function createFireworks() {
  const container = document.querySelector('.fireworks-container');
  
  function refreshFirework(firework) {
    firework.style.animation = 'none';
    firework.offsetHeight; // Trigger reflow
    firework.style.animation = null;
    
    const before = firework.querySelector('::before');
    const after = firework.querySelector('::after');
    if (before) before.style.animation = null;
    if (after) after.style.animation = null;
  }

  setInterval(() => {
    const fireworks = document.querySelectorAll('.firework');
    fireworks.forEach(refreshFirework);
  }, 4000);
}

// Add this to your existing onload function
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
  
  createFireworks();
};
