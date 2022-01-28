function PizzaProcessor() {
  this.pizza = {};
  this.currentID = 0;
}

const customerOrder = new PizzaProcessor();






$(document).ready(function(){
  ("form#sendIt").submit(function(event){
    event.preventDefault();

  });

});