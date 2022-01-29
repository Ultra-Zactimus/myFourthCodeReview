# My Third Code Review at Epicodus
#
Authored By: Zachary Green
A Pizza Ordering Document: Created under the guidance of Epicodus
#
#
### Description
#
This document is a student HTML project: demonstrates the usage of Constructors, Objects and Prototypes within Javascript, Test Driven Development (TDD) and the separation of Business Logic from User Interface Logic.
#
Document is a prompt to enter toppings and pizza sizes from the selections to get price. The fictional character of Papa Roboger wants all the Neighbors to try his pizza.
#

## Technologies Used: 
#
HTML, CSS, BootStrap, JavaScript, Jquery, Markdown, GitBash, gitHub
#

Click on this link 
"https://github.com/Ultra-Zactimus/myFourthCodeReview"
to go to GitHub page for the Repository.

 On the page is a green button that says "Code" click that and then click the button with 2 rectangles on the right to copy the .git file. 
 
 Next you will need to download the program Git for (Mac), GitBash (Windows) "https://gitforwindows.org/v". 
 
 On the Terminal on Mac or Windows type: cd ~  snd press enter button to make sure you are on the right directory, then type: cd Desktop and enter to move to your computer's desktop. 
 
 Next type in: git clone https://github.com/Ultra-Zactimus/myFourthCodeReview.git and then hit enter. 
 
 This should put a cloned folder of the document on your desktop. Next open the folder and click on the file name index.html to open it in a browser and view it.
#

### Test Driven Development
#

Decription: Pizza()

Test: "this should store size and toppings"
Code:
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}
Expected Result: Pizza("Large", "Pepperoni) = Pizza [Size: "Large" Toppings: "Pepperoni"]

Description: attachSizeVal()

Test: "It should compare options on submit and store those values into Object"
Code:
let orderDetails = new Pizza();
function attachSizeVal() {
  const size = $("select#sizeS").val();

  if (size === '8') {
    orderDetails.size = "Small";
    orderDeailts.price = '8';

  } else if (size === '16') {
    orderDetails.size = "Medium";
    orderDetails.price = '16';

  } else if (size === '22') {
    orderDetails.size = "Gigantor"
    orderDetails.price = '22'

  } else {
    orderDetails.size = "slice"
    orderDetails.price = '3'
    
  }
}
Expected Result: Pizza {size: 'Small' price: '8'}

Description: attachToppingsVal()

Test: "It should look for all checked boxes and add items to object"
Code: 

function attachToppingsVal() {
  
const pepperoni = $("input#toppingPep").val(); 
const olives = $("input#toppingOli").val(); 
const mushrooms = $("input#toppingMush").val();
const sausage = $("input#toppingSaug").val();
const beef = $("input#toppingBef").val();
const onions = $("input#toppingOni").val();
const peppers = ("input#toppingBell").val();
const anchovies = $("input#toppingAnch").val();

function attachToppingsVal() {

  let topping1 = parseInt($("select#pep").val());
  let topping2 = parseInt($("select#oliv").val());
  let topping3 = parseInt($("select#mush").val());


  if ((topping1 + topping2 + topping3) === 1) {
    orderDetails.toppings = "Pepperoni";
    let addUpPrice = parseInt(orderDetails.price[0]) + 2;
    orderDetails.price = addUpPrice.toString();

  } else if ((topping1 + topping2 + topping3) === 2) {
    orderDetails.toppings = "Olive";
    let addUpPrice = parseInt(orderDetails.price[0]) + 2;
    orderDetails.price = addUpPrice.toString();
  
  } else if ((topping1 + topping2 + topping3) === 4) {
    orderDetails.toppings = "Mushroom";
    let addUpPrice = parseInt(orderDetails.price[0]) + 2;
    orderDetails.price = addUpPrice.toString();

  } else if ((topping1 + topping2 + topping3) === 3) {
    orderDetails.toppings = ["Pepperoni", "Olive"];
    let addUpPrice = parseInt(orderDetails.price[0]) + 4;
    orderDetails.price = addUpPrice.toString();

  } else if ((topping1 + topping2 + topping3) === 5) {
    orderDetails.toppings = ["Pepperoni", "Mushroom"];
    let addUpPrice = parseInt(orderDetails.price[0]) + 4;
    orderDetails.price = addUpPrice.toString();

  } else if ((topping1 + topping2 + topping3) === 6) {
    orderDetails.toppings = ["Olive", "Mushrooms"];
    let addUpPrice = parseInt(orderDetails.price[0]) + 4;
    orderDetails.price = addUpPrice.toString();

  } else if ((topping1 + topping2 + topping3) === 7) {
    orderDetails.toppings = ["Pepperoni", "Olive", "Mushroom"];
    let addUpPrice = parseInt(orderDetails.price[0]) + 6;
    orderDetails.price = addUpPrice.toString();

  } else {
    orderDetails.toppings = "Cheese";

  }
}
Expected Result: Pizza {size: 'Small' toppings: 'Pepperoni' price: '10'} 

Description: concatThisOrder()

Test: "It should concat the size, toppings and price"
Code:
Pizza.prototype.concatThisOrder = function() {

  if (orderDetails.size != 'slice') {
    
    $("h5#total").html("<h5 id='total'>Your total: \"1 " + orderDetails.size + " " + orderDetails.toppings + " pizza comes out to $" + "\" </h5>");

  } else {

    $("h5#total").html("<h5 id='total'>Your total: \"1 " + orderDetails.size + " of " + orderDetails.toppings + " comes out to $3" + "\" </h5>");

  }

  };
Expected Result: Pizza 1 Small pizza with Olives comes out to $12."



#

## Link to User Page: https://github.com/Ultra-Zactimus
#

## Known Bugs:
#
Document is in a completed state.
No known bugs
Please feel free to contact me by email at: ultrazacky@gmail.com
#
## License:
#
Copyright of Zachary Green
January 28st 2022
This is an Open Source document licenced with the MIT Open Source Licence