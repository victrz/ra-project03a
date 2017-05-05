
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
        // this.productList = new AllProducts();
        //this.product = new Product();
        this.carouselView = new CarouselView();
        this.bbService = new BestBuyService();
        this.allProducts = null;

      }

    init(){
      console.log("###########");
      this.bbService.init(this);
    }

    iHazData(theData){
      console.log("++++++++++++++++++++++++++++");
      console.log(theData);
      console.log("I got called.");
      console.log(theData.productList[1]);
      this.allProducts = theData;
      console.log(this.allProducts.productList);
      this.carouselView.init(this.allProducts.productList);
    }

}
