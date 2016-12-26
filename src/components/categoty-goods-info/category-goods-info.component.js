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
    parsePhone (str) {
        let newStr = str.slice(0, 2) + '(' + str.slice(2, 5) + ')'
            + str.slice(5, 8) + '-' + str.slice(8, 10) + '-' + str.slice(10);

        return newStr;
    }
    getCurrency () {
        return String.fromCharCode(this.data.currency);
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