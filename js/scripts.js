function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let orderDetails = new Pizza();

function attachSizeVal() {
  const small = $("input#sizeS").val();
  const medium = $("input#sizeM").val();
  const large = $("input#sizeL").val();
  const gigantor = $("input#sizeG").val();


  if (small) {
    orderDetails.size = "Small";

  } else if (medium) {
    orderDetails.size = "Medium";

  } else if (large) {
    orderDetails.size = "Large";

  } else {
    orderDetails.size = "Gigantor"
  }
}

function attachToppingsVal() {
  
  const pepperoni = $("input#toppingPep").val(); 
  const olives = $("input#toppingOli").val(); 
  const mushrooms = $("input#toppingMush").val();
  const sausage = $("input#toppingSaug").val();
  const beef = $("input#toppingBef").val();
  const onions = $("input#toppingOni").val();
  const peppers = $("input#toppingBell").val();
  const anchovies = $("input#toppingAnch").val();
  
  if (pepperoni) {
    orderDetails.toppings = ["Pepperoni"];

  } else if (olives) {
    orderDetails.toppings = ["Olives"];

  } else if (mushrooms) {
    orderDetials.toppings = ["Mushrooms"];

  } else if (olives) {
    orderDetails.toppings = ["Olives"];

  } else if (sausage) {
    orderDetails.toppings = ["Sausage"];

  } else if (beef) {
    orderDetails.toppings = ["Beef"];

  } else if (onions) {
    orderDetails.toppings = ["Onions"];

  }else if (peppers) {
    orderDetails.toppings = ["Peppers"];

  } else {
    orderDetails.toppings = ["Anchovies"];

  }
  
  }




$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();

    attachSizeVal();
    attachToppingsVal();
    console.log(orderDetails);
    

  });

});