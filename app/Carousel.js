import CarouselView from './CarouselView';
export default class Carousel{
  constructor(cart, quickView){
    this.cart = cart;
    this.quickView = quickView;
  }
  passSkuToCart(sku){
  this.cart.addItemToCart(sku, 1);
  }
  passSkuToQV(sku){
  this.quickView.receiveSku(sku);
  }
}
//import Products from './AllProducts';

//addItemToCart(sku){
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

// click quickview
// //Carousel
