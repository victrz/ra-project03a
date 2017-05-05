export default class QuickView{
constructor(){
  console.log("from quickview.js")
}
onClickOpenQV(e){
  let currentSku = e.target.getAttribute("data-sku");
  //loop to find corresponding item to currentSku, render quickview popup 
}
}
//showView(sku) function
//quickview button
//<button data-sku="sku">
//find the product based on the sku
  // -loop through products to find matching product based on sku
  // -render product in pop-up
  //     -creating elements
  //     -add to cart button
  //     -img tag
  //     -description
  //     -price
  //     -close popup
  // -show the pop up


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
