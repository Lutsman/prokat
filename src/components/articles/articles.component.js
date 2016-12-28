class ArticlesController {
    constructor(articlesData) {
        this.isHiddenAppNav = true;
        this.articlesData = articlesData;
        this.articles = this.articlesData.articles;
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