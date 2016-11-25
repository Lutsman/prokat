'use strict';

import angular from 'angular';
import 'angular-animate';
import './../../css/normalize.css';
import './../../css/styles.scss';

angular.module('categoryPage', ['ngAnimate'])
    .service('selectData', function () {
        this.langSelectData = [
            {
                name: 'Русский',
                id: 1
            },
            {
                name: 'English',
                id: 2
            },
            {
                name: 'Espaniol',
                id: 3
            }
        ];
        this.currencySelectData = [
            {
                name: 'RUB',
                id: 1
            },
            {
                name: 'USD',
                id: 2
            },
            {
                name: 'INR',
                id: 3
            }
        ]
    })
    .service('navData', function () {
        
    })
    .service('searchAdvanceData', function () {
        this.fieldsData = [
            {}
        ];
    })
    .filter('range', function () {
        return function (input, from, to) {
            if (!input) return [];
            
            return input.slice(from, to);
        }
    })
    .filter('sort', function () {
        return function (input, key, fromLowToHight) {
            if (!input) return [];
            
            let result = input.sort(function (a, b) {
                if (fromLowToHight) {
                    if (a[key] > b[key]) return 1;
                    if (a[key] < b[key]) return -1;
                } else {
                    if (a[key] < b[key]) return 1;
                    if (a[key] > b[key]) return -1;
                }
            });
            
            return result;
        }
    })
    .component('category', {
        templateUrl: 'tmpl/category-tmpl.html',
        controller: function () {
            this.dataGoods = [
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 355,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 400,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 500,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 5
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 700,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 1
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 25,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2.2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 355,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 3.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 171,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 314,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 1.5
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 275,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 366,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2.7
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 555,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 576,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.9
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 1000,
                    currency: '&#8381;',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 0.1
                }
            ];
            this.dataSearch = {
                currGoodsCount: 1000,
                trackByOutput: {
                    name: 'rate',
                    fromLowToHight: false
                }
            };
            this.goodsRange = {
                start: [0, 4],
                end: [4, 8],
                goodsPerPage: 8,
                currPage: 1,
                pageCount: 0
            };
           /* this.setCurrPage = (index) => {
                
            };*/
        }
    })
    .component('pagination', {
        templateUrl: 'tmpl/pagination-tmpl.html',
        bindings: {
            
        },
        controller: function () {
            this.data = {
                currPage: 16,
                goodsPerPage: 10,
                goodsCount: 50
            };
            
            this.setCurrPage = (index) => {
                this.data.currPage = index;
            };
            this.getStartPos = () => {
                return Math.floor(this.data.currPage / this.data.goodsPerPage) * this.data.goodsPerPage;
            };
            this.getPageCount = () => {
                return Math.ceil(this.data.goodsCount / this.data.goodsPerPage);
            };
            this.prev = () => {
                let start = this.startPos >= this.data.goodsCount ? this.data.goodsCount - this.data.goodsCount % this.data.goodsPerPage : this.startPos;
                start -= this.data.goodsPerPage*2;
                this.startPos = start >= 0 ? start : 0;
                this.repeater = this.getRepeaterArr();
            };
            this.next = () => {
                this.repeater = this.getRepeaterArr();
            };
            this.getRepeaterArr = () => {
                let arr = [];
                let i = this.startPos >= this.data.goodsCount ? this.data.goodsCount - this.data.goodsCount % this.data.goodsPerPage : this.startPos;
                let length = i + this.data.goodsPerPage > this.data.goodsCount ? this.data.goodsCount : i + this.data.goodsPerPage;
                
                for (i; i < length; i++) {
                    arr[i] = i + 1;
                }
                this.startPos = i;
                
                //console.log(arr);
                
                return arr;
            };
            
            this.pageCount = this.getPageCount();
            this.startPos = this.getStartPos();
            this.repeater = this.getRepeaterArr();
        }
    })
    .component('searchAdvance', {
        templateUrl: 'tmpl/search-advance-tmpl.html',
        bindings: {
            trackByOutput: '=?'
        },
        controller: function (searchAdvanceData) {
            this.fieldsData = searchAdvanceData.fieldsData;
            this.showSearch = false;
            this.init = () => {
                this.initCat();
                this.trackByOutput = this.trackByOutputCached ? this.trackByOutputCached : 3;
                this.trackByOutputCached = this.trackByOutputCached ? this.trackByOutputCached : this.trackByOutput;
                this.minPrice = undefined;
                this.maxPrice = undefined;
                this.adress = undefined;
                this.searchAreaName = 'Прокат велосипедов в Ростове-на-Дону';
                this.goodsCount = 1546;
            };
            this.resetForm = () => {
                this.init();
            };
            this.setActiveCat = (currCat, activeCatLink, toggle) => {
                if (toggle) {
                    activeCatLink = activeCatLink === currCat ? {} : currCat;
                } else {
                    activeCatLink = currCat;
                }
            };
            this.initCat = () => {
                this.activeCat1 = this.getActiveCat(this.fieldsData);
                this.activeCat2 = this.getActiveCat(this.activeCat1);
                this.activeCat3 = this.getActiveCat(this.activeCat2);
            };
            this.getActiveCat = (obj) => {
                let result = false;
                
                if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
                    for (let key in obj) {
                        if (!obj[key].acive) continue;
                        
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
                
            };
            
            this.init();
        }
    })
    .component('categoryGoodsInfo', {
        templateUrl: 'tmpl/category-goods-info-tmpl.html',
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
        templateUrl: 'tmpl/banner-tmpl.html',
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
    .component('navbar', {
        templateUrl: 'tmpl/navbar-tmpl.html',
        controller: function ($scope, $window, $element) {
            this.isHidden = false;
            this.scrollFunc = () => {
                let prevScrollPos = 0;
                
                return () => {
                    /*console.log(scrollPos++);
                     console.log(this);*/
                    
                    let currScrollPos = $window.scrollY;
                    let scrollDiff = currScrollPos - prevScrollPos;
                    //let scrollDirection = 0;
                    let isChanged = false;
                    let offset = $element[0].getBoundingClientRect().height;
                    
                    prevScrollPos = currScrollPos;
                    
                    //console.log(prevScrollPos);
                    //console.log(currScrollPos);
                    
                    
                    if (scrollDiff > 0 && !this.isHidden && currScrollPos > offset) {
                        //scrollDirection = 1;
                        this.isHidden = true;
                        isChanged = true;
                        //console.log($element[0].offsetHeight);
                    } else if (scrollDiff < 0  && this.isHidden) {
                        //scrollDirection = -1;
                        this.isHidden = false;
                        isChanged = true;
                        //console.log($element[0].offsetHeight);
                    }
                    
                    //console.log(scrollDirection);
                    
                    if (isChanged) {
                        $scope.$apply();
                        //console.log(offset);
                        //console.log(document.querySelector('navbar').getBoundingClientRect().height);
                        //console.log(document.querySelector('navbar').offsetHeight);
                        //console.log($element[0].getBoundingClientRect().height);
                        //console.log('changed');
                        //console.log($element[0].offsetHeight);
                    }
                }
                
            };
            
            angular.element($window).on('scroll', this.scrollFunc());
            
            
            /*console.dir($window);
             console.dir($element);
             console.log($element[0].offsetHeight);
             console.dir(this);
             console.dir($scope);*/
        }
    })
    .component('pagefooter', {
        templateUrl: 'tmpl/pagefooter-tmpl.html',
        controller: function (selectData) {
            this.langSelects = selectData.langSelectData;
            this.langSelected = this.langSelects[0];
            this.currencySelects = selectData.currencySelectData;
            this.currencySelected = this.currencySelects[0];
            
            this.onChooseLang = () => {
                /*console.log('lang choosed');
                 console.log(this);*/
            };
            this.onChooseCurrency = () => {
                /*console.log('currency choosed');
                 console.log(this);*/
            };
        }
    })
    .component('customSelect', {
        bindings: {
            options: '<',
            selectedOption: '=',
            customFunc: '<'
        },
        templateUrl: 'tmpl/custom-select-tmpl.html',
        controller: function() {
            this.isOpen = false;
            this.setSelection = (newSelect) => {
                this.selectedOption = newSelect;
                this.isOpen = false;
                
                //console.dir(this.customFunc);
                //console.log(typeof this.customFunc);
                
                if(typeof this.customFunc === 'function') {
                    //console.log('func run');
                    this.customFunc();
                }
            };
            
            /*if(typeof this.customFunc === 'function') {
             console.log('func run');
             this.customFunc();
             }*/
            
            //console.dir(this.options);
        }
    });