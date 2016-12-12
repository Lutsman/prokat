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

//import rangeFilter from './../filters/range.filter';
//import sortFilter from './../filters/sort.filter';

import './../../css/normalize.css';
import './../../css/styles.scss';

angular.module('categoryPage', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('searchAdvanceData', SearchAdvanceData)
    .filter('range', function () {
        return function (input, from, to) {
            if (!input) return [];

            return input.slice(from, to);
        }
    })
    .filter('sort', function () {
        return (input, key, fromLowToHight) => {
            if (!input) return [];
            if (!key || !fromLowToHight) {
                /*console.log(key);
                 console.log(fromLowToHight);
                 console.log(input);*/

                return input;
            }

            return input.sort(function (a, b) {
                if (fromLowToHight) {
                    if (a[key] > b[key]) return 1;
                    if (a[key] < b[key]) return -1;
                } else {
                    if (a[key] < b[key]) return 1;
                    if (a[key] > b[key]) return -1;
                }
            });
        }
    })
    .component('category', categoryComponent)
    .component('paginationNav', paginationNavComponent)
    .component('searchAdvance', searchAdvanceComponent)
    .component('categoryGoodsInfo', categoryGoodsInfoComponent)
    .component('banner', bannerComponent)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent);