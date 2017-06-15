// import CartView from './CartView';
import App from './App';
export default class Cart{
constructor(app){
  // this.cartView = new CartView();
  // this.app.cartView;
  this.app = app;
  this.ss = window.sessionStorage;


}

// let something = function () {
//   let passToCartView = {products: this.app.allProducts.productList, cv: this.app.cartView};
//
//     document.getElementById("numItemsParagraph").addEventListener("click", this.app.cartView.onClickOpenCart.bind(passToCartView), false);
// }();
addItemToCart(sku,qty = 1){
  //this.ss.setItem(sku,qty.toString());

  let sessionLength = this.ss.length;
  if(sessionLength<=0){
      this.ss.setItem(sku,qty.toString());
      this.updateLittleCartIcon(1, "run");
      return ;
  }
  let newTotalQty = 0;
  let match = 0;
  for (let key in this.ss){
      if (key == sku ){
        //^sku.toString()
          // get current quantity (its a string)
          // convert it to a number;
          let oldQty = this.ss.getItem(key);
          oldQty = parseInt(oldQty);
          let newQty = oldQty + qty;
          // then back to a string
          newQty = newQty.toString();
          this.ss.setItem(key,newQty);
          match = 1;

          for (let i=0; i< this.ss.length; i++){
              let skuKey = this.ss.key(i);
              //console.log(skuKey);
              let qtyValue = this.ss.getItem(skuKey);
              // sumOfItems += parseInt(qtyValue);
              newTotalQty+= parseInt(qtyValue);
              // this.updateLittleCartIcon(newTotalQty);

          }
          this.updateLittleCartIcon(newTotalQty,"run");
          return;
      }
  }
  // we didn't find a match
  // so create a new key value and update view
  if (match<=0){
      this.ss.setItem(sku,qty.toString());

  }
  // sum up all the current quantities to get new total
  // let sumOfItems = 0;
  for (let i=0; i< this.ss.length; i++){
      let skuKey = this.ss.key(i);
      //console.log(skuKey);
      let qtyValue = this.ss.getItem(skuKey);
      // sumOfItems += parseInt(qtyValue);
      newTotalQty+= parseInt(qtyValue);
  }
  this.updateLittleCartIcon(newTotalQty);
}
  updateLittleCartIcon(qty,callback = "null"){
    console.log("new total qty cart.js =");
    console.log(qty);
    //pass this object to cartView by binding it to the event handling function:
  //  let passToCartView = {products: this.app.allProducts.productList, cv: this.app.cartView};
    //updates the quantity shown in the shopping cart icon's counter:
    document.getElementById("numItemsParagraph").style.display = 'block';
    document.getElementById("numItemsParagraph").innerHTML = qty;
    // $('#numItemsParagraph').click(this.app.cartView.onClickOpenCart());
    // console.log(callback);
    // if (callback != "null") {
    //   console.log("call back is not null");
    // //  document.getElementById("numItemsParagraph").addEventListener("click", this.app.cartView.onClickOpenCart.bind(passToCartView), false);
    // }

    //on clicking the shopping cart icon's counter, open cart view:

  }

}
