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
  if(parseInt(cart.length) === 0) {
    console.log('Your shopping cart is empty.')
  } else if (parseInt(cart.length) === 1) {
    console.log(`In your cart, you have ${cart[0][0]} at $${cart[0][1]}.`)
  } else {
    var str = "In your cart, you have "
    for (i; i < parseInt(cart.length) - 2; i++) {
      str.push(`${cart[i][0]} at $${cart[i][1]}, `)
    }
    str.push(`and ${last[0]} at $${last[1]}.`)
    console.log(str)
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
