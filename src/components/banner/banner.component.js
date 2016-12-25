class BannerController {
    constructor () {
        this.data = {
            img: 'img/banner.png',
            href: ''
        }
    }
}

const bannerComponent = {
    template: require('./banner-tmpl.html'),
    bindings: {
        data: '<?'
    },
    controller: BannerController
};

export default bannerComponent;
