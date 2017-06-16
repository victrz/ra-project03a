import AllProducts from './AllProducts';
import BestBuyService from './BestBuyService';
import Carousel from './Carousel';
import CarouselView from './CarouselView';
import CartView from './CartView';
import Cart from './Cart';
import Product from './Product';
import QuickViewView from './QuickViewView';
import QuickView from './QuickView';

export default class App {
  constructor(){
      // this.allProducts = null;
      this.allProducts = new AllProducts();
      this.cartView = new CartView(this.allProducts, this);
      this.cart = new Cart(this);
      this.quickViewView = new QuickViewView(this);
      this.quickView = new QuickView(this.quickViewView);
      this.carousel = new Carousel(this.cart, this.quickView)
      this.carouselView = new CarouselView(this.carousel);
      this.bbService = new BestBuyService();
    }
    init(){
      this.bbService.init(this);
      console.log("app init");
    }
    iHaveData(theData){
      this.allProducts = theData;
      this.carouselView.init(this.allProducts.productList);
      this.eventListener(this.allProducts, this.cartView);

    }
    eventListener(products, cartView){
      console.log("app eventListener");
      console.log(products);
      console.log("here");
      console.log(cartView);
      let passToCartView = {products: products.productList, cv: cartView};
      document.getElementById("shopping-basket").addEventListener("click", cartView.onClickOpenCart.bind(passToCartView), false);


    }

}
