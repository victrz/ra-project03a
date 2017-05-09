import CarouselView from './CarouselView';
export default class Carousel{
  constructor(cart, quickView){
    this.cart = cart;
    this.quickView = quickView;
  }
  //pass sku from carouselView to cart:
  passSkuToCart(sku){
  this.cart.addItemToCart(sku, 1);
  }
  //pass sku from carouselView to QuickView:
  passSkuToQV(sku){
  this.quickView.receiveSku(sku);
  }
}
