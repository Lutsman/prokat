'use strict';

import angular from 'angular';
import 'angular-animate';

import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';
import SearchAdvanceData from '../components/services/search-advance-data';
import SearchFormData from '../components/services/search-form-data';

import productComponent from '../components/product/product.component';
import autocompleteComponent from '../components/autocomplete/autocomplete.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import navbarComponent from '../components/navbar/navbar.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';

import './../css/normalize.css';
import './../css/styles.scss';

angular.module('product', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .service('searchAdvanceData', SearchAdvanceData)
    .service('searchFormData', SearchFormData)
    .component('product', productComponent)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('autocomplete', autocompleteComponent)
    .component('customSelect', customSelectComponent);