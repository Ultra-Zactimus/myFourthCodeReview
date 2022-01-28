function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let orderDetails = new Pizza();

function pushValue() {
  const pizzaSize = $("input#size").val();
  console.log(pizzaSize);
    const pizzaToppings = $("input#toppings").val();
    console.log(pizzaToppings);
    

    if (pizzaSize === "small" && pizzaToppings === "pepperoni") {
      orderDetails.size = "Small";
      orderDetails.toppings = "Pepperoni"
      console.log(orderDetails);
    }
}

$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();
    // const customerOrder = new PizzaProcessor();

    pushValue()

    
    // customerOrder.processOrder(orderDetails);
    // alert(customerOrder);
  });

});