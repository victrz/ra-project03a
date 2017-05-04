
export default class AllProducts{
    constructor(){
      console.log("in AllProduct.js")
        this.productList = []; // store a native array of products. no vector support in native ES6.
    }

    // helper getter methods


    get productCount(){
        return this.productList.length;
    }


}
