import AllProducts from './AllProducts';
import BestBuyService from './BestBuyService';
import Carousel from './Carousel';
import CarouselView from './CarouselView';
import CartView from './CartView';
import Cart from './Cart';
import Product from './Product';
import QuickViewView from './QuickViewView';
import QuickView from './QuickView';
import Checkout from './Checkout';


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
      this.checkout = new Checkout();
    }
    init(){
      this.bbService.init(this);
    }
    iHaveData(theData){
      this.allProducts = theData;
      this.carouselView.init(this.allProducts.productList);
      this.cartCounter(this.allProducts, this.cartView,this);

    }
    cartCounter(products, cartView, app){
      //pass this object to cartView by binding it to the event handling function:
      let passToCartView = {products: products.productList, cv: cartView, app: app};
      //on clicking the shopping cart icon div, open cart view:
      document.getElementById("shopping-basket").addEventListener("click", cartView.onClickOpenCart.bind(passToCartView), false);


    }

}
