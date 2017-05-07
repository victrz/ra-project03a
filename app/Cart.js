import CartView from './CartView';
import App from './App';
export default class Cart{
constructor(cartView, app){
  this.cartView = cartView;
  this.app = app;
  this.ss = window.sessionStorage;
}

addItemToCart(sku,qty = 1){
  console.log("here and working");
  console.log(sku);
  //this.ss.setItem(sku,qty.toString());

  var sessionLength = this.ss.length;
  if(sessionLength<=0){
      this.ss.setItem(sku,qty.toString());
      this.cartView.updateLittleCartIcon(qty);
      return ;
  }
  console.log(this.ss);
  let newTotalQty = 0;
  let match = 0;

  for (let key in this.ss){
      if (key == sku.toString() ){
          console.log(`matched ${sku} and ${key}`);
          // get current quantity (its a string)
          // convert it to a number;
          let oldQty = this.ss.getItem(key);
          oldQty = parseInt(oldQty);
          let newQty = oldQty + qty;
          // then back to a string
          newQty = newQty.toString();
          this.ss.setItem(key,newQty);
          match = 1;
      }
  }
  // we didn't find a match
  // so create a new key value and update view

  if (match<=0){
      console.log("new item to add - " + sku);
      this.ss.setItem(sku,qty.toString());
  }
  // sum up all the current quantities to get new total
  for (let i=0; i< this.ss.length; i++){
      let skuKey = this.ss.key(i);
      console.log(skuKey);
      let qtyValue = this.ss.getItem(skuKey);

      newTotalQty+= parseInt(qtyValue);
  }
  this.updateLittleCartIcon(newTotalQty);
}

updateLittleCartIcon(qty){
  document.getElementById("numItemsParagraph").innerHTML = qty;
  document.getElementById("numItemsParagraph").addEventListener("click", this.cartView.onClickOpenCart, false);
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
