function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.addPrice = function() {

  if (this.size === undefined) {
    this.size = "slice of "
    this.price = "3"
  }
  if (this.toppings === undefined) {
    this.toppings = "Cheese"
  }

  if (this.size === 'Gigantor' && this.toppings === 'Pepperoni' || this.size === 'Gigantor' && this.toppings === 'Mushrooms' || this.size === 'Gigantor' && this.toppings === 'Olives' || this.size === 'Gigantor' && this.toppings === 'Cheese') {
    this.price = "24";

  } else if (this.size === 'Gigantor' && this.toppings === 'Pepperoni and Mushrooms' || this.size === 'Gigantor' && this.toppings === 'Mushrooms and Olives' || this.size === 'Gigantor' && this.toppings === 'Pepperoni and Olives') {
    this.price = "26";

  } else if (this.size === 'Gigantor' && this.toppings === 'Pepperoni, Mushrooms and Olives') {
    this.price = "28";

  } else if (this.size === 'Medium' && this.toppings === 'Pepperoni' || this.size === 'Medium' && this.toppings === 'Mushrooms' || this.size === 'Medium' && this.toppings === 'Olives' || this.size === 'Medium' && this.toppings === 'Cheese') {
    this.price = "16";

  } else if (this.size === 'Medium' && this.toppings === 'Pepperoni and Mushrooms' || this.size === 'Medium' && this.toppings === 'Mushrooms and Olives' || this.size === 'Medium' && this.toppings === 'Pepperoni and Olives') {
    this.price = "18";

  } else if (this.size === 'Medium' && this.toppings === 'Pepperoni, Mushrooms and Olives') {
    this.price = "20";

  } else if (this.size === 'Small' && this.toppings === 'Pepperoni' || this.size === 'Small' && this.toppings === 'Mushrooms' || this.size === 'Small' && this.toppings === 'Olives' || this.size === 'Small' && this.toppings === 'Cheese') {
    this.price = "10";

  } else if (this.size === 'Small' && this.toppings === 'Pepperoni and Mushrooms' || this.size === 'Small' && this.toppings === 'Mushrooms and Olives' || this.size === 'Small' && this.toppings === 'Pepperoni and Olives') {
    this.price = "12";

  } else if (this.size === 'Small' && this.toppings === 'Pepperoni, Mushrooms and Olives') {
    this.price = "14";
  }
};

$(document).ready(function() {
  let orderDetails = new Pizza();
  $("#sizes").on('change', function() {
    orderDetails.size = $("#sizes").children("option:selected").text();
    console.log(orderDetails);
  });
  $("#toppings").on('change', function() {
    orderDetails.toppings = $("#toppings").children("option:selected").text();
    console.log(orderDetails);
  });
  $("#getPizza").on('click', function() {
    orderDetails.addPrice();
    $("#getPizza").hide();
    $("#total").show();
    $("#return").show();
    $("#total").html("1 " + orderDetails.size + " " + orderDetails.toppings + " pizza comes out to $" + orderDetails.price);
  });
  $("#return").on('click', function() {
    location.reload(true);
  });
});