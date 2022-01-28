function Pizza(size, toppings) {
  this.size = size;
  this.toppings = {};
}

let orderDetails = new Pizza();

function attachSizeVal() {
  const small = $("input#sizeS").val();
  const medium = $("input#sizeM").val();
  const gigantor = $("input#sizeG").val();


  if (small) {
    orderDetails.size = "Small";

  } else if (medium) {
    orderDetails.size = "Medium";

  } else {
    orderDetails.size = "Gigantor"
  }
}

function attachToppingsVal() {

  let toppings = [$("select#pep").val(), $("select#oliv").val(), $("select#mush").val()];
  console.log(toppings);

  length = toppings.length;

  for (let i = 0; i < length; i++) {
    
 let loop = [toppings[i]];
 console.log(loop);

  if (loop.includes('pepperoni') && !loop.includes('mushroom') && !loop.includes('olive')) {
    orderDetails.toppings = "Pepperoni";

  } else if (loop.includes('olive') && !loop.includes('mushroom') && !loop.includes('pepperoni')) {
    orderDetails.toppings = "Olives";

  } else if (loop.includes('mushroom') && !loop.includes('olive') && !loop.includes('pepperoni')) {
    orderDetails.toppings = "Mushrooms";

  } else if (loop.includes('pepperoni') && loop.includes('olive') && !loop.includes('mushroom')) {
    orderDetails.toppings = "Pepperoni", "Olives";

  } else if (loop.includes('pepperoni') && loop.includes('mushroom') && !loop.includes('olive')) {
    orderDetails.toppings = "Pepperoni", "Mushrooms";
    
  } else if (loop.includes('mushroom') && loop.includes('olive') && !loop.includes('pepperoni')) {
    orderDetails.toppings = "Olives", "Mushrooms";
    
  } else if (loop.includes('pepperoni') && loop.includes('olive') && loop.includes('mushroom')) {
    orderDetails.toppings = "Pepperoni", "Olives", "Mushrooms";
    
  } 
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