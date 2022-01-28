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






$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();

    attachSizeVal();

    

  });

});