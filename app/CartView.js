//Cart view
//createElement
//appendChild
export default class CartView {
    constructor(app = new App()){
      console.log("from cartview.js")
    }

    updateLittleCartIcon(qty){
      document.getElementById("numItemsParagraph").innerHTML = qty;
    }
}
