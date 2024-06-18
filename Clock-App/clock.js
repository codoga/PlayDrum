document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const welcomeDiv = document.getElementById('welcome');
    const greeting = document.getElementById('greeting');
    const datetime = document.getElementById('datetime');

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        showWelcomeScreen(username);
    });

    function showWelcomeScreen(username) {
        const now = new Date();
        const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
        const time = now.toLocaleTimeString('tr-TR', { hour: 'numeric', minute: 'numeric' });

        greeting.textContent = `Merhaba ${username}! Hoşgeldin!`;
        datetime.textContent = `${day} günü saat ${time} itibariyle buradasınız.`;

        nameForm.classList.add('hidden');
        welcomeDiv.classList.remove('hidden');
    }
});
