//CarouselView
//window.addEventListener("load", fn)
export default class CarouselView {
  //for testing you might want to remove new App() incase the item is empty but expecting something
    constructor(app = new App()){
      this.app = app;
      //this.AllProducts = app.AllProducts.productList;
      this.currentCart = app.cart;
      //this.initFlickityElements();
      console.log("from carouselview.js")
      console.log(this.app)
    }
  }
//loop through this.app.productList[i]
// initFlickityElements(){
//   let documentFragment = new documentFragment();
//   //start div set attribute class carousel-main
//   //loop through # of products
//   //  let new cell = document.createElement("div");
//   newCell.setAttribute("class", "carousel-cell");
//   this.createCellContent(newCell, this.allProducts[i]);
//
//   startDiv.appendChild(newCell);
// }
//
//this.createCarousel(startDiv)
// createCellContent(cellContainer, currentProduct){
//
// }
//createproductimage
//create title
//createbutton (currentProduct){
// newButton = document.createElement("button");
// newButton.setAttribute("data-sku", `${currentProduct["sku"]}`);
//   ("type", "button")
//   value, sku
//   appendChild(document.createTextNode("add to cart"));
//   addEventListener("click". this.onClickAddToCart.bind(this), false);
//   return newButton;
// }
//
// createCarousel(node){
//   window.addEventListener("load", (e) => {
//     document.getElementById("body").appendChild(node);
//
//     let elem = document.querySelector('.main-carousel');
//     let f = new Flickity (elem, {
//       //options
//       cellAlign: 'left',
//       contain: true,
//     })
//   })
// }
//
//onClickAddToCart(e){
// let currentSku = e.target.getAttribute("data-sku");
// this.currentCart.addItemToCart(currentSku);
// }
//
// }
//populate carousel with products
//this loop takes item in sessionstorage and matches it with product then renders:
// if (window.sessionStorage){
//   for (x=0; x<sessionStorage[i].length; x++){
//
//     var currentSku = sessionStorage.key(i);
//
//       for (y=0; y<productList.length; y++){
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
//       }
//
//     }
// }
//window.addEventListener("load", fn
