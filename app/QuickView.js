import QuickViewView from './QuickViewView';
export default class QuickView{
  constructor(quickViewView){
    this.quickViewView = quickViewView;
  }
  receiveSku(sku){
    //receive SKU from carousel and passes it to quickViewView:
    this.quickViewView.matchProductToSku(sku);
  }
}
