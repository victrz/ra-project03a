import AllProducts from './AllProducts';
export default class CartView {
    constructor(allProducts){
      this.allProducts = allProducts;
    }
    onClickOpenCart(e){
      let allTheProducts = this.products;
      //session storage holds SKUs of the items that have been added to the cart as keys
      //and the quantity of each SKU as the values:
      let ss = window.sessionStorage;
      //renders the cart view pop-up(with screen overlay):
      document.getElementById("load-cart").style.display = "block";
      document.getElementById("yourCart").style.display= "block";
      document.getElementById("close-cart").addEventListener("click",this.cv.onClickCloseCart,false);
      document.getElementById("empty-cart").addEventListener("click",this.cv.onClickEmptyCart.bind(ss),false);
      document.getElementById("checkout-button").addEventListener("click",this.cv.onClickCheckout,false);
      //takes each item SKU in session storage and finds it's corresponding product:
      var findInSession = function (products, sku) {
          if (products) {
              for (var i = 0; i < products.length; i++) {
                  if (products[i].sku == sku) {
                      return products[i];
                  }
                  var found = findInSession(products[i], sku);
                  if (found) return found;
              }
          }
      };
      for (var z=0; z<ss.length; z++){
        let skuKey = ss.key(z);
        //next step: skuQty doesn't work.
        let skuQty = ss.getItem(z);
        //takes matched product and renders information in cart view:
        let match = findInSession(allTheProducts, skuKey);
        this.cv.createItem(match.sku, match.image, match.salePrice, match.name, match.manufacturer, skuQty)
      }
    }
      createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, itemQty){
        //creates a row in which each product in the cart is listed:
        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","itemRow");
        itemDiv.setAttribute("class","flex");
        let imageCart = this.createImage(itemImage);
        itemDiv.appendChild(imageCart);
        let nameCart = this.createName(itemName);
        itemDiv.appendChild(nameCart);
        let priceCart = this.createPrice(itemPrice);
        itemDiv.appendChild(priceCart);
        let qtyCart = this.createQty(itemQty);
        itemDiv.appendChild(qtyCart);
        //creates a div to hold "update" and "remove" buttons:
        let buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("id","cart-view-buttons");
        buttonsDiv.setAttribute("class","flex");
        buttonsDiv.setAttribute("class","flex-col");
        let newUpdateButton = this.createUpdateItemButton(itemSku);
        buttonsDiv.appendChild(newUpdateButton);
        let newRemoveButton = this.createRemoveItemButton(itemSku);
        buttonsDiv.appendChild(newRemoveButton);
        //appends buttons div to item div (row in cart view):
        itemDiv.appendChild(buttonsDiv);
        //appends each item's row to the cart view:
        yourCart.appendChild(itemDiv);
    }
    createQty(itemQty){
      let newProductQty = document.createElement("p");
      newProductQty.setAttribute("class","padding");
      let contentQty = document.createTextNode(`${itemQty}`);
      newProductQty.append(contentQty);
      return newProductQty;
    }
    createName(itemName){
      let newProductName = document.createElement("p");
      newProductName.setAttribute("class","padding");
      let contentName = document.createTextNode(`${itemName}`);
      newProductName.append(contentName);
      return newProductName;
    }
    createPrice(itemPrice){
      let newProductPrice = document.createElement("h2");
      newProductPrice.setAttribute("class","padding");
      let contentPrice = document.createTextNode(`$ ${itemPrice}`);
      newProductPrice.append(contentPrice);
      return newProductPrice;
    }
    onClickCloseCart(e){
      document.getElementById("load-cart").style.display = "none";
      document.getElementById("yourCart").style.display= "none";
    }
    createImage(itemImage){
      let newProductImage = document.createElement("img");
      newProductImage.setAttribute("src", itemImage);
      newProductImage.setAttribute("width","150px");
      newProductImage.setAttribute("alt",`image of ${name}`);
      newProductImage.setAttribute("class","padding");
      return newProductImage;
    }
    createUpdateItemButton(sku){
      let newUpdateButton = document.createElement("button");
      newUpdateButton.setAttribute("data-sku",sku);
      newUpdateButton.setAttribute("type","button");
      newUpdateButton.setAttribute("class","white-button");
      newUpdateButton.setAttribute("height","50px");
      newUpdateButton.setAttribute("width","100px");
      newUpdateButton.appendChild(document.createTextNode("update"));
      //next step: write event handler functions:
      //newUpdateButton.addEventListener("click",this.onClickUpdateCart.bind(this),false);
      return newUpdateButton;
    }
    createRemoveItemButton(sku){
        let newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-sku",sku);
        newRemoveButton.setAttribute("type","button");
        newRemoveButton.setAttribute("class","gray-button");
        newRemoveButton.appendChild(document.createTextNode("remove"));
        //next step: write event handler functions:
        //newRemoveButton.addEventListener("click",this.onClickRemoveItem.bind(this),false);
        return newRemoveButton;
    }
    onClickCheckout(e){
      window.alert("check out!");
   }

    // onClickRemoveItem(e){
    //   // let sku = e.target.getAttribute("data-sku");
    //   // //set ss for value of sku key, sutbract one
    //   // //if value is 1, subtract 1 and remove sku entry
    //   //       // this.ss.setItem(sku,qty.toString());
    //   //       // this.updateLittleCartIcon(qty);
    //   //       // return ;
    //   //   let newTotalQty = 0;
    //   //   for (let key in this.ss){
    //   //   if (key == sku.toString() ){
    //   //       console.log(`matched ${sku} and ${key}`);
    //   //       // get current quantity (its a string)
    //   //       // convert it to a number;
    //   //       let oldQty = this.ss.getItem(key);
    //   //       oldQty = parseInt(oldQty);
    //   //       let newQty = oldQty - 1;
    //   //       // then back to a string
    //   //       newQty = newQty.toString();
    //   //       this.ss.setItem(key,newQty);
    //   // }
    //   //   for (let i=0; i< this.ss.length; i++){
    //   //       let skuKey = this.ss.key(i);
    //   //       console.log(skuKey);
    //   //       let qtyValue = this.ss.getItem(skuKey);
    //   //
    //   //       newTotalQty+= parseInt(qtyValue);
    //   //       //update cart total
    //   //   }
    //   // this.updateLittleCartIcon(newTotalQty);
    // }
    onClickEmptyCart(e){
      this.clear();
      console.log(this);
      //next step: update cart icon to show sessionStorage is now empty
      // let qty = 0;
      // cart.updateLittleCartIcon(qty);
    }
}
