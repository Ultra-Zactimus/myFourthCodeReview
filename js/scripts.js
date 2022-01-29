function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = {};
  this.price = {};
}

let orderDetails = new Pizza();

Pizza.prototype.concatThisOrder = function() {

    $("h1#total").html("<h1 id='total'>Your total: \"1 " + orderDetails.size + " of " + orderDetails.toppings + " comes out to $" + orderDetails.price + "\" </h1>");

  };

function attachSizeVal() {
  const size = $("select#sizeS").val();

  if (size === '8') {
    orderDetails.size = "Small";
    orderDetails.price = '8';

  } else if (size === '16') {
    orderDetails.size = "Medium";
    orderDetails.price = "16";

  } else if (size === '22') {
    orderDetails.size = "Gigantor"
    orderDetails.price = "22";

  } else if (size === '0'){
    orderDetails.size = "slice"
    orderDetails.price = '3';
    
  }
}

function attachToppingsVal() {

  let topping1 = parseInt($("select#pep").val());
  let topping2 = parseInt($("select#oliv").val());
  let topping3 = parseInt($("select#mush").val());
  let grabValues = orderDetails.price.toString().split();
  let grabNumbers = parseInt(...grabValues);
  
  // console.log(orderDetails);


  if ((topping1 + topping2 + topping3) === 1) {
    orderDetails.toppings = "Pepperoni";
    grabNumbers = (grabNumbers+2);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;

  } else if ((topping1 + topping2 + topping3) === 2) {
    orderDetails.toppings = "Olive";
    grabNumbers = (grabNumbers+2);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    
  
  } else if ((topping1 + topping2 + topping3) === 4) {
    orderDetails.toppings = "Mushroom";
    grabNumbers = (grabNumbers+2);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    

  } else if ((topping1 + topping2 + topping3) === 3) {
    orderDetails.toppings = ["Pepperoni", "Olive"];
    grabNumbers = (grabNumbers+4);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    

  } else if ((topping1 + topping2 + topping3) === 5) {
    orderDetails.toppings = ["Pepperoni", "Mushroom"];
    grabNumbers = (grabNumbers+4);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    

  } else if ((topping1 + topping2 + topping3) === 6) {
    orderDetails.toppings = ["Olive", "Mushrooms"];
    grabNumbers = (grabNumbers+4);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    

  } else if ((topping1 + topping2 + topping3) === 7) {
    orderDetails.toppings = ["Pepperoni", "Olive", "Mushroom"];
    grabNumbers = (grabNumbers+6);
    let stringNum = grabNumbers.toString();
    orderDetails.price = stringNum;
    

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
    $("#selections").hide();
    $("#showTotal").show();
  });

  $("button#return").click(function(reset){
    document.getElementById("#selections");
    $("#showTotal").hide();
    $("#selections").show();
  });

});