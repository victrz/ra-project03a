
import AllProducts from './AllProducts';
export default class CartView {
    constructor(allProducts){
      this.allProducts = allProducts;
    }
    onClickOpenCart(e){
      //need to get the product list in here to run loops
      console.log("MAKING A CART");
      console.log(this);
      let allTheProducts =this;
      let ss = window.sessionStorage;
      console.log(ss);
      console.log(allTheProducts);
      document.getElementById("load-cart").style.display = "block";
      document.getElementById("your-cart").style.display= "block";
      //if ss.length==0 render "your cart is empty"
      for (let z=0; z<ss.length; z++){
        for (let y=0; y<allTheProducts.length; y++){
          if (ss.key(z) == allTheProducts[y].sku){
          let itemSku = allTheProducts[y].sku;
          let itemImage = allTheProducts[y].image;
          let itemPrice = allTheProducts[y].salePrice;
          let itemName = allTheProducts[y].name;
          let itemManufacturer = allTheProducts[y].manufacturer;
          let itemQty = ss.getItem(itemSku);
          this.createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, itemQty);
          //this.createItem is not a function?
          }
        }
      }
    }
    createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, itemQty){
      let closeCart = document.getElementById("close-cart").appendChild(document.createTextNode("close window"));
      document.getElementById("close-cart").addEventListener("click",this.onClickCloseCart,false);
      let imageCart = document.getElementById("image-cart").setAttribute("src", image);
      let priceCart = document.getElementById("price-cart").appendChild(document.createTextNode(itemPrice));
      let nameCart = document.getElementById("name-cart").appendChild(document.createTextNode(itemName));
      let qtyCart = document.getElementById("qty-cart").appendChild(document.createTextNode(itemQty));
      let newUpdateButton = this.createUpdateItemButton(itemSku);
      document.getElementById("cart-view-buttons").appendChild(newUpdateButton);
      let newRemoveButton = this.createRemoveItemButton(itemSku);
      document.getElementById("cart-view-buttons").appendChild(newRemoveButton);
      let emptyCart = document.getElementById("empty-cart").appendChild(document.createTextNode("empty cart"));
      document.getElementById("empty-cart").addEventListener("click",this.onClickEmptyCart,false);
    }
    createUpdateItemButton(sku){
        let newUpdateButton = document.createElement("button");
        newCartButton.setAttribute("data-sku",sku);
        newCartButton.setAttribute("type","button");
        newCartButton.setAttribute("class","white-button");
        newCartButton.setAttribute("class","text-white");
        newCartButton.setAttribute("class","padding");
        newCartButton.appendChild(document.createTextNode("update"));
        newCartButton.addEventListener("click",this.onClickUpdateCart.bind(this),false);
        return newUpdateButton;
    }
    createRemoveItemButton(sku){
        let newRemoveButton = document.createElement("button");
        newCartButton.setAttribute("data-sku",sku);
        newCartButton.setAttribute("type","button");
        newCartButton.setAttribute("class","gray-button");
        newCartButton.setAttribute("class","text-white");
        newCartButton.setAttribute("class","padding");
        newCartButton.appendChild(document.createTextNode("remove"));
        newCartButton.addEventListener("click",this.onClickRemoveItem.bind(this),false);
        return newUpdateButton;
    }
    onClickCloseCart(e){
      document.getElementById("load-cart").style.display = "none";
      document.getElementById("cart-view").style.display= "none";
    }
    onClickUpdateCart(e){
      let currentSku = e.target.getAttribute("data-sku");
      //this.app.cart.addItemToCart(currentSku, 1);
    }
    onClickRemoveItem(e){
      let sku = e.target.getAttribute("data-sku");
      //set ss for value of sku key, sutbract one
      //if value is 1, subtract 1 and remove sku entry
            // this.ss.setItem(sku,qty.toString());
            // this.updateLittleCartIcon(qty);
            // return ;
        let newTotalQty = 0;
        for (let key in this.ss){
        if (key == sku.toString() ){
            console.log(`matched ${sku} and ${key}`);
            // get current quantity (its a string)
            // convert it to a number;
            let oldQty = this.ss.getItem(key);
            oldQty = parseInt(oldQty);
            let newQty = oldQty - 1;
            // then back to a string
            newQty = newQty.toString();
            this.ss.setItem(key,newQty);
      }
        for (let i=0; i< this.ss.length; i++){
            let skuKey = this.ss.key(i);
            console.log(skuKey);
            let qtyValue = this.ss.getItem(skuKey);

            newTotalQty+= parseInt(qtyValue);
            //update cart total
        }
        this.updateLittleCartIcon(newTotalQty);
    }
    }
    onClickClearCart(e){
      this.ss.clear();
    }

}
// <section id="load-cart" class="flex flex-align-items-center flex-just-center">
//   <div id="your-cart" class="flex flex-col padding">
//     <h1 class="padding text-align-center">YOUR CART</h1>
//     <div class="flex">
//       <img src="" alt="laptop image" class="padding">
//       <p class="padding">NAME OF LAPTOP</p>
//       <h2 class="padding">$price</h2>
//       <p class="padding">quantity</p>
//         <div class="flex flex-col">
//             <button type="button" id="update-button" class="white-button text-white padding">update</button>
//             <button type="button" id="remove-button" class="gray-button text-white padding">remove</button>
//         </div>
//     </div>
//     <div class="flex">
//       <img src="" alt="laptop image" class="padding">
//       <p class="padding">NAME OF LAPTOP</p>
//       <h2 class="padding">$price</h2>
//       <p class="padding">quantity</p>
//       <div class="flex flex-col">
//           <button type="button" id="update-button" class="white-button text-white padding">update</button>
//           <button type="button" id="remove-button" class="gray-button text-white padding">remove</button>
//       </div>
//     </div>
//     <button type="button" id="checkout-button" class="green-button text-white align-self-flex-end padding">checkout</button>
//   </div>
// </section>
