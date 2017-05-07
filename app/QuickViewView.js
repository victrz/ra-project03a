import App from './App';
export default class QuickViewView{
  constructor(app){
    this.app=app;
    //let allTheProducts = this.app.iHazData.allProducts.productList;
  }
  matchProductToSku(sku){
    let allTheProducts = this.app.allProducts.productList;
    console.log(allTheProducts);
    console.log("HEY THERE WE GO");
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
  createQV(sku, image, price, name, manufacturer){
      document.getElementById("load-qv").style.display = "block";
      document.getElementById("quick-view").style.display= "block";
      let closeQV = document.getElementById("close-qv").appendChild(document.createTextNode("close window"));
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
    newCartButton.setAttribute("class","green-button");
    newCartButton.setAttribute("class","text-white");
    newCartButton.appendChild(document.createTextNode("Add To Cart"));
    newCartButton.addEventListener("click",this.onClickAddToCart.bind(this),false);
    return newCartButton;
}
  onClickCloseQV(e){
    document.getElementById("load-qv").style.display = "none";
    document.getElementById("quick-view").style.display= "none";
  }
  onClickAddToCart(e){
      let currentSku = e.target.getAttribute("data-sku");
      this.app.cart.addItemToCart(currentSku, 1);
  }
  //sku, image, price, name, manufacturer
              // let anchor = document.createElement("a");
              // let img = document.createElement("img");
              // let button =
              // button.setAttribute("data-", currentSku);
              // anchor.setAttribute("href", movieList[i] );
              // img.setAttribute("src", thumbList[i] );
              // img.setAttribute("alt", altList[i] );
              // anchor.appendChild(img);
              // figCaptionTag.appendChild(anchor);
}

//   let currentSku=this.getCurrentSku;
// }
// let currentSku = this.quickView.receiveSku(currentSku);
// console.log(currentSku);


//   openQV(sku){
//   //renderQV\
//   let currentSku = sku;
//   this.findMatchingProduct(sku);
//   console.log("QV OPEN");
//   console.log(sku);
// }
//
//     createQV(){
//         let qV = document.createDocumentFragment();
//         // create the elements
//         this.createImage(qV);
//         this.createPrice(qV);
//         this.createName(qV);
//         this.createDescription(qV);
//         this.createCartButton(qV);
//         this.createClose(qV);
//         this.createManufacturer(qv);
//     }
// }
//
// findMatchingProduct(sku);
// for (y=0; y<productList.length; y++){
//         if (currentSku == productList[j].sku){
//           //render elements
//           let anchor = document.createElement("a");
//           let img = document.createElement("img");
//           let button =
//           button.setAttribute("data-", currentSku);
//           anchor.setAttribute("href", movieList[i] );
//           img.setAttribute("src", thumbList[i] );
//           img.setAttribute("alt", altList[i] );
//           anchor.appendChild(img);
//           figCaptionTag.appendChild(anchor);
//         }
    // let productInfo = document.createElement("div");
    // let productInfoContent = document.createTextNode(`${sku}`);
    // productInfo.appendChild(productInfoContent);
    //
    // productInfo.setAttribute()
    // newCartButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
    // newCartButton.setAttribute("type","button");
    // newCartButton.setAttribute("Id",`${currentProduct["sku"]}`);
    // newCartButton.setAttribute("value",`${currentProduct["sku"]}`);
    // newCartButton.appendChild(document.createTextNode("Add To Cart"));


  //   newCartIcon.style.border = "1px solid black";
  //   //document.cartviewdiv.appendChild(newCartIcon);
  //   newCartIcon.addEventListener("click",this.onClickLoadCartView,false);
  //   document.getElementById("cartviewdiv").appendChild(newCartIcon);

  //this.quickView.receiveSku(sku);
