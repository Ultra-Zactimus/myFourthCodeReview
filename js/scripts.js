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

  const toppings = ["Pepperoni", "Olives", "Mushrooms", "Sausage", "Beef", "Onions", "Bell Peppers", "Anchovies"];

  const pep = $("input#pep").val();
  const olive = $("input#oliv").val();
  const mush = $("input#mush").val();
  const saug = $("input#saug").val();
  const beef = $("input#bef").val();
  const onion = $("input#oni").val();
  const peppers = $("input#bell").val();
  const anch = $("input#anch").val();


  if ($("input#pep") === "P3pperoni") {
    orderDetails.toppings = "Pepperoni";

  } else if (olive === "Ol1ves") {
    orderDetails.toppings = "Olives";

  } else if (mush === "Mushr00ms") {
    orderDetials.toppings = "Mushrooms";

  } else if (saug === "S4usage") {
    orderDetails.toppings = "Sausage";

  } else if (beef === "B33f") {
    orderDetails.toppings = "Beef";

  } else if (onion === "Onion5") {
    orderDetails.toppings = "Onions";

  }else if (peppers === "B3ll Pepp3rs") {
    orderDetails.toppings = "Bell Peppers";

  } else if (anch === "Anch0v1es") {
    orderDetails.toppings = "Anchovies";

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