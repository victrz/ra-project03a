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
