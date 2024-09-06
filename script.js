const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function () {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});
    document.addEventListener('DOMContentLoaded', function() {
        const text = "Selamat Datang di VERDIYA";
        const element = document.querySelector('.banner h1');
        const speed = 100; // Typing speed in milliseconds
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    element.textContent = ''; // Clear text
                    index = 0; // Reset index
                    type(); // Start typing again
                }, 2000); // Delay before restart
            }
        }

        type(); // Start typing effect
    });
