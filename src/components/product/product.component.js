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
            }
        ];


        this.activeSlide = this.sliderData[0];
    }

    setActiveSlide (slide) {
        this.activeSlide = slide;
    }
}

const ProductComponent = {
    template: require('./product-tmpl.html'),
    controller: ProductController
};

export default ProductComponent;