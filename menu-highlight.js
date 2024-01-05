// menu-highlight.js

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const menuItems = document.querySelectorAll('nav ul li a');

    for (const menuItem of menuItems) {
        const href = menuItem.getAttribute('href');
        if (currentPage === href) {
            menuItem.parentNode.classList.add('active');
        }
    }
});
