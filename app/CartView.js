import AllProducts from './AllProducts';
export default class CartView {
    constructor(allProducts){
      this.allProducts = allProducts;

    }
    onClickOpenCart(e){
      // console.log(this);
      let allTheProducts = this.products;
      //session storage holds SKUs of the items that have been added to the cart as keys
      //and the quantity of each SKU as the values:
      let ss = window.sessionStorage;
      let cartTotalCost = 0;
      //renders the cart view pop-up(with screen overlay):

      document.getElementById("load-cart").style.display = "block";
      document.getElementById("yourCart").style.display= "block";
      document.getElementById("close-cart").addEventListener("click",this.cv.onClickCloseCart,false);
      document.getElementById("empty-cart").addEventListener("click",this.cv.onClickEmptyCart.bind(ss),false);
      document.getElementById("checkout-button").addEventListener("click",this.cv.onClickCheckout,false);
      //takes each item SKU in session storage and finds it's corresponding product:
      let findInSession = function (products, sku) {
          if (products) {
            console.log("findInSession");
              for (let i = 0; i < products.length; i++) {
                  if (products[i].sku == sku) {
                      return products[i];
                  }
                  // let found = findInSession(products[i], sku);
                  // if (found) return found;
              }
          }
      };
      for (let z=0; z<ss.length; z++){
        let skuKey = ss.key(z);
        //next step: skuQty doesn't work.
        let skuQty = ss.getItem(skuKey);
        //console.log(skuQty);
        //takes matched product and renders information in cart view:
        let match = findInSession(allTheProducts, skuKey);
        let productUnitPrice = match.salePrice;
        let productTotalPrice = parseInt(productUnitPrice) * parseInt(skuQty);
        cartTotalCost += productTotalPrice;
        document.getElementById("cart-total").innerHTML = cartTotalCost;


        this.cv.createItem(match.sku, match.image, match.salePrice, match.name, match.manufacturer, skuQty, ss)
      }
    }
    // cartTotal(ss){
    //   for (let z=0; z<ss.length; z++){
    //     let skuKey = ss.key(z);
    //     let skuQty = ss.getItem(skuKey);
    //     let match = findInSession(allTheProducts, skuKey);
    //     let productUnitPrice = match.salePrice;
    //     let productTotalPrice = productUnitPrice.parseInt() * skuQty.parseInt();
    //   }
    //
    // }
      createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, skuQty, ss){
        //creates a row in which each product in the cart is listed:
        let itemWrap = document.createElement("div");
        itemWrap.setAttribute("class","flex");
        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class","itemRow");
        itemDiv.setAttribute("class","flex");
        let imageCart = this.createImage(itemImage);
        itemDiv.appendChild(imageCart);
        let nameCart = this.createName(itemName);
        itemDiv.appendChild(nameCart);
        let priceCart = this.createPrice(itemPrice, skuQty);
        itemDiv.appendChild(priceCart);
        let quantityCart = this.createQty(skuQty, itemSku);
        // let qtyCart = this.createQty(itemQty);
        itemDiv.appendChild(quantityCart);
        //creates a div to hold "update" and "remove" buttons:
        let buttonsDiv = document.createElement("div");
        buttonsDiv.setAttribute("id","cart-view-buttons");
        buttonsDiv.setAttribute("class","flex");
        buttonsDiv.setAttribute("class","flex-col");
        let newUpdateButton = this.createUpdateItemButton(itemSku, ss);
        buttonsDiv.appendChild(newUpdateButton);
        let newRemoveButton = this.createRemoveItemButton(itemSku, ss);
        buttonsDiv.appendChild(newRemoveButton);
        //appends buttons div to item div (row in cart view):
        //appends each item's row to the cart view:
        itemWrap.appendChild(itemDiv);
        itemWrap.appendChild(buttonsDiv);

        testing.appendChild(itemWrap);

    }
    createQty(itemQty, itemSku){
      let f = document.createElement("form");
      f.setAttribute('method',"post");
      f.setAttribute('class',"padding");
      f.setAttribute('id',"quantity-form");
      let i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute('name',"quantity");
      i.setAttribute('value',`${itemQty}`);
      var s = document.createElement("input"); //input element, Submit button
      s.setAttribute('type',"submit");
      s.setAttribute('value',"Submit");
      // s.addEventListener("click",this.onClickUpdateCart.bind(sku, ss),false);

      f.appendChild(i);
      f.appendChild(s);

      return f;
    }
    createName(itemName){
      let newProductName = document.createElement("p");
      newProductName.setAttribute("class","padding");
      let contentName = document.createTextNode(`${itemName}`);
      newProductName.append(contentName);
      return newProductName;
    }
    createPrice(itemPrice, skuQty){
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
    createUpdateItemButton(sku, ss){//button should be a part of a form, bind THIS (the entire form) to the update button
      let newUpdateButton = document.createElement("button");
      newUpdateButton.setAttribute("data-sku",sku);
      newUpdateButton.setAttribute("type","button");
      newUpdateButton.setAttribute("class","white-button");
      newUpdateButton.setAttribute("height","50px");
      newUpdateButton.setAttribute("width","100px");
      newUpdateButton.appendChild(document.createTextNode("update"));
      //next step: write event handler functions:
      //on click input value set item of sku to inputted value
      //newUpdateButton.addEventListener("click",this.onClickUpdateCart.bind(sku, ss),false);
      return newUpdateButton;
    }
    createRemoveItemButton(sku, ss){
        let newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-sku",sku);
        newRemoveButton.setAttribute("type","button");
        newRemoveButton.setAttribute("class","gray-button");
        newRemoveButton.appendChild(document.createTextNode("remove"));
        //next step: write event handler functions:
        newRemoveButton.addEventListener("click",this.onClickRemoveItem.bind(sku, ss),false);
        return newRemoveButton;
    }
    onClickCheckout(e){
      window.alert("check out!");
   }
   onClickUpdateCart(e){
     //THIS should be the form where the input is located
    //  var inputValue = this.value;
    //  ss.setItem(sku, inputValue)
   }

    onClickRemoveItem(e){
      e.removeItem(this);
      let qty = e.length;
      // document.getElementById("numItemsParagraph").innerHTML = "";
      document.getElementById("numItemsParagraph").innerHTML = qty ;
      if (e.length <= 0){
        document.getElementById("numItemsParagraph").style.display = 'none';
        document.getElementById('testing').innerHTML = "your cart is empty";
        e.clear();
        document.getElementById("cart-total").innerHTML = "0";

      };
      console.log(e);
    }

    //   // let sku = e.target.getAttribute("data-sku");
    //   // //set ss for value of sku key, sutbract one
    //   // //if value is 1, subtract 1 and remove sku entry
            // this.ss.setItem(sku,qty.toString());
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

    onClickEmptyCart(e){
      this.clear();
      document.getElementById('testing').innerHTML = "your cart is empty";
      document.getElementById("numItemsParagraph").innerHTML = "";
      let qty = 0;
      document.getElementById("numItemsParagraph").style.display = 'none';
      document.getElementById("cart-total").innerHTML = "0";

    }
}
