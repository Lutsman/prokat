'use strict';

import angular from 'angular';
import 'angular-animate';

import SearchAdvanceData from '../components/services/search-advance-data';
import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';
import SearchFormData from '../components/services/search-form-data';
import CatGoodsData from '../components/services/category-goods-data';

import navbarComponent from '../components/navbar/navbar.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import categoryComponent from '../components/category/category.component';
import searchAdvanceComponent from '../components/search-advance/search-advance.component';
import bannerComponent from '../components/banner/banner.component';
import categoryGoodsInfoComponent from '../components/categoty-goods-info/category-goods-info.component';
import paginationNavComponent from '../components/pagination-nav/pagination-nav.component';
import autocompleteComponent from '../components/autocomplete/autocomplete.component';


import rangeFilter from '../components/filters/range.filter';
import sortFilter from '../components/filters/sort.filter';
//import minMaxFilter from '../filters/min-max.filter';

import './../css/normalize.css';
import './../css/styles.scss';

angular.module('categoryPage', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('searchAdvanceData', SearchAdvanceData)
    .service('searchFormData', SearchFormData)
    .service('catGoodsData', CatGoodsData)
    .filter('range', rangeFilter)
    .filter('sort', sortFilter)
//    .filter('minMax', minMaxFilter)
    .component('category', categoryComponent)
    .component('paginationNav', paginationNavComponent)
    .component('searchAdvance', searchAdvanceComponent)
    .component('autocomplete', autocompleteComponent)
    .component('categoryGoodsInfo', categoryGoodsInfoComponent)
    .component('banner', bannerComponent)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent);