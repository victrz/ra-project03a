import CartView from './CartView';
import App from './App';
export default class Cart{
constructor(cartView, app){
  this.cartView = cartView;
  this.app = app;
  this.ss = window.sessionStorage;

  // console.log("TESTING");
  // console.log(this.app.allProducts.productList);
  // console.log("TESTING");
}

addItemToCart(sku,qty = 1){
  console.log("here and working");
  console.log(sku);
  //this.ss.setItem(sku,qty.toString());

  var sessionLength = this.ss.length;
  if(sessionLength<=0){
      this.ss.setItem(sku,qty.toString());
      this.updateLittleCartIcon(qty);
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
  document.getElementById("numItemsParagraph").addEventListener("click", this.cartView.onClickOpenCart.bind(this.app.allProducts.productList), false);
}
}




//little shopping cart icon counter
//function clickee(e){}
//pass to shopping cart view . js
//needs access to sessionstorage
//
