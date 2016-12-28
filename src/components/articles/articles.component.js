import angular from 'angular';


class ArticlesController {
    constructor(articlesData) {
        this.isHiddenAppNav = true;
        this.articlesData = articlesData;
        this.getMoreArtStep = 6;
        this.getMoreArtCurr = 6;
        this.articles = this.articlesData.articles.slice(0, this.getMoreArtCurr);

        this.labelFilters = [];
        this.isOtherLabelFilter = false;




        this.bannerData = {
            title: 'title',
            img: 'img/articles-banner.jpg',
            href: 'hello'
        };

        this.getLabelFilters();
        this.activelabelFilter = this.labelFilters[0] || '';
    }

    getLabelFilters() {
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

        console.log(this.labelFilters);
        /*if (this.isOtherLabelFilter) {
            this.labelFilters.push('other');
        }*/
    }

    setActiveLabelFilter(label) {
        this.activelabelFilter = label;
    }

    getMoreArticles() {
        this.getMoreArtCurr += this.getMoreArtStep;
        this.articles = this.articlesData.articles.slice(0, this.getMoreArtCurr);
        this.getLabelFilters();
    }
}

const articlesModule = {
    template: require('./articles-tmpl.html'),
    controller: ArticlesController
};

export default articlesModule;