/**
 * Created by Edward_J_Apostol on 2017-05-02.
 */
import Product from "./Product";
import AllProducts from "./AllProducts";

export default class BestBuyService {

  constructor(){
      this.allProducts = new AllProducts();
      this.app = {};
      this.xhr = new XMLHttpRequest();
      this.xhr.addEventListener("readystatechange", this.processRequest.bind(this), false);
      this.xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=description.asc&show=addToCartUrl,description,image,name,regularPrice,salePrice,sku,url,manufacturer&format=json", true);
      this.xhr.send();
  }

  init(app){
      this.app = app;
      console.log(app);
  }


  processRequest(e) {
    if (e.target.readyState == 4 && e.target.status == 200){
      console.log("-------------------------------");
      console.log(this.app);

      var result = JSON.parse(e.target.responseText);
      this.app.allProducts = this.allProducts = this.generateData(result.products);
      this.app.iHazData(this.app.allProducts);
    }
  }


    generateData(products){
      let temp = new AllProducts();
      for (var i=0; i < products.length; i++){
        let newProd = new Product();
        newProd.name = products[i].name;
        newProd.description = products[i].description;
        newProd.image = products[i].image;
        newProd.salePrice = products[i].salePrice;
        newProd.manufacturer = products[i].manufacturer;
        newProd.sku = products[i].sku;
        temp.productList.push(newProd);
      }
      return temp;
    }
}
