class GoodsCard2Controller {
    constructor() {
        //console.log('goods card 2 component');
        //console.log(this.data);
    }
}

const goodsCard2Module = {
    bindings: {
        data: '<'
    },
    restrict: 'A',
    template: require('./goods-card-2-tmpl.html'),
    controller: GoodsCard2Controller
};

export default goodsCard2Module;