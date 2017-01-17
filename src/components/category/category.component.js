class CategoryController {
    constructor () {
        this.isHiddenAppNav = true;

        this.dataGoods = [];

        this.bannerData = {
            title: '',
            img: 'img/banner.png',
            href: ''
        };

        this.dataPagination = {
            goodsPerPage: 8,
            currPage: 0,
            pageLimit: 10,
            goodsCount: 0,
            get pageCount () {
                //console.log(Math.ceil(this.goodsCount / this.goodsPerPage));
                return Math.ceil(this.goodsCount / this.goodsPerPage);
            }
        };
    }
}

const categoryComponent = {
    template: require('./category-tmpl.html'),
    controller: CategoryController
};

export default categoryComponent;