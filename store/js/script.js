//Define global variables and objects
var buttons = document.getElementsByTagName('button');

var items = document.getElementsByClassName('item');

var categories = document.getElementsByClassName('itemList');

var shoppingCart = {};

var itemName, category, price;

var ShoppingCartItem = function(category, price) {
  // ShoppingCartItem.numInstances = (ShoppingCartItem.numInstances || 0 ) + 1;
  // var quantity = ShoppingCartItem.numInstances;
  this.category = category;
  this.price = price;
  this.quantity = 1;
};

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

  //function addToShoppingCart to keep track of quantities - an experiemnt
  function addToShoppingCart(itemName, category, price) {
    if (!shoppingCart[itemName]) {
      shoppingCart[itemName] = new ShoppingCartItem(category, price);
    }
    else if (shoppingCart[itemName]) {
      shoppingCart[itemName].quantity++;
    }
  };

// define function to add item to shopping list
function addItem() {
  var shoppingList = document.getElementById('shoppingList');

  itemName = this.getElementsByTagName('p')[0].innerText;

  category = this.parentNode.parentNode.id;

  price =
  this.getElementsByTagName('p')[1].innerText;

  var itemToAdd = document.createElement('li');

  itemToAdd.textContent = itemName + ' - ' + price;

  shoppingList.appendChild(itemToAdd);

//experiment to see if I can create a shopping cart object
  addToShoppingCart(itemName, category, price);
};


defaultView();
