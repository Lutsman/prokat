class MainPageController {
    constructor (goodsData) {
        this.rentData = goodsData.rentData;
        this.sellData = goodsData.sellData;
        this.isHiddenNav = false;

        console.log(this.rentData);
    }
}

const mainPageComponent = {
    template: require('./main-page-tmpl.html'),
    controller: MainPageController
};

export default mainPageComponent;