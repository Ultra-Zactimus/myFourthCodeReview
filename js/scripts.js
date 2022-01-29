function Pizza(size, toppings, ) {
  this.size = size;
  this.toppings = {};
}

let orderDetails = new Pizza();

// Pizza.prototype.concatThisOrder = function() {

//   let yourOrder = "<h2>One " + orderDetails.size + " pizza with " + orderDetails.toppings + "comes out to $" + //price// + ".</h2>"

//   };

// function Add(num1, num2, num3) {
//   const result = num1 + num2 + num3;
//   console.log(result);
// }

function attachSizeVal() {
  const size = $("select#sizeS").val();

  if (size === '6') {
    orderDetails.size = "Small";

  } else if (size === '12') {
    orderDetails.size = "Medium";

  } else if (size === '24') {
    orderDetails.size = "Gigantor"
  }
}

function attachToppingsVal() {

  let topping1 = parseInt($("select#pep").val());
  let topping2 = parseInt($("select#oliv").val());
  let topping3 = parseInt($("select#mush").val());

  if ((topping1 + topping2 + topping3) === 1) {
    orderDetails.toppings = "Pepperoni";

  } else if ((topping1 + topping2 + topping3) === 2) {
    orderDetails.toppings = "Olives";

  } else if ((topping1 + topping2 + topping3) === 4) {
    orderDetails.toppings = "Mushrooms";

  } else if ((topping1 + topping2 + topping3) === 3) {
    orderDetails.toppings = ["Pepperoni", "Olives"];

  } else if ((topping1 + topping2 + topping3) === 5) {
    orderDetails.toppings = ["Pepperoni", "Mushrooms"];

  } else if ((topping1 + topping2 + topping3) === 6) {
    orderDetails.toppings = ["Olives", "Mushrooms"];

  } else if ((topping1 + topping2 + topping3) === 7) {
    orderDetails.toppings = ["Pepperoni", "Olives", "Mushrooms"];

  } else {
    orderDetails.toppings = "Cheese";
  }
}

$(document).ready(function() {
  $("button#getPizza").click(function(event) {
    event.preventDefault();

    attachSizeVal();
    attachToppingsVal();
    console.log(orderDetails.size + " " + orderDetails.toppings);

  });

});