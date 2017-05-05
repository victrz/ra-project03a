
//import Flickity from './flickity.pkgd';
import AllProducts from './AllProducts';
import App from './App';

export default class CarouselView {
    constructor(){
    }

    init(allProducts){
    this.initFlickityElements(allProducts);
    }
    initFlickityElements(x){
        console.log(x);
        let documentFragment = new DocumentFragment();
        let outerDiv = document.createElement("div");
        outerDiv.setAttribute("class","main-carousel");
        for (let i=0; i<x.length; i++){
            let eachCell = document.createElement("div");
            eachCell.setAttribute("class","carousel-cell");
            // create cell content
            this.createCellContent(eachCell,x[i]);
            outerDiv.appendChild(eachCell);
        }
        this.createCarousel(outerDiv);
    }

    createCellContent(cellContainer,currentProduct){

        let cellBox = this.createInnerCellBox();
        let titleParagraph = this.createTitleParagraph(currentProduct);
        let titleManuf = this.createManuf(currentProduct);
        cellBox.appendChild(titleManuf);
        cellBox.appendChild(document.createElement("br"));
        cellBox.appendChild(titleParagraph);
        cellBox.appendChild(document.createElement("br"));
        let productImage = this.createProductImage(currentProduct);
        cellBox.appendChild(productImage);
        cellBox.appendChild(document.createElement("br"));
        let productPrice = this.createProductPrice(currentProduct);
        cellBox.appendChild(productPrice);
        cellBox.appendChild(document.createElement("br"));
        let newCartButton = this.createCartButton(currentProduct);
        cellBox.appendChild(newCartButton);
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
        let newPriceContent = document.createTextNode(`$${currentProduct["SalePrice"]}`);
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
        newCartButton.setAttribute("data-sku",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("type","button");
        newCartButton.setAttribute("Id",`${currentProduct["sku"]}`);
        newCartButton.setAttribute("value",`${currentProduct["sku"]}`);
        newCartButton.appendChild(document.createTextNode("Open QuickView"));
        newCartButton.addEventListener("click",this.onClickOpenQV.bind(this),false);
        return newQVButton;
        //function onClickOpenQV(e){} in QuickView.js
    }

    onClickAddToCart(e){
        //console.log(e.target.getAttribute("data-sku"));
        let currentSku = e.target.getAttribute("data-sku");
        //console.log(this);
        //console.log(this.currentCart);
        this.currentCart.addItemToCart(currentSku);
        // move this function out into  class-level - done
        // get the target,
        // use setAttribute to read data-sku
        // pass it over to ShoppingCart.js
    }

    createCarousel(node){
        // console.log(this.flickityElements);
        //window.addEventListener("load",(e) => {
            //console.log("page loaded...processing");
            console.log(node);
            document.getElementById("carouselSection").appendChild(node);
            let elem = document.querySelector('.main-carousel');
            //let f = new Flickity( elem, {
                // options
              //  cellAlign: 'left',
              //  contain: true
            //});
        //},false);
    }

}
