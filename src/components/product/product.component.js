class ProductController {
    constructor (NgMap, productData) {
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
        this.productData = productData.product;
        this.similarProd = productData.similarProd;
        this.motions = productData.advertisement;

        this.slider = this.productData.slider;
        this.activeSlideIndex = 0;
        this.activeSlide = this.slider[this.activeSlideIndex];
    }

    setActiveSlide (slide, index) {
        this.activeSlideIndex = index;
        this.activeSlide = slide;
    }
    slidePrev () {
        let index = this.activeSlideIndex - 1 >= 0 ?  this.activeSlideIndex - 1 : 0;

        this.setActiveSlide(this.slider[index], index);
    }
    slideNext () {
        let index = this.activeSlideIndex + 1 < this.slider.length ?  this.activeSlideIndex + 1 : this.slider.length - 1;

        this.setActiveSlide(this.slider[index], index);
    }

    parsePhone (str) {
        let newStr = str.slice(0, 2) + '(' + str.slice(2, 5) + ')'
            + str.slice(5, 8) + '-' + str.slice(8, 10) + '-' + str.slice(10);

        return newStr;
    }

}

const ProductComponent = {
    template: require('./product-tmpl.html'),
    controller: ProductController
};

export default ProductComponent;