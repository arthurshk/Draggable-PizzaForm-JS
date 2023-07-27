const form = document.querySelector('form');
const addBtn = document.getElementById('add-pizza-btn');
let pizzaCount = 1;

addBtn.addEventListener('click', function() {
    pizzaCount++;
    const newPizzaNode = document.createElement('div');
    newPizzaNode.classList.add('pizza-node');
    newPizzaNode.innerHTML = `
    <h3>Pizza #${pizzaCount}</h3>
    <label for="pizza-type-${pizzaCount}">Pizza Type:</label>
    <input type="text" name="pizza-type-${pizzaCount}" required>
    <br>
    <label for="applications-${pizzaCount}">Applications:</label>
    <input type="text" name="applications-${pizzaCount}" required>
    <br>
    <label for="size-${pizzaCount}">Size:</label>
    <select name="size-${pizzaCount}" required>
      <option value="">--Select Size--</option>
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
    </select>
  `;
    form.insertBefore(newPizzaNode, addBtn);
});