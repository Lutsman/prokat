'use strict';

import angular from 'angular';
import 'angular-animate';

import GoodsData from '../components/services/goods-data';
import SerchFormData from '../components/services/search-form-data';
import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';

import mainPageComponent from '../components/main-page/main-page.component';
import searchFormComponent from '../components/search-form/search-form.component';
import autocompleteComponent from '../components/autocomplete/autocomplete.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import goodsBlockComponent from '../components/goods-block/goods-block.component';
import navbarComponent from '../components/navbar/navbar.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';

import './../css/normalize.css';
import './../css/styles.scss';


angular.module('mainPage', ['ngAnimate'])
    .service('searchFormData', SerchFormData)
    .service('goodsData', GoodsData)
    .service('selectData', SelectData)
    .service('navData', NavData)
    .component('mainPage', mainPageComponent)
    .component('searchForm', searchFormComponent)
    .component('autocomplete', autocompleteComponent)
    .component('customSelect', customSelectComponent)
    .component('goodsBlock', goodsBlockComponent)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent);