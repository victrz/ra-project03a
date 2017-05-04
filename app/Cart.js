export default class Cart{
constructor(app = new App()){
  //this.ss = window.sessionStorage;
  //this.cartView=app.cartView;
  console.log("from cart.js")
}
}
// }
//   addItemToCart( sku, qty = 1){}
//   subtractitemfromcart (sku, qty = 1){}
//   removeallitemsofspecifictype (sku){}
//   clearEntireCart(app){}
//
// addItemToCart(app = new App()){
//   var sessionLength = this.ss.length;
//   if (sessionLength<=0){
//     this.ss.setItem(sku,qty.toString());
//     this.cartView.updateLittleCartIcon(qty);
//     return;
//   }
//   console.log(this.ss);
//   let newtotalyqty = 0;
//   let match = 0;
//
//   for (let key in this.ss){
//     if (key==sku.toString()){
//       let oldQty = this.ss.getItem(key);
//       oldQty = parseInt(oldQty);
//       let newQty = oldQty + qty;
//       newQty = newQty.toString();
//       this.ss.setItem(key, newQty);
//       match = 1;
//     }
//   }
//
//   if (match<=0){
//     this.ss.setItem(sku, wty.toString());
//   }
//   for (let i=0; i<this.ss.length; i++){
//
//   }
// }
// subtract
// }

// add item to cart
// delete item from cart
// update cart
// clear cart
//checkout
//sessionstorage

//showcartview(e){
//-read sessionstorage
//-loop through sessionstorage for loop .length
//-read current item
//-loop through products and find product that matches
//-render your elements / calculate totals and quantities

// //determine which product is selected (e)
// //new attribute set <button data-sku="sku">
// //pass sku # to shopping cart
// //
// //addItemToCart(sku){
// check for session storage
//   if (true){
//   check if sku exists in storage already.
//     if(exists){
//     update sku key with existing quantity ++1
//     }
//     else{
//     create new sku key in session storage with quantity 1
//     }
//   }
//   update little cart icon with counter (find element by ID)
// }

//little shopping cart icon counter
//function clickee(e){}
//pass to shopping cart view . js
//needs access to sessionstorage
//
