
// JavaScript to handle menu button clicks
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');
    const sections = document.querySelectorAll('.menu-section');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the target section
            const target = button.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});

// JavaScript for toggling the hamburger menu
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});

