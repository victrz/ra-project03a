//GETTING PRODUCTS FROM BEST BUY API
//
//
//

$(document).ready(function(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', "https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=SXkiDh8lcFEAqyG6rDmJjlH4&sort=description.asc&show=addToCartUrl,description,image,name,regularPrice,salePrice,sku,url,manufacturer&format=json", true);
            xhr.send();

            xhr.addEventListener("readystatechange", processRequest, false);

            function processRequest(e) {
              if (xhr.readyState == 4 && xhr.status == 200) {
                  var result = JSON.parse(xhr.responseText);
                    loop_products(result.products);
                    console.log(result);
              }
            }
});
function newProduct(description, name, image, salePrice, manufacturer, url, sku){
          var productClone = $("#clone").clone();
          console.log($("hellooo"));
          $(productClone).find("h1").text(name);
          $(productClone).find("h3").text(manufacturer);
          $(productClone).find("h2").text("$"+salePrice);
          $(productClone).find("img").attr({"src": image, width: 300});
          $(productClone).find("a").attr("href", url);
          console.log($("#appendHere"));
          $("#appendHere").append($(productClone).html());
          //.flickity-slider
}
function loop_products(products){
  x=0;
  for (var i=0; i < products.length; i++){
    newProduct(products[i].description, products[i].name, products[i].image, products[i].salePrice, products[i].manufacturer, products[i].url, products[i].sku);
    x++;
    console.log(x);
    console.log(products[i].name)
  }
}

// class Product(description, name, image, salePrice, manufacturer, url, sku){
//   this.prodDescription: description;
//   this.prodSKU: sku;
//   this.prodName: name;
//   this.prodImage: image;
//   this.prodSalePrice: salePrice;
//   this.prodManufacturer: manufacturer;
//   this.prodURL: url;
// }
//
// neo = new Person("Neo",25,1.81)
