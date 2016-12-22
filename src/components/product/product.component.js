class ProductController {
    constructor (NgMap) {
        this.isHiddenAppNav = true;
        this.ngMap = NgMap;
        this.langServiceData = {
            more: 'Подробнее',
            bookmarks: 'В закладки',
            showMap: 'показать на карте',
            complain: 'пожаловаться',
            booking: 'Забронировать',
            or: 'или',
            showTel: 'показать номер',
            hideTel: 'скрыть номер'
        };
    }
}

const ProductComponent = {
    template: require('./product-tmpl.html'),
    controller: ProductController
};

export default ProductComponent;