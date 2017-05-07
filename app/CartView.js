
import AllProducts from './AllProducts';
export default class CartView {
    constructor(allProducts){
      this.allProducts = allProducts;
    }
    // holdProductsHere(products){
    //   let allTheProducts = products;
    //   console.log(allTheProducts);
    //   console.log("HOLDING PRODUCTS");
    //   //return allTheProducts;
    //   //this function is holding the product list, passed from App
    // }

    onClickOpenCart(e){
      //need to get the product list in here to run loops
      console.log("MAKING A CART");
      console.log(this);
      let products =this.this;
      document.getElementById("load-cart").style.display = "block";
      document.getElementById("your-cart").style.display= "block";
      // for (let z=0; z<ss.length; z++){
      //   for (let y=0; y<allTheProducts.length; y++){
      //     if (ss.key(z) == products[y].sku){
      //     let itemSku = allTheProducts[y].sku;
      //     let itemImage = allTheProducts[y].image;
      //     let itemPrice = allTheProducts[y].salePrice;
      //     let itemName = allTheProducts[y].name;
      //     let itemManufacturer = allTheProducts[y].manufacturer;
      //     let itemQty = ss.getItem(itemSku);
      //     this.createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, itemQty);
      //     }
      //   }
      // }
    }
    createItem(itemSku, itemImage, itemPrice, itemName, itemManufacturer, itemQty){
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
