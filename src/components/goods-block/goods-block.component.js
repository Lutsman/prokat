class GoodsBlockController {
    constructor () {
        //this.goodsData = goodsData.rentData;
        this.activeGroup = this.getActiveGroup();
    }

    getActiveGroup ()  {
        console.log(this.data);
        let arr = this.data.goodsArr;

        for (let i = 0; i < arr.length; i++) {
            if (!arr[i].active) continue;

            return arr[i];
        }

        return arr[0];
    }
}

const goodsBlockComponent = {
    bindings: {
        data: '<'
    },
    template: require('./goods-block-tmpl.html'),
    controller: GoodsBlockController
};

export default goodsBlockComponent;