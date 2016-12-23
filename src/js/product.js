'use strict';

import angular from 'angular';
import 'angular-animate';
import 'ngmap';
import 'angular-social-links';

import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';
import SearchAdvanceData from '../components/services/search-advance-data';
import SearchFormData from '../components/services/search-form-data';
import CatGoodsData from '../components/services/category-goods-data';

import productComponent from '../components/product/product.component';
import navbarComponent from '../components/navbar/navbar.component';
import searchAdvanceComponent from '../components/search-advance/search-advance.component';
import autocompleteComponent from '../components/autocomplete/autocomplete.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';
import prodOfferComponent from '../components/prod-offer/prod-offer.component';
import motionComponent from '../components/motion/motion.component';

import './../css/normalize.css';
import './../css/styles.scss';

angular.module('product', ['ngAnimate', 'ngMap', 'socialLinks'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('searchAdvanceData', SearchAdvanceData)
    .service('searchFormData', SearchFormData)
    .service('catGoodsData', CatGoodsData)
    .component('product', productComponent)
    .component('navbar', navbarComponent)
    .component('searchAdvance', searchAdvanceComponent)
    .component('autocomplete', autocompleteComponent)
    .component('customSelect', customSelectComponent)
    .component('pagefooter', pagefooterComponent)
    .component('prodOffer', prodOfferComponent)
    .component('motion', motionComponent);