function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}

PizzaProcessor.prototype.orderNumber = function() {
  this.currentID += 1;
  return this.currentID; 
};

PizzaProcessor.prototype.processOrder = function(pizza) {
  pizza.id = this.orderNumber();
  this.pizza[pizza.id] = pizza;
};

PizzaProcessor.prototype.findOrder = function(id) {
  if (this.pizza[id] != undefined) {
    return this.pizza[id];
  }
  return false;
};

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

const customerOrder = new PizzaProcessor();

$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();
    const pizzaSize = $("input#sizeS, input#sizeM, input#sizeL, input#sizeG").val();
    const pizzaToppings = $("input#toppingPep, input#toppingOli, input#toppingMush, input#toppingSaug, input#toppingBef, input#toppingOni, input#toppingBell, input#toppingAnch").val();

    let orderDetails = new Pizza(pizzaSize, pizzaToppings);
    customerOrder.processOrder(orderDetails);
    alert(customerOrder);
  });

});