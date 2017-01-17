class BannerController {
    constructor () {
        this.data = this.data || {
            title: '',
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
