class CategoryController {
    constructor () {
        this.isHiddenAppNav = true;

        this.dataGoods = [];
        /*this.tracker = {
         name: 'price',
         reverse: false
         };*/

        this.dataPagination = {
            goodsPerPage: 8,
            currPage: 0,
            pageLimit: 10,
            goodsCount: 0,
            get pageCount () {
                console.log(Math.ceil(this.goodsCount / this.goodsPerPage));
                return Math.ceil(this.goodsCount / this.goodsPerPage);
            }
            /*get goodsCount() {
                //let result = Object.keys(self.dataGoodsTemp).length;
                let result = self.minMaxFilter(self.dataGoods, self.min, self.max).length
                //console.log(result);
                //self.dataSearch.currGoodsCount;
                this.tempCount = result;
                this.pageCount = Math.ceil(this.tempCount / this.goodsPerPage);


                return result;
            }*/
            /*get pageCount() {
                return Math.ceil(this.goodsCount / this.goodsPerPage);
            }*/
        };
    }
}

const categoryComponent = {
    template: require('./category-tmpl.html'),
    controller: CategoryController
};

export default categoryComponent;