document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('jsstyle');
    const paragraph = document.getElementById('text');

    btn.addEventListener('click', function() {
        paragraph.style.fontSize = '24px';
        paragraph.style.fontFamily = 'Arial, sans-serif';
        paragraph.style.color = 'blue';
    });
});