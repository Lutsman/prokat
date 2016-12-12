class GoodsBlockController {
    constructor () {
        //this.goodsData = goodsData.rentData;
        this.activeGroup = this.goodsData.goodsArr[0];
    }
}

const goodsBlockComponent = {
    bindings: {
        goodsData: '<'
    },
    template: require('./goods-block-tmpl.html'),
    controller: GoodsBlockController
};

export default goodsBlockComponent;