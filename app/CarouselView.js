//import AllProducts from './AllProducts';
//import Flickity from './flickity.pkgd';
import Carousel from './Carousel';
//import Flickity from './Flickity';
export default class CarouselView{
    constructor(carousel){
      this.carousel = carousel;
    }
    init(allProducts){
    this.initFlickityElements(allProducts);
    }
    initFlickityElements(x){
        let documentFragment = new DocumentFragment();
        let outerDiv = document.createElement("div");
        outerDiv.setAttribute("class","main-carousel");
        //outerDiv.setAttribute("data-flickity","{ "groupCells": true }");
        //options
        //cellAlign: "center;
        //containt: true;
        //

        for (let i=0; i<x.length; i++){
            let eachCell = document.createElement("div");
            eachCell.setAttribute("class","carousel-cell");
            this.createCellContent(eachCell,x[i]);
            outerDiv.appendChild(eachCell);
        }
        this.createCarousel(outerDiv);
    }
    createCellContent(cellContainer,currentProduct){
        let cellBox = this.createInnerCellBox();
        let titleParagraph = this.createTitleParagraph(currentProduct);
        let titleManuf = this.createManuf(currentProduct);
        let titlePrice = this.createProductPrice(currentProduct);
        cellBox.appendChild(titleManuf);
        cellBox.appendChild(document.createElement("br"));
        cellBox.appendChild(titleParagraph);
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
        cellContainer.appendChild(cellBox);
    }
    createProductImage(currentProduct){
        let newProductImage = document.createElement("img");
        newProductImage.src = `${currentProduct["image"]}`;
        newProductImage.setAttribute("height","200px");
        newProductImage.setAttribute("width","200px");
        newProductImage.setAttribute("alt",`${currentProduct["name"]}`);
        return newProductImage;
    }
    createInnerCellBox(){
        let newCellBox = document.createElement("div");
        newCellBox.style.backgroundColor = "#FFFFFF";
        // newCellBox.style.height = "";
        // newCellBox.style.width = "";
        // newCellBox.style.border = "1px solid black";
        // newCellBox.style.paddingBottom = "70px";
        return newCellBox;
    }
    createProductPrice(currentProduct){
        let newPrice= document.createElement("h3");
        newPrice.style.color = "#0000ff";
        let newPriceContent = document.createTextNode(`$ ${currentProduct["salePrice"]}`);
        newPrice.appendChild(newPriceContent);
        return newPrice;
    }
    createTitleParagraph(currentProduct){
        let newTitle = document.createElement("p");
        newTitle.style.color = "#0000ff";
        let newTextContent = document.createTextNode(`${currentProduct["name"]}`);
        newTitle.appendChild(newTextContent);
        return newTitle;
    }
    createManuf(currentProduct){
        let newManuf = document.createElement("h2");
        newManuf.style.color = "#0000ff";
        let newManufContent = document.createTextNode(`${currentProduct["manufacturer"]}`);
        newManuf.appendChild(newManufContent);
        return newManuf;
    }
    createCartButton(currentProduct){
        let newCartButton = document.createElement("button");
        newCartButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("type","button");
        newCartButton.setAttribute("Id",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("value",`${currentProduct["sku"]}`);
        newCartButton.appendChild(document.createTextNode("Add To Cart"));
        newCartButton.addEventListener("click",this.onClickAddToCart.bind(this),false);
        return newCartButton;
    }
    quickViewButton(currentProduct){
        let newQVButton = document.createElement("button");
        newQVButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
        newQVButton.setAttribute("type","button");
        newQVButton.setAttribute("Id",`${currentProduct["sku"]}`);
        newQVButton.setAttribute("value",`${currentProduct["sku"]}`);
        newQVButton.appendChild(document.createTextNode("Open QuickView"));
        newQVButton.addEventListener("click",this.onClickOpenQV.bind(this),false);
        return newQVButton;
    }
    onClickAddToCart(e){
        let currentSku = e.target.getAttribute("data-sku");
        this.carousel.passSkuToCart(currentSku);
    }
    onClickOpenQV(e){
      let currentSku = e.target.getAttribute("data-sku");
      this.carousel.passSkuToQV(currentSku);
    }
    createCarousel(node){
        // console.log(this.flickityElements);
      //  window.addEventListener("load",(e) => {
            //console.log("page loaded...processing");
            document.getElementById("carouselSection").appendChild(node);
        //     let elem = document.querySelector('.main-carousel');
        //     let f = new Flickity( elem, {
        //         options
        //        cellAlign: 'left',
        //        contain: true
        //     });
        // },false);
    }

}
