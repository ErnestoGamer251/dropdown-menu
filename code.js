document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        button.addEventListener('click', () => {
            menu.classList.toggle('visible');
        });

        dropdown.addEventListener('mouseenter', () => {
            menu.classList.add('visible');
        });

        dropdown.addEventListener('mouseleave', () => {
            menu.classList.remove('visible');
        });
    });
});
