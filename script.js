const draggableElement = document.getElementById('myDraggable');

let offsetX, offsetY, isDragging = false;

draggableElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - draggableElement.getBoundingClientRect().left;
    offsetY = e.clientY - draggableElement.getBoundingClientRect().top;

    draggableElement.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggableElement.style.transform = `translate(${x}px, ${y}px)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    draggableElement.style.cursor = 'grab';
});
