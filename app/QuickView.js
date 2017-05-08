import QuickViewView from './QuickViewView';
export default class QuickView{
  constructor(quickViewView){
    this.quickViewView = quickViewView;
  }
  receiveSku(sku){
    this.quickViewView.matchProductToSku(sku);
  }
}
