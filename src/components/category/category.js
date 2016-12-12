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
    .component('paginationNav', {
        template: require('./../../tmpl/pagination-nav-tmpl.html'),
        bindings: {
            currPage: '=',
            pageCount: '<',
            pageLimit: '<'
            
        },
        controller: function () {
            this.setCurrPage = (index) => {
                this.currPage = index;
                this.repeater = this.getRepeaterArr();
            };
            this.getStartPos = () => {
                return Math.floor(this.currPage / this.pageLimit) * this.pageLimit;
            };
            this.prev = () => {
                this.startPos -= this.pageLimit;
                this.repeater = this.getRepeaterArr();
            };
            this.next = () => {
                this.startPos += this.pageLimit;
                this.repeater = this.getRepeaterArr();
            };
            this.getRepeaterArr = () => {
                if (this.startPos >= this.pageCount) {
                    this.startPos = this.pageCount - this.pageCount % this.pageLimit;
                } else if (this.startPos < 0) {
                    this.startPos = 0;
                }
                
                let arr = [];
                let i = this.startPos;
                let length = i + this.pageLimit > this.pageCount ? this.pageCount : i + this.pageLimit;
                
                for (i; i < length; i++) {
                    arr[i] = i + 1;
                }
                //this.startPos = i;
                
                //console.log(arr);
                
                return arr;
            };
            
            //this.pageCount = this.getPageCount();
            this.startPos = this.getStartPos();
            this.repeater = this.getRepeaterArr();
        }
    })
    .component('searchAdvance', {
        template: require('./../../tmpl/search-advance-tmpl.html'),
        bindings: {
            tracker: '=',
            itemsCount: '<',
            getItems: '@'
        },
        controller: function (searchAdvanceData) {
            this.fieldsData = searchAdvanceData.fieldsData;
            this.showSearch = false;
            this.init = () => {
                this.initCat();
                //this.trackByOutput = this.trackByOutputCached ? this.trackByOutputCached : 3;
                //this.trackByOutputCached = this.trackByOutputCached ? this.trackByOutputCached : this.trackByOutput;
                this.minPrice = this.fieldsData.minPrice;
                this.maxPrice = this.fieldsData.maxPrice;
                this.adress = undefined;
                //this.title = this.fieldsData.title;
                //this.trackers = this.fieldsData.trackers;
                
                for (let key in this.fieldsData.trackers) {
                    if (this.fieldsData.trackers[key].active) {
                        this.tracker = this.fieldsData.trackers[key];
                        //console.log(this.fieldsData.trackers[key]);
                        //console.log(this.tracker);
                    }
                        
                }
                //this.goodsCount = 1546;
            };
            this.resetForm = () => {
                this.init();
            };
            this.setActiveCat = (currCat, activeCatLink, toggle) => {
                console.log(activeCatLink === currCat);
                console.dir(activeCatLink);
                console.dir(currCat);
                console.log(toggle);
                /*if (toggle) {
                    if (activeCatLink === currCat) {
                        activeCatLink = {};
                    } else {
                        activeCatLink = currCat;
                    }
                    
                    //activeCatLink = activeCatLink === currCat ? {} : currCat;
                } else {
                    activeCatLink = currCat;
                    console.log(activeCatLink === currCat);
                }*/
            };
            this.initCat = () => {
                this.activeCat1 = this.getActiveCat(this.fieldsData.categories);
                /*console.dir(this.fieldsData.categories);
                console.dir(this.activeCat1);*/
                this.activeCat2 = this.getActiveCat(this.activeCat1.subCat);
                this.activeCat3 = this.getActiveCat(this.activeCat2.subCat);
                
            };
            this.getActiveCat = (obj) => {
                let result = false;
                
                if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
                    for (let key in obj) {
                        if (!obj[key].active) continue;
                        
                        result = obj[key];
                        break;
                    }
                } else if (Array.isArray(obj)){
                    for (let i = 0; i < obj.length; i++) {
                        if (!obj[i].active) continue;
                        
                        result = obj[i];
                        break;
                    }
                }
                
                return result;
            };
            this.searchRender = () => {
                //this.getItems();
            };
            
            this.init();
        }
    })
    .component('categoryGoodsInfo', {
        template: require('./../../tmpl/category-goods-info-tmpl.html'),
        bindings: {
            data: '<'
            
        },
        controller: function () {
            /*this.data = {
                img: 'img/goods_catalog_preview_1.jpg',
                traderImg: 'img/trader_logo_3.png',
                name: 'Горный профессиональный велосипед двухподвес GT FURY',
                price: '400',
                currency: '&#8381;',
                description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                addTime: 'Добавлено 2 часа назад',
                rate: 5
            };*/
            this.langServiceData = {
                more: 'Подробнее',
                bookmarks: 'В закладки',
                showMap: 'показать на карте',
                complain: 'пожаловаться',
                booking: 'Забронировать',
                or: 'или',
                showRoom: 'показать номер'
            };
            
        }
    })
    .component('banner', {
        template: require('./../../tmpl/banner-tmpl.html'),
        bindings: {
            data: '=?'
        },
        controller: function () {
            this.data = {
                img: 'img/banner_1.jpg',
                href: ''
            }
        }
    })
    .component('navbar', navbarComponent)
    .component('pagefooter', pagefooterComponent)
    .component('customSelect', customSelectComponent);