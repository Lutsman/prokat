class CategoryGoodsInfoController {
    constructor () {
        /*this.data = {
         img: 'img/goods_catalog_preview_1.jpg',
         traderImg: 'img/trader_logo_3.png',
         name: 'Горный профессиональный велосипед двухподвес GT FURY',
         price: '400',
         currency: '&#8381;',
         description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
         addTime: 'Добавлено 2 часа назад',
         rate: 5
         };*/
        this.langServiceData = {
            more: 'Подробнее',
            bookmarks: 'В закладки',
            showMap: 'показать на карте',
            complain: 'пожаловаться',
            booking: 'Забронировать',
            or: 'или',
            showRoom: 'показать номер'
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