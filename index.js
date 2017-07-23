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
  let strings = []
  let itemNames = cart.map( item => Object.keys(item) )
  let itemPrices = cart.map( price => Object.values(price) )
  let string = "In your cart, you have "
  if(cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1) {
    console.log(`In your cart, you have ${itemNames[0]} at $${itemPrices[0]}.`)
  } else if (cart.length === 2) {
    itemNames.forEach(function(item, idx){
      strings.push(`${item} at $${itemPrices[idx]}`)
    })
    let almostString = string.concat(strings.join(" and "))
    let finalString = almostString.concat(".")
    console.log(finalString);
  } else {
    itemNames.forEach(function(item, idx){
      strings.push(`${item} at $${itemPrices[idx]}`)
    })
    let lastItem = strings.pop();
    let mostItems = strings.join(", ")
    let finalString = string.concat(mostItems).concat(", and ").concat(lastItem).concat(".")
    console.log(finalString);
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
