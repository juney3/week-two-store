
// Assign event handlers programmatically
  //Define buttons variable and category number variable
  // var buttons = document.getElementsByTagName('button');

  // for (var i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', showCategory);
  // }
  // var categoryNumber = 0;

  //add event Listeners
  // function showCategory() {
  //   console.log('button clicked');
  //   var categories = document.getElementsByClassName('itemList');
  //   console.log(categories);
  //   console.log(this);
  // }


// Define category buttons by id
var catFood = document.getElementById('catFood');

var jerky = document.getElementById('jerky');

var tomatoes = document.getElementById('tomatoes');

//Add Event Listeners to buttons
catFood.addEventListener('click', showCategory);

jerky.addEventListener('click', showCategory);

tomatoes.addEventListener('click', showCategory);


// Define showCategory functions
function showCategory() {
  var itemList = document.getElementsByClassName('itemList');
  console.log(itemList);
  console.log('this is '+ this);
}
