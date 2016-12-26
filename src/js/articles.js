'use strict';

import angular from 'angular';
import 'angular-animate';

import SelectData from '../components/services/select-data';
import NavData from '../components/services/nav-data';

import articlesModule from './../components/articles/articles.component';
import navbarComponent from '../components/navbar/navbar.component';
import pagefooterComponent from '../components/pagefooter/pagefooter.component';
import customSelectComponent from '../components/custom-select/custom-select.component';
import bannerComponent from '../components/banner/banner.component';

import './../css/normalize.css';
import './../css/styles.scss';


angular.module('articlesPage', ['ngAnimate'])
    .service('selectData', SelectData)
    .service('navData', NavData)
    .component('articles', articlesModule)
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent)
    .component('banner', bannerComponent);


