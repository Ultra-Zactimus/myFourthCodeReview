function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}

// PizzaProcessor.prototype.orderNumber = function() {
//   this.currentID += 1;
//   return this.currentID; 
// };

// PizzaProcessor.prototype.processOrder = function(pizza) {
//   pizza.id = this.orderNumber();
//   this.pizza[pizza.id] = pizza;
// };

// PizzaProcessor.prototype.findOrder = function(id) {
//   if (this.pizza[id] != undefined) {
//     return this.pizza[id];
//   }
//   return false;
// };

// function displayOrderDetails(customerOrderToDisplay) {
//   let htmlForCustomerOrder = "";
//   Object.keys(customerOrderToDisplay.pizza).foreach(function(key) {
//     const pizza = customerOrderToDisplay.processOrder(key);
//     htmlForCustomerOrder += pizza.id + pizza.size + pizza.toppings;
//   });
//   alert(pizza);
// }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


function pushValue() {
  const pizsize = $("#size").val();
    const piztoppings = $("#toppings").val();
    

    if (pizsize === "small" && piztoppings === "pepperoni") {
      let orderDetails = new Pizza(pizsize, piztoppings);

      alert(orderDetails)
    }
}

$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();
    const customerOrder = new PizzaProcessor();

    pushValue()

    
    // customerOrder.processOrder(orderDetails);
    // alert(customerOrder);
  });

});