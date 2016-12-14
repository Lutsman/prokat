class CategoryController {
    constructor () {
        let self = this;

        this.dataGoods = [
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 355,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 4.3,
                premium: true
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 400,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 2
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 500,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 5
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 700,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 1,
                premium: true
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 25,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 2.2
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 355,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 3.3
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 171,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 4.2
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 314,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 1.5
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 275,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 3
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 366,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 2.7
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 555,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 4.3
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 576,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 4.9
            },
            {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: 1000,
                currency: '₽',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 0.1
            }
        ];
        /*this.tracker = {
         name: 'price',
         reverse: false
         };*/

        this.dataPagination = {
            goodsPerPage: 8,
            currPage: 0,
            pageLimit: 10,
            get goodsCount() {
                //let result = Object.keys(self.dataGoodsTemp).length;
                let result = self.minMaxFilter(self.dataGoods, self.min, self.max).length
                //console.log(result);
                //self.dataSearch.currGoodsCount;
                this.tempCount = result;
                this.pageCount = Math.ceil(this.tempCount / this.goodsPerPage);


                return result;
            }
            /*get pageCount() {
                return Math.ceil(this.goodsCount / this.goodsPerPage);
            }*/
        };
    }

    minMaxFilter (input, min, max) {
        if (!input) return [];
    
        //console.log(input);
        //console.log(min);
        //console.log(max);

        let filteredArr = input.filter((item) => {
            let result = true;

            if ( min > 0 && max > min) {
                result = item.price >= min && item.price <= max;
            } else if (min > 0) {
                result = item.price >= min;
            } else if (max > 0) {
                result = item.price <= max;
            }

            return result;
        });


        return filteredArr;
    }

    getGoods () {
        console.log('get goods');
        console.log(this);
    }
}

const categoryComponent = {
    template: require('./category-tmpl.html'),
    controller: CategoryController
};

export default categoryComponent;