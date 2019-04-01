//backend logic
function Order(size, style, beverages, meats, vegetables) {
  this.size = size;
  this.style = style;
  this.beverages = beverages;
  this.meats = meats;
  this.vegetables = vegetables;
  this.price;
}

Order.prototype.calculatePrice = function() {
  this.price = 10;
  if (this.size === 'small') {
    this.price -= 3;
  } else if (this.size === 'large') {
    this.price += 3;
  } else if (this.size === 'x-large') {
    this.price += 5;
  }

  if (this.crust === "deep-dish") {
    this.price += 3;
  }

  for (var i = 0; i < this.beverages.length; i++) {
    this.price += 3;
  }

  for (var i = 0; i < this.meats.length; i++) {
    this.price += 2.5;
  }

  for (var i = 0; i < this.vegetables.length; i++) {
    this.price += 1.5;
  }
}

Order.prototype.shortDescription = function() {
  return "A " + this.size + " " + this.style + " pizza including toppings and beverages: $" + ((this.price).toFixed(2));
}
//frontend logic


$(document).ready(function() {
  $('#order-form').submit(function(event) {
    event.preventDefault();

    var size = $('input[name=size]:checked').val();
    var style = $('input[name=style]:checked').val();
    var beverages = $('input:checkbox[name=beverages]:checked').map(function() {
      return this.value;
    }).get();
    var meats = $('input:checkbox[name=meats]:checked').map(function() {
      return this.value;
    }).get();
    var vegetables = $('input:checkbox[name=vegetables]:checked').map(function() {
      return this.value;
    }).get();
    var newOrder = new Order(size, style, beverages, meats, vegetables);

    newOrder.calculatePrice();

    $('#order-list').append('<li><span class="order">' + newOrder.shortDescription() + '</span></li>');

    document.getElementById("order-form").reset();



  });


});
