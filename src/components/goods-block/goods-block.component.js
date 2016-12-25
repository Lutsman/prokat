class GoodsBlockController {
    constructor () {
        //this.goodsData = goodsData.rentData;
        this.activeGroup = this.getActiveGroup();
    }

    getActiveGroup ()  {
        let arr = this.goodsData.goodsArr;

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].active) continue;

            return arr[i];
        }

        return arr[0];
    }
    getCurrency (currency) {
        return String.fromCharCode(currency);
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