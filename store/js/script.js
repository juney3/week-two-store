//Define buttons variable and category number variable
var buttons = document.getElementsByTagName('button');
var items = document.getElementsByClassName('item');

console.log(buttons);
// Add event listeners to buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showCategory);
}

//define functions to display the item category

function showCategory() {
  var categories = document.getElementsByClassName('itemList');
  console.log(categories);
  console.log(this);
}

// add event listeners to all items
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', addItem);
  }

// define function to add item to shopping list

function addItem() {
  var shoppingList = document.getElementById('shoppingList');
  
  var itemName = this.getElementsByTagName('p')[0].innerText;

  var itemToAdd = document.createElement('li');

  itemToAdd.textContent = itemName;

  shoppingList.appendChild(itemToAdd);

}
