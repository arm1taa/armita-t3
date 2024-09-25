const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', function () {
        this.style.backgroundColor = 'blue';
    });
});