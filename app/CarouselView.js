import Carousel from './Carousel';
//import Flickity from './Flickity';
export default class CarouselView{
    constructor(carousel){
      this.carousel = carousel;
    }
    //app passes the products from bbService to carouselView:
    //calls function to create carousel, passes products into function:
    init(allProducts){
      this.initFlickityElements(allProducts);
    }
    initFlickityElements(products){
        let documentFragment = new DocumentFragment();
        //creates the outer div of the carousel, carousel cells will be contained in this div:
        let outerDiv = document.createElement("div");
        outerDiv.setAttribute("class","main-carousel ");

        //loop through products and create a carousel cell div for each cell:
        for (let i=0; i<products.length; i++){
            let eachCell = document.createElement("div");
            eachCell.setAttribute("class","carousel-cell");
            //calls function to create content for each product's cell div:
            this.createCellContent(eachCell,products[i]);
            //appends completed product cell div to the main-carousel outer div:
            outerDiv.appendChild(eachCell);
        }
        //incorporates flickity to create a Carousel:
        this.createCarousel(outerDiv);
    }
    createCellContent(cellContainer,currentProduct){
        let cellBox = this.createInnerCellBox();
        //calls function to render name of current product:
        let titleName = this.createTitleName(currentProduct);
        //calls function to render manufacturer of current product:
        let titleManuf = this.createManuf(currentProduct);
        //calls function to render sale price of current product:
        let titlePrice = this.createProductPrice(currentProduct);
        //appends manufacturer to cell box div (div of content within carousel cell):
        // cellBox.appendChild(titleManuf);
        cellBox.appendChild(document.createElement("br"));
        cellBox.appendChild(titleName);
        cellBox.appendChild(document.createElement("br"));
        let productImage = this.createProductImage(currentProduct);
        cellBox.appendChild(productImage);
        cellBox.appendChild(document.createElement("br"));
        cellBox.appendChild(titlePrice);
        cellBox.appendChild(document.createElement("br"));
        let newCartButton = this.createCartButton(currentProduct);
        cellBox.appendChild(newCartButton);
        cellContainer.appendChild(cellBox);
        let newQVButton = this.quickViewButton(currentProduct);
        cellBox.appendChild(newQVButton);
        //appends the cellBox of content to the product's carousel cell:
        cellContainer.appendChild(cellBox);
    }
    createProductImage(currentProduct){
        //creates a new img element with current product's image url as src:
        let newProductImage = document.createElement("img");
        newProductImage.src = `${currentProduct["image"]}`;
        newProductImage.setAttribute("height","200px");
        newProductImage.setAttribute("width","200px");
        newProductImage.setAttribute("alt",`${currentProduct["name"]}`);
        return newProductImage;
    }
    createInnerCellBox(){
        //creates cellBox div to hold rendered content within each carousel-cell:
        let newCellBox = document.createElement("div");
        newCellBox.style.backgroundColor = "#FFFFFF";
        return newCellBox;
    }
    createProductPrice(currentProduct){
        let newPrice= document.createElement("h3");
        newPrice.style.color = "#0000ff";
        let newPriceContent = document.createTextNode(`$ ${currentProduct["salePrice"]}`);
        newPrice.appendChild(newPriceContent);
        return newPrice;
    }
    createTitleName(currentProduct){
        let newName = document.createElement("p");
        newName.style.color = "#0000ff";
        newName.setAttribute("class", "width-80 margin-auto");
        let newNameContent = document.createTextNode(`${currentProduct["name"]}`);
        newName.appendChild(newNameContent);
        return newName;
    }
    createManuf(currentProduct){
        let newManuf = document.createElement("h3");
        newManuf.style.color = "#0000ff";
        let newManufContent = document.createTextNode(`${currentProduct["manufacturer"]}`);
        newManuf.appendChild(newManufContent);
        return newManuf;
    }
    createCartButton(currentProduct){
        //creates button element.  Button adds current item to cart:
        let newCartButton = document.createElement("button");
        newCartButton.setAttribute("class","cart-button");
        newCartButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("type","button");
        newCartButton.setAttribute("Id",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("value",`${currentProduct["sku"]}`);
        newCartButton.appendChild(document.createTextNode("Add To Cart"));
        //bind this button, sends button to the event handling function
        //button has data-sku holding the sku of the current product:
        newCartButton.addEventListener("click",this.onClickAddToCart.bind(this),false);
        return newCartButton;
    }
    quickViewButton(currentProduct){
        //button opens current product's quick view:
        let newQVButton = document.createElement("button");
        newQVButton.setAttribute("class","qv-button");

        newQVButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
        newQVButton.setAttribute("type","button");
        newQVButton.setAttribute("Id",`${currentProduct["sku"]}`);
        newQVButton.setAttribute("value",`${currentProduct["sku"]}`);
        newQVButton.appendChild(document.createTextNode("Open QuickView"));
        //bind this button, sends button to the event handling function
        //button has data-sku holding the sku of the current product:
        newQVButton.addEventListener("click",this.onClickOpenQV.bind(this),false);
        return newQVButton;
    }
    onClickAddToCart(e){
        //gets the binded button's data-sku attribute sku value:
        let currentSku = e.target.getAttribute("data-sku");
        //passes sku value to carousel:
        this.carousel.passSkuToCart(currentSku);
    }
    onClickOpenQV(e){
      //gets the binded button's data-sku attribute sku value:
      let currentSku = e.target.getAttribute("data-sku");
      //passes sku value to carousel:
      this.carousel.passSkuToQV(currentSku);
    }
    //next step: incorporate Flickity to render functioning carousel
    createCarousel(node){
      document.getElementById("carouselSection").appendChild(node);


      var elem = document.querySelector('.main-carousel');
      var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        contain: true
      });
    }
}
