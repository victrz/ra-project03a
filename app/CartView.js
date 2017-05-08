
import AllProducts from './AllProducts';
export default class CartView {
    constructor(allProducts){
      this.allProducts = allProducts;
    }
    onClickOpenCart(e){
      let allTheProducts = this.products;
      let ss = window.sessionStorage;
      console.log("SESSION STORAGE:");
      console.log(ss);
      document.getElementById("load-cart").style.display = "block";
      document.getElementById("yourCart").style.display= "block";
      let closeCart = document.getElementById("close-cart").appendChild(document.createTextNode("close window"));
      document.getElementById("close-cart").addEventListener("click",this.cv.onClickCloseCart,false);
      //if ss.length==0 render "your cart is empty"

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
      for (let z=0; z<ss.length; z++){
        let skuKey = ss.key(z);
        let match = findInSession(allTheProducts, skuKey);
        console.log(match);
        this.cv.createItem(match.sku, match.image, match.salePrice, match.name, match.manufacturer)
      }
    }
    //overflow scroll?

      createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer){
        console.log("CREATING ITEM");
        console.log(itemImage);
        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","itemRow");
        let imageCart = this.createImage(itemImage);
        itemDiv.appendChild(imageCart);
        // let priceCart = document.getElementById("price-cart").appendChild(document.createTextNode(itemPrice));
        // let nameCart = document.getElementById("name-cart").appendChild(document.createTextNode(itemName));
        // let qtyCart = document.getElementById("qty-cart").appendChild(document.createTextNode(itemQty));
        //let newUpdateButton = this.createUpdateItemButton(itemSku);
        //document.getElementById("cart-view-buttons").appendChild(newUpdateButton);
        //let newRemoveButton = this.createRemoveItemButton(itemSku);
        //document.getElementById("cart-view-buttons").appendChild(newRemoveButton);
        yourCart.appendChild(itemDiv);

    }
    onClickCloseCart(e){
      document.getElementById("load-cart").style.display = "none";
      document.getElementById("yourCart").style.display= "none";
    }
    createImage(itemImage){
      let newProductImage = document.createElement("img");
      //newProductImage.src = `${itemImage}`;
      newProductImage.setAttribute("src", itemImage);
      newProductImage.setAttribute("height","200px");
      newProductImage.setAttribute("width","200px");
      newProductImage.setAttribute("alt",`${name}`);
      return newProductImage;
    }
    createUpdateItemButton(sku){
        let newUpdateButton = document.createElement("button");
        newUpdateButton.setAttribute("data-sku",sku);
        newUpdateButton.setAttribute("type","button");
        newUpdateButton.setAttribute("class","white-button");
        newUpdateButton.setAttribute("class","text-white");
        newUpdateButton.setAttribute("class","padding");
        newUpdateButton.setAttribute("height","50px");
        newUpdateButton.setAttribute("width","100px");
        newUpdateButton.appendChild(document.createTextNode("update"));
        //newUpdateButton.addEventListener("click",this.onClickUpdateCart.bind(this),false);
        return newUpdateButton;
    }
    createRemoveItemButton(sku){
        let newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-sku",sku);
        newRemoveButton.setAttribute("type","button");
        newRemoveButton.setAttribute("class","gray-button");
        newRemoveButton.setAttribute("class","text-white");
        newRemoveButton.setAttribute("class","padding");
        newRemoveButton.appendChild(document.createTextNode("remove"));
        //newRemoveButton.addEventListener("click",this.onClickRemoveItem.bind(this),false);
        return newRemoveButton;
    }
    //
    // onClickUpdateCart(e){
    //   let currentSku = e.target.getAttribute("data-sku");
    //   //this.app.cart.addItemToCart(currentSku, 1);
    // }
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
    // onClickEmptyCart(e){
    //   this.ss.clear();
    // }
}
