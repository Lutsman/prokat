class MainPageController {
    constructor (goodsData) {
        this.rentData = goodsData.rentData;
        this.sellData = goodsData.sellData;
    }
}

const mainPageComponent = {
    template: require('./main-page-tmpl.html'),
    controller: MainPageController
};

export default mainPageComponent;