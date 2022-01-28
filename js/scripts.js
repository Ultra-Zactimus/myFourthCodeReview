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

// function attachSizeVal() {
//   const small = ("input#sizeS").val();
//   const medium = ("input#sizeM").val();
//   const large = ("input#sizeL").val();
//   const gigantor = ("input#sizeG").val();
//   let size;
//   if (small) {
//   size = "Small";

//   } else if (medium) {
//     size = "Medium";

//   } else if (large) {
//     size = "Large";

//   } else {
//     size = "Gigantor"
//   }
// }

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}


$(document).ready(function(){
  $("button#getPizza").click(function(event){
    event.preventDefault();
    const customerOrder = new PizzaProcessor();

    const pizzaSize = $("input#size").val();
    const pizzaToppings = $("input#toppings").val();

    let orderDetails = new Pizza(size, pizzaToppings);
    customerOrder.processOrder(orderDetails);
    alert(customerOrder);
  });

});