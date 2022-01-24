document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let bola = document.getElementById('bola');
    let left = e.offsetX;
    let top = e.offsetY;
    bola.style.left = left + 'px';
    bola.style.top = top + 'px';
});