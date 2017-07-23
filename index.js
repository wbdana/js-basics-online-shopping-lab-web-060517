var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {};
  newItem[item] = Math.floor(Math.random()*(100-1+1)+1);
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {

    var last = cart[cart.length -1];
    var i = 0;
    str = `In your cart, you have `

    if(cart.length === 0) {
      console.log('Your shopping cart is empty.');
    } else if (cart.length === 1) {
      console.log(`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
    }else{
      for(i = 0; i < cart.length - 1; i++){
        var key = Object.keys(cart[i])[0]
        var val = Object.values(cart[i])[0]
        if(cart.length > 2){
          str += `${key} at $${val}, `
        }else {
          str += `${key} at $${val} `
        }
      }
      str += `and ${Object.keys(last)[0]} at $${Object.values(last)[0]}.`
      console.log(str)
   }
}

function total() {
  let itemPrices = cart.map( price => Object.values(price) )
  return eval((itemPrices).join("+"))
};


function removeFromCart(item) {
  let i = 0;
  for( i = 0; i < cart.length; i++ ) {
    if ( Object.keys(cart[i])[0] === item ) {
      delete cart[i]
      cart = cart.filter(function(itemHash){return itemHash});
      return cart
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  let cartTotal = total()
  if(typeof(cardNumber) !== 'undefined'){
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    cart = []
  } else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
};
