//Business logic
function Pizza(size, crust, veggieToppings, meatToppings){
  this.size = size;
  this.crust = crust;
  this.veggieToppings = [];
  this.meatToppings = [];
}

OrderPizza.prototype.cost = function() {
  return this.size + this.crust + this.veggieToppings + this.meatToppings;
}



$(document).ready(function(){
  $('#blanks form').submit(function(event){
    event.preventDefault();

    var nameInput = $('input#name').val();
    var depositInput = parseInt($('input#initial-deposit').val());
    var depositAmountInput = parseInt($('input#deposit-amount').val());
    var withdrawalAmountInput = parseInt($('input#withdraw-amount').val());
    var newBankAccount = new BankAccount(nameInput, depositInput, depositAmountInput, withdrawalAmountInput)

    $('#balance').append('$' + newBankAccount.balance());
  });
});
