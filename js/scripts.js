function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}

const customerOrder = new PizzaProcessor();

PizzaProcessor.prototype.orderNumber = function() {
  this.currentID += 1;
  return this.currentID; 
}

PizzaProcessor.prototype.processOrder = function(pizza) {
  pizza.id = this.orderNumber();
  this.pizza[pizza.id] = pizza;
}





$(document).ready(function(){
  ("form#sendIt").submit(function(event){
    event.preventDefault();

  });

});