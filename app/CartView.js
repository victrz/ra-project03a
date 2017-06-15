// import AllProducts from './AllProducts';
export default class CartView {
    constructor(){

    }
    onClickOpenCart(){
      console.log("onClickOpenCart");
      let cv = this.cv;
      let products = this.products;

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
      let findInSession = function ( sku) {
          if (products.length > 0) {
            // console.log("findInSession");
              for (let i = 0; i < products.length; i++) {
                  if (products[i].sku == sku) {
                      return products[i];
                  }
              }
          }
      };
      console.log(ss);
      for (let z=0; z<ss.length; z++){
        let skuKey = ss.key(z);
        //next step: skuQty doesn't work.
        let skuQty = ss.getItem(skuKey);
        //takes matched product and renders information in cart view:
        let match = findInSession(skuKey);
        let productUnitPrice = match.salePrice;
        let productTotalPrice = productUnitPrice * parseInt(skuQty);
        cartTotalCost += productTotalPrice;
        document.getElementById("cart-total").innerHTML = cartTotalCost.toFixed(2);
        console.log(z);

        this.cv.createItem(match.sku, match.image, match.salePrice, match.name, match.manufacturer, skuQty, ss);

      }
    }

      createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, skuQty, ss){

        //creates a row in which each product in the cart is listed:

        let itemDiv = document.createElement("div");
        itemDiv.setAttribute("class"," flex itemRow flex-align-items-center flex-just-between row-width-100");
        let imageCart = this.createImage(itemImage);
        itemDiv.appendChild(imageCart);
        let nameCart = this.createName(itemName);
        nameCart.setAttribute("class","flex width-40");
        itemDiv.appendChild(nameCart);
        let priceCart = this.createPrice(itemPrice, skuQty);
        priceCart.setAttribute("class","flex flex-grow flex-just-center width-20");
        itemDiv.appendChild(priceCart);
        let quantityCart = this.createQty(skuQty, itemSku,itemPrice, ss);
        quantityCart.setAttribute("class","flex");
        itemDiv.appendChild(quantityCart);
        console.log("after quantity");
      //
      //   //creates a div to hold "update" and "remove" buttons:

        let newRemoveButton = this.createRemoveItemButton(itemSku, itemPrice, skuQty , ss);
        itemDiv.appendChild(newRemoveButton);

      //   //appends each item's row to the cart view:*/

        document.getElementById("testing").appendChild(itemDiv);


    }
    createQty(itemQty, itemSku, itemPrice, ss){
      console.log("Creating quantity");
      console.log(itemQty);
      console.log(itemSku);
      let f = document.createElement("form");
      f.setAttribute('method',"");
      f.setAttribute('class',"padding");
      f.setAttribute('id',"quantity-form");
      let i = document.createElement("input"); //input element, text
      i.setAttribute('type',"text");
      i.setAttribute("data-sku",itemSku);
      i.setAttribute('name',"quantity");
      i.setAttribute('value',`${itemQty}`);
      let s = document.createElement("button"); //input element, Submit button
      s.setAttribute("data-sku",itemSku);
      s.setAttribute("type","button");
      s.setAttribute("class","plain-button");

      s.appendChild(document.createTextNode("update"));
      s.addEventListener("click",this.onClickUpdateCart.bind(i, ss, itemPrice),false);
      f.appendChild(i);
      f.appendChild(s);

      return f;
    }
    createName(itemName){
      let newProductName = document.createElement("p");
      newProductName.setAttribute("class","padding-small");
      let contentName = document.createTextNode(`${itemName}`);
      newProductName.append(contentName);
      return newProductName;
    }
    createPrice(itemPrice, skuQty){
      let newProductPrice = document.createElement("h2");
      let contentPrice = document.createTextNode(`$ ${itemPrice}`);
      newProductPrice.append(contentPrice);
      return newProductPrice;
    }
    onClickCloseCart(e){
      document.getElementById("load-cart").style.display = "none";
      document.getElementById("yourCart").style.display= "none";
      document.getElementById("testing").innerHTML= "";

    }
    createImage(itemImage){
      let newProductImage = document.createElement("img");
      newProductImage.setAttribute("src", itemImage);
      newProductImage.setAttribute("width","150px");
      newProductImage.setAttribute("alt",`image of ${name}`);
      newProductImage.setAttribute("class","padding-small flex");
      return newProductImage;
    }
    createRemoveItemButton(sku, price, qty, ss){
        let newRemoveButton = document.createElement("button");
        newRemoveButton.setAttribute("data-sku",sku);
        newRemoveButton.setAttribute("type","button");
        newRemoveButton.setAttribute("class","flex plain-button");
        newRemoveButton.appendChild(document.createTextNode("remove"));
        //next step: write event handler functions: gray-button
        newRemoveButton.addEventListener("click",this.onClickRemoveItem.bind(sku, price, qty, ss),false);
        return newRemoveButton;
    }
    onClickCheckout(e){
      window.alert("check out!");
   }
   onClickUpdateCart(ss, unitPrice){
     console.log(ss);
     let value =  parseInt(this.value)
     let inputValue = Math.max(0, value);
     let sku = this.getAttribute("data-sku");
     let oldCartTotal = document.getElementById("cart-total").innerHTML;
     let oldSkuQty = ss.getItem(sku);
     if (inputValue === 0){
       ss.removeItem(sku);
       let newCartTotal = oldCartTotal - (oldSkuQty * unitPrice);
       document.getElementById("cart-total").innerHTML = newCartTotal;
     }else{
       let newCartTotal = oldCartTotal - (oldSkuQty * unitPrice)+(inputValue * unitPrice);
       document.getElementById("cart-total").innerHTML = newCartTotal.toFixed(2);
       ss.setItem(sku, inputValue);
     }
     let newTotalQty = 0;

     for (let i=0; i< ss.length; i++){
         let skuKey = ss.key(i);
         let qtyValue = ss.getItem(skuKey);
         newTotalQty+= parseInt(qtyValue);

      }
      document.getElementById("numItemsParagraph").innerHTML = newTotalQty;

   }

    onClickRemoveItem(price, qty, ss){
      let old = document.getElementById("cart-total").innerHTML;
      console.log(old);
      let newTotal = old - (price*qty);

      ss.removeItem(this);

      console.log(ss);

      let newTotalQty = 0;
      for (let i=0; i< ss.length; i++){
          let skuKey = ss.key(i);
          let qtyValue = ss.getItem(skuKey);
          newTotalQty+= parseInt(qtyValue);
      }

      document.getElementById("cart-total").innerHTML = newTotal.toFixed(2);

      document.getElementById("numItemsParagraph").innerHTML = newTotalQty ;
      if (ss.length <= 0){
        document.getElementById("numItemsParagraph").style.display = 'none';
        document.getElementById('testing').innerHTML = "<p class='text-align-center'>your cart is empty</p>";
        ss.clear();
        document.getElementById("cart-total").innerHTML = "0";

      };
    }


    onClickEmptyCart(e){
      this.clear();
      document.getElementById('testing').innerHTML = "<p class='text-align-center'>your cart is empty</p>";
      document.getElementById("numItemsParagraph").innerHTML = "";
      let qty = 0;
      document.getElementById("numItemsParagraph").style.display = 'none';
      document.getElementById("cart-total").innerHTML = "0";

    }
}
