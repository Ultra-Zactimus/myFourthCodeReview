function Pizza(size, toppings, ) {
  this.size = size;
  this.toppings = {};
}

let orderDetails = new Pizza();

Pizza.prototype.concatThisOrder = function() {

  if (orderDetails.size != 'slice') {
    
    $("h5#total").html("<h5 id='total'>Your total: \"1 " + orderDetails.size + " " + orderDetails.toppings + " pizza comes out to $" + "\" </h5>");

  } else {

    $("h5#total").html("<h5 id='total'>Your total: \"1 " + orderDetails.size + " of " + orderDetails.toppings + " comes out to $3" + "\" </h5>");

  }

  };

function attachSizeVal() {
  const size = $("select#sizeS").val();

  if (size === '6') {
    orderDetails.size = "Small";

  } else if (size === '12') {
    orderDetails.size = "Medium";

  } else if (size === '24') {
    orderDetails.size = "Gigantor"

  } else {
    orderDetails.size = "slice"
  }
}

function attachToppingsVal() {

  let topping1 = parseInt($("select#pep").val());
  let topping2 = parseInt($("select#oliv").val());
  let topping3 = parseInt($("select#mush").val());

  if ((topping1 + topping2 + topping3) === 1) {
    orderDetails.toppings = "Pepperoni";

  } else if ((topping1 + topping2 + topping3) === 2) {
    orderDetails.toppings = "Olive";

  } else if ((topping1 + topping2 + topping3) === 4) {
    orderDetails.toppings = "Mushroom";

  } else if ((topping1 + topping2 + topping3) === 3) {
    orderDetails.toppings = ["Pepperoni", "Olive"];

  } else if ((topping1 + topping2 + topping3) === 5) {
    orderDetails.toppings = ["Pepperoni", "Mushroom"];

  } else if ((topping1 + topping2 + topping3) === 6) {
    orderDetails.toppings = ["Olive", "Mushrooms"];

  } else if ((topping1 + topping2 + topping3) === 7) {
    orderDetails.toppings = ["Pepperoni", "Olive", "Mushroom"];

  } else {
    orderDetails.toppings = "Cheese";
  }
}

$(document).ready(function() {
  $("button#getPizza").click(function(event) {
    event.preventDefault();

    attachSizeVal();
    attachToppingsVal();
    orderDetails.concatThisOrder();

  });

});