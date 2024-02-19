document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('powderblue');
        navbar.classList.toggle('dark');
    });
});
