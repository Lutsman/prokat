'use strict';

import angular from 'angular';
import 'angular-animate';

import GoodsData from '../../services/goods-data';
import SerchFormData from '../../services/search-form-data';
import SelectData from '../../services/select-data';
import NavData from '../../services/nav-data';

import mainPageComponent from './main-page.component';
import searchFormComponent from './../search-form/search-form.component';
import autocompleteComponent from './../autocomplete/autocomplete.component';
import customSelectComponent from './../custom-select/custom-select.component';
import goodsBlockComponent from './../goods-block/goods-block.component';
import navbarComponent from './../navbar/navbar.component';
import pagefooterComponent from './../pagefooter/pagefooter.component';

import './../../css/normalize.css';
import './../../css/styles.scss';


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