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
        this.sliderData = [
            {
                id: 0,
                slide: {
                    src: 'img/product_slide_img.jpg'
                },
                thumb: {
                    src: 'img/product_slider_control.jpg'
                }
            },
            {
                id: 1,
                slide: {
                    src: 'img/product_slider_control.jpg'
                },
                thumb: {
                    src: 'img/product_slider_control.jpg'
                }
            },
            {
                id: 2,
                slide: {
                    src: 'img/product_slide_img.jpg'
                },
                thumb: {
                    src: 'img/product_slider_control.jpg'
                }
            },
            {
                id: 3,
                slide: {
                    src: 'img/product_slider_control.jpg'
                },
                thumb: {
                    src: 'img/product_slider_control.jpg'
                }
            },
            {
                id: 3,
                slide: {
                    src: 'img/product_slider_control.jpg'
                },
                thumb: {
                    src: 'img/product_slider_control.jpg'
                }
            }
        ];
        this.productData = productData.product;


        this.slider = this.sliderData;
        this.activeSlideIndex = 0;
        this.activeSlide = this.slider[0];
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

}

const ProductComponent = {
    template: require('./product-tmpl.html'),
    controller: ProductController
};

export default ProductComponent;