let order = [];

function addToOrder(number) {
    if (order.length < 7 && order.indexOf(number) === -1) {
        order.push(number);
        updateList();
    } else if (order.indexOf(number) !== -1) {
        alert(`Number ${number} has already been chosen. Please select a different number.`);
    } else {
        alert("You can only choose 7 numbers.");
    }
}

function updateList() {
    let display = document.getElementById("display");
    display.innerHTML = order.map((num, index) => `<div class="draggable" data-index="${index}" ontouchstart="handleTap(${index})">${num}</div>`).join('');

    // Initialize Sortable after updating the list
    new Sortable(display, {
        animation: 150,
        onEnd: updateOrderOnDrag
    });
}

function handleTap(index) {
    const newNumber = prompt("Enter a new number:");

    // Validate the new number
    if (newNumber !== null && newNumber !== "" && !isNaN(newNumber) && newNumber >= 1 && newNumber <= 7 && order.indexOf(parseInt(newNumber)) === -1) {
        order[index] = parseInt(newNumber);
        updateList();
    } else if (order.indexOf(parseInt(newNumber)) !== -1) {
        alert(`Number ${newNumber} has already been chosen. Please select a different number.`);
    } else {
        alert("Invalid input. Please enter a number between 1 and 7.");
    }
}

function updateOrderOnDrag(evt) {
    // Update the order array when an item is dragged and dropped
    const newIndex = evt.newIndex;
    const movedItem = order.splice(evt.oldIndex, 1)[0];
    order.splice(newIndex, 0, movedItem);
}
