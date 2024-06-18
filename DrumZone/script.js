document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
    const audios = document.querySelectorAll('audio');

    function playSound(e) {
        const keyCode = e.type === 'keydown' ? e.keyCode : parseInt(e.target.dataset.key);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        
        if (!audio) return; // Stop the function from running if there is no audio element
        
        audio.currentTime = 0; // Rewind to the start
        audio.play();
        
        key.classList.add('active');
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // Skip if it's not a transform
        this.classList.remove('active');
    }

    keys.forEach(key => {
        key.addEventListener('click', playSound);
        key.addEventListener('transitionend', removeTransition);
    });

    window.addEventListener('keydown', playSound);
});
