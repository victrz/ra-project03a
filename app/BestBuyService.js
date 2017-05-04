/**
 * Created by Edward_J_Apostol on 2017-05-02.
 */
import Product from "./Product";
import AllProducts from "./AllProducts";

export default class BestBuyService {
      constructor(app = new App()){
          this.app = app;
          this.xhr = new XMLHttpRequest();
          this.xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=description.asc&show=addToCartUrl,description,image,name,regularPrice,salePrice,sku,url,manufacturer&format=json", true);
          this.xhr.send();

          this.xhr.addEventListener("readystatechange", this.processRequest.bind(this), false);
          this.productList = new AllProducts();
      }

      processRequest(e) {
        if (e.target.readyState == 4 && e.target.status == 200){
          var result = JSON.parse(e.target.responseText);
          this.generateData(result.products);
          //not sure about line above
          console.log("processRequest running");
          console.log(result);
        }
      }


        generateData(products){
          for (var i=0; i < products.length; i++){
            let newProd = new Product();
            newProd.name = products[i].name;
            newProd.description = products[i].description;
            newProd.image = products[i].image;
            newProd.salePrice = products[i].salePrice;
            newProd.manufacturer = products[i].manufacturer;
            newProd.sku = products[i].sku;
            this.productList.productList.push(newProd);
            console.log("generateData running");
            console.log(products[i].name);
            console.log(this.productList);
          }
          console.log(this.app.productList)
          debugger;
          this.app.productList = this.productList.productList;
        }
}
