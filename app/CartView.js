//Cart view
//createElement
//appendChild
import App from './App';
import Cart from './Cart';

export default class CartView {
    constructor(cart, app){
      this.app=app;
      this.cart=cart;
    }


    //this.cart.onClickOpenCart();

    //document.getElementById("numItemsParagraph").addEventListener("click",this.onClickOpenCart,false);


    matchProductToSku(sku){
      let allTheProducts = this.app.allProducts.productList;
      console.log(allTheProducts);
      console.log("HEY THERE WE GO");
      console.log(this.cart.ss);
      // for (let z=0; z<this.cart.ss.length; z++){
      //   this.cart.ss[z].sku
      // }
      //
      //
      // for (let y=0; y<allTheProducts.length; y++){
      //         if (sku == allTheProducts[y].sku){
      //           let itemSku = allTheProducts[y].sku;
      //           let itemImage = allTheProducts[y].image;
      //           let itemPrice = allTheProducts[y].salePrice;
      //           let itemName = allTheProducts[y].name;
      //           let itemManufacturer = allTheProducts[y].manufacturer;
      //           this.createQV(itemSku, itemImage, itemPrice, itemName, itemManufacturer);
      //         }
      // };
    }


    }

// createCartCountIcon(){
//   let newCartIcon = document.createElement("p");
//   newCartIcon.setAttribute("Id","numItemsParagraph");
//   newCartIcon.style.border = "1px solid black";
//   //document.cartviewdiv.appendChild(newCartIcon);
//   newCartIcon.addEventListener("click",this.onClickLoadCartView,false);
//   document.getElementById("cartviewdiv").appendChild(newCartIcon);
// onClickLoadCartView(){
//
// }
// //on clicking on shopping cart icon, show shopping cart
// }
