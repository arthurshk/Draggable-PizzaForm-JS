let draggedBlock = null;

let blocks = document.querySelectorAll('.block');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('dragstart', function(e) {
        draggedBlock = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', draggedBlock.innerHTML);
    });
    blocks[i].addEventListener('dragend', function(e) {
        draggedBlock = null;
    });
}

document.addEventListener('dragover', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('drop', function(e) {
    e.preventDefault();
    if (draggedBlock) {
        draggedBlock.style.left = (e.clientX - draggedBlock.offsetWidth / 2) + 'px';
        draggedBlock.style.top = (e.clientY - draggedBlock.offsetHeight / 2) + 'px';
    }
});