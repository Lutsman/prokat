class CategoryGoodsInfoController {
    constructor () {
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

const categoryGoodsInfoComponent = {
    template: require('./category-goods-info-tmpl.html'),
    bindings: {
        data: '<'

    },
    controller: CategoryGoodsInfoController
};

export default categoryGoodsInfoComponent;