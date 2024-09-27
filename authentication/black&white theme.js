
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'black-theme') {
    document.body.classList.add('black-theme');
    themeToggleCheckbox.checked = true; 
}


themeToggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('black-theme');
        localStorage.setItem('theme', 'black-theme');
    } else {
        document.body.classList.remove('black-theme');
        localStorage.setItem('theme', '');
    }
});
