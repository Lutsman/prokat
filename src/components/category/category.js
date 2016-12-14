'use strict';

import angular from 'angular';
import 'angular-animate';

import SearchAdvanceData from '../../services/search-advance-data';
import SelectData from '../../services/select-data';
import NavData from '../../services/nav-data';

import navbarComponent from './../navbar/navbar.component';
import pagefooterComponent from './../pagefooter/pagefooter.component';
import customSelectComponent from './../custom-select/custom-select.component';
import categoryComponent from './category.component';
import searchAdvanceComponent from './../search-advance/search-advance.component';
import bannerComponent from './../banner/banner.component';
import categoryGoodsInfoComponent from './../categoty-goods-info/category-goods-info.component';
import paginationNavComponent from './../pagination-nav/pagination-nav.component';

import rangeFilter from './../filters/range.filter';
import sortFilter from './../filters/sort.filter';
import minMaxFilter from '../filters/min-max.filter';

import './../../css/normalize.css';
import './../../css/styles.scss';

angular.module('categoryPage', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('searchAdvanceData', SearchAdvanceData)
    .filter('range', rangeFilter)
    .filter('sort', sortFilter)
    .filter('minMax', minMaxFilter)
    .component('category', categoryComponent)
    .component('paginationNav', paginationNavComponent)
    .component('searchAdvance', searchAdvanceComponent)
    .component('categoryGoodsInfo', categoryGoodsInfoComponent)
    .component('banner', bannerComponent)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent);