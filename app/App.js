
import AllProducts from './AllProducts';
import BestBuyService from './BestBuyService';
import Carousel from './Carousel';
import CarouselView from './CarouselView';
import Cart from './Cart';
import CartView from './CartView';
import Product from './Product';
import QuickView from './QuickView';


export default class App {
    constructor()
    {
        console.log("from app.js");
        this.productList = new AllProducts();
        this.product = new Product();
        this.bbService = new BestBuyService(this);
        //console.log(this.productList)
        this.cart = new Cart(this);
        this.cartView = new CartView(this);
        this.carousel = new Carousel();
        this.carouselView = new CarouselView(this);
        this.quickView = new QuickView();
        console.log(this.productList);
        console.log("Hello World from the App");
        debugger;
      //  this.initApp();
    }
//
// initApp(){
//   this.bbService.getProductData(this);
// populate carousel function (this.AllProducts)
// }

}
