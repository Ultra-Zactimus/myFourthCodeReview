function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}

const customerOrder = new PizzaProcessor();

PizzaProcessor.prototype.orderNumber = function() {
  this.currentID += 1;
  return this.currentID; 
}




$(document).ready(function(){
  ("form#sendIt").submit(function(event){
    event.preventDefault();

  });

});