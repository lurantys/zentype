document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textbox');
    const wordCountDisplay = document.getElementById('wordCount');
    const bongocatImage = document.querySelector('.bongocat img');
    let isCat1 = true;

    let startTime = null;

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        const wordCount = text === '' ? 0 : text.split(/\s+/).length;
        wordCountDisplay.textContent = `${wordCount}`;

        bongocatImage.src = isCat1 ? './cat/cat2.png' : './cat/cat1.png';
        isCat1 = !isCat1;

        if (wordCount === 1 && !startTime) {
            startTime = new Date();
        }
    });

    const themeCheckbox = document.querySelector('.theme-checkbox');
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeCheckbox.checked = true;
    }

    themeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('light-theme', themeCheckbox.checked);
        localStorage.setItem('theme', themeCheckbox.checked ? 'light' : 'dark');
    });
});
