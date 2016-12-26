class ArticlesController {
    constructor() {
        this.isHiddenAppNav = true;

        this.bannerData = {
            title: 'title',
            img: 'img/articles-banner.jpg',
            href: 'hello'
        }
    }
}

const articlesModule = {
    template: require('./articles-tmpl.html'),
    controller: ArticlesController
};

export default articlesModule;