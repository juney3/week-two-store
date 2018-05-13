//Define buttons variable and category number variable
var buttons = document.getElementsByTagName('button');

var items = document.getElementsByClassName('item');

var categories = document.getElementsByClassName('itemList');

// Add event listeners to buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', showCategory);
}

//define functions to display the item category
function showCategory() {
  if (this.id === 'catFood') {
    categories[0].className = "itemList isShown";
    categories[1].className = "itemList isHidden";
    categories[2].className = "itemList isHidden";
  }

  if (this.id === 'jerky') {
    categories[1].className = "itemList isShown";
    categories[0].className = "itemList isHidden";
    categories[2].className = "itemList isHidden";
  }

  if (this.id === "tomatoes") {
    categories[2].className = "itemList isShown";
    categories[0].className = "itemList isHidden";
    categories[1].className = "itemList isHidden";
  }
};

// set default view

function defaultView() {
  categories[0].className = "itemList isShown";
  categories[1].className = "itemList isHidden";
  categories[2].className = "itemList isHidden";
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

defaultView();
