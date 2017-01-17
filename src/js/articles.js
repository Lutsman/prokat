'use strict';

import angular from 'angular';
import 'angular-animate';

import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';
import ArticlesData from '../components/services/articles-data';

import articlesModule from './../components/articles/articles.component';
import navbarComponent from '../components/navbar/navbar.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import bannerComponent from '../components/banner/banner.component';
import goodsCard2Module from '../components/goods-card-2/goods-card-2.component';

import rangeFilter from '../components/filters/range.filter';

import './../css/normalize.css';
import './../css/styles.scss';


angular.module('articlesPage', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('articlesData', ArticlesData)
    .filter('range', rangeFilter)
    .component('articles', articlesModule)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent)
    .component('banner', bannerComponent)
    .component('goodsCard2', goodsCard2Module);


