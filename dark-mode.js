// dark-mode.js

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');

    checkbox.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode');
        saveThemePreference();
    });

    // Sayfa yüklendiğinde tema tercihini kontrol et
    checkThemePreference();

    function checkThemePreference() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            checkbox.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            checkbox.checked = false;
        }
    }

    function saveThemePreference() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }
});
