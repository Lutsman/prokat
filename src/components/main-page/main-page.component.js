class MainPageController {
    constructor (goodsData) {
        this.rentData = goodsData.rentData;
        this.sellData = goodsData.sellData;
        this.isHiddenNav = false;
    }
}

const mainPageComponent = {
    template: require('./main-page-tmpl.html'),
    controller: MainPageController
};

export default mainPageComponent;