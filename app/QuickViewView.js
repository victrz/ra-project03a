import App from './App';
export default class QuickViewView{
  constructor(app){
    this.app=app;
  }
  matchProductToSku(sku){
    let allTheProducts = this.app.allProducts.productList;
    //loop through all of the products and find a product whose SKU matching the
    //SKU from the button that was clicked in carousel view:
    for (let y=0; y<allTheProducts.length; y++){
            if (sku == allTheProducts[y].sku){
              let itemSku = allTheProducts[y].sku;
              let itemImage = allTheProducts[y].image;
              let itemPrice = allTheProducts[y].salePrice;
              let itemName = allTheProducts[y].name;
              let itemManufacturer = allTheProducts[y].manufacturer;

              this.createQV(itemSku, itemImage, itemPrice, itemName, itemManufacturer);
            }
    };
  }
  //renders quick view  for the product:
  createQV(sku, image, price, name, manufacturer){
      document.getElementById("load-qv").style.display = "block";
      document.getElementById("quick-view").style.display= "block";
      document.getElementById("close-qv").addEventListener("click",this.onClickCloseQV,false);
      let imageQV = document.getElementById("image-qv").setAttribute("src", image);
      let priceQV = document.getElementById("price-qv").appendChild(document.createTextNode(price));
      let nameQV = document.getElementById("name-qv").appendChild(document.createTextNode(name));
      let newCartButton = this.createCartButton(sku);
      document.getElementById("button-qv").appendChild(newCartButton);
  }
  createCartButton(sku){
      let newCartButton = document.createElement("button");
      newCartButton.setAttribute("data-sku",sku);
      newCartButton.setAttribute("type","button");
      newCartButton.setAttribute("class","cart-button");
      newCartButton.appendChild(document.createTextNode("Add To Cart"));
      //binds the button so the data-sku SKU can be used to add SKU to cart:
      newCartButton.addEventListener("click",this.onClickAddToCart.bind(this),false);
      return newCartButton;
  }
    onClickCloseQV(e){
      document.getElementById("load-qv").style.display = "none";
      document.getElementById("image-qv").innerHTML="";
      document.getElementById("price-qv").innerHTML="$";
      document.getElementById("name-qv").innerHTML="";
      document.getElementById("button-qv").innerHTML="";
      document.getElementById("quick-view").style.display= "none";

    }
    onClickAddToCart(e){
        let currentSku = e.target.getAttribute("data-sku");
        //passes the SKU to cart to add item to cart:
        this.app.cart.addItemToCart(currentSku, 1);
    }
}
