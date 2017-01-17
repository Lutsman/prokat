//import angular from 'angular';


class ArticlesController {
    constructor(articlesData) {
        this.isHiddenAppNav = true;
        this.articlesData = articlesData;
        this.getMoreArtStep = 6;
        this.getMoreArtCurr = 0;
        this.articles = this.articlesData.getArticles(this.getMoreArtStep);
        this.labelFilters = this.articlesData.getLabels();
        //this.getLabelFilters();
        this.activelabelFilter = this.labelFilters[0] || '';

        //this.labelFilters = [];
        //this.isOtherLabelFilter = false;

        this.bannerData = {
            title: 'title',
            img: 'img/articles-banner.jpg',
            href: 'hello'
        };
    }

    /*getLabelFilters() {
        //this.labelFilters = [''];

        angular.forEach(this.articles, (article) => {
            if (!article.label) {
                article.label = 'other';
                this.isOtherLabelFilter = true;
                return;
            }

            let label = article.label.toLowerCase();

            if (label === 'other') return;

            if (!~this.labelFilters.indexOf(label)) {
                this.labelFilters.push(label);
            }
        });

        //console.log(this.labelFilters);
        /!*if (this.isOtherLabelFilter) {
            this.labelFilters.push('other');
        }*!/
    }*/

    setActiveLabelFilter(label) {
        this.activelabelFilter = label;
    }

    getMoreArticles() {
        //this.getMoreArtCurr += this.getMoreArtStep;
        //this.articles = this.articlesData.articles.slice(0, this.getMoreArtCurr);
        //this.getLabelFilters();

        let newArticles = [];

        if (this.activelabelFilter === '') {
            return;
            //newArticles = this.articlesData.getArticles(this.getMoreArtCurr, this.getMoreArtCurr + this.getMoreArtStep);
        } else {
            newArticles = this.articlesData.getArticlesByLable(this.activelabelFilter, this.getMoreArtStep);
        }

        this.articles = this.articles.concat(newArticles);
    }
}

const articlesModule = {
    template: require('./articles-tmpl.html'),
    controller: ArticlesController
};

export default articlesModule;