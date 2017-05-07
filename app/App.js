
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
    constructor()
    {
        //this.product = new Product();
        this.cartView = new CartView();
        this.cart = new Cart(this.cartView, this);
        this.quickViewView = new QuickViewView(this);
        this.quickView = new QuickView(this.quickViewView);
        this.carousel = new Carousel(this.cart, this.quickView)
        this.carouselView = new CarouselView(this.carousel);
        this.bbService = new BestBuyService();
        this.allProducts = null;


      }

    init(){
      console.log("###########");
      console.log("app js init");
      this.bbService.init(this);
    }

    iHazData(theData){
      console.log("++++++++++++++++++++++++++++");
      console.log("app js ihazdata");
      this.allProducts = theData;
      console.log(this.allProducts.productList);
      this.carouselView.init(this.allProducts.productList);
    }

}
