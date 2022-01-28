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

Decription: PizzaProcessor()

Test: "It should store the info for the pizzas"
Code:
function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}
Expected Output: Pizza[Size: "Large" Toppings: "Pepperoni" ID: 0]

Description: customerOrder

Test: "It should turn Constructor into an Object to store customer's submissions"
Code:
const customerOrder = new PizzaProcessor();
Expected Result: Pizza[Size: "Large" Toppings: "Pepperoni" ID: 0]

Description: orderNumber()

Test: "It should assign ID to pizza"
Code:
PizzaProcessor.prototype.orderNumber = function() {
  this.currentID += 1;
  return this.currentID; 
};
Expected Result: id[1] = Size: "Gigantor" Toppings: ["Pepperoni", "Mushrooms"]

Description: processOrder()

Test: "It should store customer's order to database"
Code:
PizzaProcessor.prototype.processOrder = function(pizza) {
  pizza.id = this.orderNumber();
  this.pizza[pizza.id] = pizza;
};
Expected Result: Pizza [Size: "Medium" Toppings: "Pepperoni"]

Description: findOrder()

Test: "It should find orders by their ID and return them"
Code:
PizzaProcessor.prototype.findOrder = function(id) {
  if (this.pizza[id] != undefined) {
    return this.pizza[id];
  }
  return false;
};
Expected Result: pizza[24] = Pizza[Size: "Small" Toppings: "Anchovies"]

Decription: Pizza()

Test: "this should store size and toppings"
Code:
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
Expected Result: Pizza("Large", "Pepperoni) = Pizza [Size: "Large" Toppings: "Pepperoni"]

Description: attachVal()

<!-- Test: "It should compare options on submit and store those values into Object"
Code:
function attachSizeVal() {
  let pizzaSize;
  if($("input#sizeS")) {
    pizzaSize = "Small";
  } else if (placeholder) {
     placeholder
  }
}
Expected Result: pizza = $("input#").val(); pizza [Size: "Small"] this isnt working, going to try another test--> 

Decription: displayOrderDetails()

Test: "It should display the values inside the created pizza object"
Code:
function displayOrderDetails(customerOrderToDisplay) {
  let htmlForCustomerOrder = "";
  Object.keys(customerOrderToDisplay.pizza).foreach(function(key) {
    const pizza = customerOrderToDisplay.processOrder(key);
    htmlForCustomerOrder += pizza.id + pizza.size + pizza.toppings;
  });
  alert(pizza);
}
Expected Result: pizza [size: "Large" toppings: "pepperoni"]

Description: 




#

## Link to User Page: https://github.com/Ultra-Zactimus
#

## Known Bugs:
#
Document is in a completed state.
No known bugs.
Please feel free to contact me by email at: ultrazacky@gmail.com
#
## License:
#
Copyright of Zachary Green
January 28st 2022
This is an Open Source document licenced with the MIT Open Source Licence