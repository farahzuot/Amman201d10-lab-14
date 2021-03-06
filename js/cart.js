/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tboadyEl = document.getElementsByTagName('tbody');

table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

while(tboadyEl.firstChild){
 tboadyEl.deleteRow(0);

}


}


// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  for(var i =0 ;i < Cart.length;i++){

      var rawEl = document.createElement('tr');
      tboadyEl.appendChild(rawEl);
      var deleteTd = document.createElement('td');
      deleteTd.setAttribute('id', 'delRow');
      var quantityTd = document.createElement('td');
      var itemTd = document.createElement('td');
      rawEl.appendChild(deleteTd);
      rawEl.appendChild(quantityTd);
      rawEl.appendChild(itemTd);
      deleteTd.textContent="X";
      quantityTd.textContent= Cart.items[i][quantity];
      itemTd.textContent = Cart.items[i][product];
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

  if (event.target.id === 'delRow'){
    Cart.removeItem()

  }

}

// This will initialize the page and draw the cart on screen
renderCart();
