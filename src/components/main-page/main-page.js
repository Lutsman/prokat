'use strict';

import angular from 'angular';
import 'angular-animate';
import './../../css/normalize.css';
import './../../css/styles.scss';


angular.module('mainPage', ['ngAnimate'])
    .config(($locationProvider) => {
        "ngInject";   // ng-annotate doesn't handle arrow functions automatically; need to add the directive prologue.
        $locationProvider.html5Mode(true);
    })
    .service('searchFormData', function() {
        this.selectsData = [
            {
                name: 'В прокат',
                id: 1,
                subCat: [
                    {
                        name: 'Велосипед',
                        id: '',
                        subCat: [
                            {
                                name: 'Шоссейный',
                                id: ''
                            },
                            {
                                name: 'Горный',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Хардтейл',
                                id: ''
                            },
                            {
                                name: 'Двухподвес',
                                id: ''
                            },
                            {
                                name: 'Фэтбайк',
                                id: ''
                            },
                            {
                                name: 'Электробайк',
                                id: ''
                            },
                            {
                                name: 'Складывающийся',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Гироскутер',
                        id: '',
                        subCat: [
                            {
                                name: 'Шоссейный',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Внедорожный',
                                id: ''
                            },
                            {
                                name: 'Скоростной',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Самокат',
                        id: '',
                        subCat: [
                            {
                                name: 'Городской',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Внедорожный',
                                id: ''
                            },
                            {
                                name: 'Трюковый',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Роликовые коньки',
                        id: '',
                        subCat: [
                            {
                                name: 'Детские',
                                id: ''
                            },
                            {
                                name: 'Профессиональные',
                                id: ''
                            },
                            {
                                name: 'Трюковые',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Зимняя техника',
                        id: '',
                        subCat: [
                            {
                                name: 'Сноуборды',
                                id: ''
                            },
                            {
                                name: 'Лыжи',
                                id: ''
                            },
                            {
                                name: 'Санки',
                                id: ''
                            },
                            {
                                name: 'Снегокаты',
                                id: ''
                            },
                            {
                                name: 'Ледянки',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Аксессуары и туристическое оборудование',
                        id: '',
                        subCat: [
                            {
                                name: 'Экшн-камеры',
                                id: ''
                            },
                            {
                                name: 'Защитное снаряжение',
                                id: ''
                            },
                            {
                                name: 'Палатки',
                                id: ''
                            },
                            {
                                name: 'Спальные мешки',
                                id: ''
                            },
                            {
                                name: 'Рюкзаки туристические',
                                id: ''
                            },
                            {
                                name: 'Другое',
                                id: ''
                            }
                        ]
                    }
                ]
            },
            {
                name: 'В подарок',
                id: 2,
                subCat: [
                    {
                        name: 'ПВелосипед',
                        id: '',
                        subCat: [
                            {
                                name: 'Шоссейный',
                                id: ''
                            },
                            {
                                name: 'Горный',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Хардтейл',
                                id: ''
                            },
                            {
                                name: 'Двухподвес',
                                id: ''
                            },
                            {
                                name: 'Фэтбайк',
                                id: ''
                            },
                            {
                                name: 'Электробайк',
                                id: ''
                            },
                            {
                                name: 'Складывающийся',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'ПГироскутер',
                        id: '',
                        subCat: [
                            {
                                name: 'Шоссейный',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Внедорожный',
                                id: ''
                            },
                            {
                                name: 'Скоростной',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Самокат',
                        id: '',
                        subCat: [
                            {
                                name: 'Городской',
                                id: ''
                            },
                            {
                                name: 'Детский',
                                id: ''
                            },
                            {
                                name: 'Внедорожный',
                                id: ''
                            },
                            {
                                name: 'Трюковый',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Роликовые коньки',
                        id: '',
                        subCat: [
                            {
                                name: 'Детские',
                                id: ''
                            },
                            {
                                name: 'Профессиональные',
                                id: ''
                            },
                            {
                                name: 'Трюковые',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Зимняя техника',
                        id: '',
                        subCat: [
                            {
                                name: 'Сноуборды',
                                id: ''
                            },
                            {
                                name: 'Лыжи',
                                id: ''
                            },
                            {
                                name: 'Санки',
                                id: ''
                            },
                            {
                                name: 'Снегокаты',
                                id: ''
                            },
                            {
                                name: 'Ледянки',
                                id: ''
                            }
                        ]
                    },
                    {
                        name: 'Аксессуары и туристическое оборудование',
                        id: '',
                        subCat: [
                            {
                                name: 'Экшн-камеры',
                                id: ''
                            },
                            {
                                name: 'Защитное снаряжение',
                                id: ''
                            },
                            {
                                name: 'Палатки',
                                id: ''
                            },
                            {
                                name: 'Спальные мешки',
                                id: ''
                            },
                            {
                                name: 'Рюкзаки туристические',
                                id: ''
                            },
                            {
                                name: 'Другое',
                                id: ''
                            }
                        ]
                    }
                ]
            }
        ];
        this.searchData = [
            {
                name: 'в Москве',
                id: 1
            },
            {
                name: 'в Питере',
                id: 2
            },
            {
                name: 'в Баку',
                id: 3
            },
            {
                name: 'в Ростове',
                id: 4
            },
            {
                name: 'в Магадане',
                id: 5
            }
        ];
    })
    .service('goodsData', function () {
        this.rentData = {
            title: 'прокат',
            goodsArr: [
                {
                    groupName: 'Велосипеды',
                    groupArr: [
                        {
                            name: 'Велосипед двухподвес GT FURY',
                            img: 'img/goods_photo_1.jpg',
                            imgTitle: 'Велосипед двухподвес GT FURY',
                            price: 400,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 199,
                            commentsCount: 15,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Детский велокат COMMENCAL EL CAMINO',
                            img: 'img/goods_photo_2.jpg',
                            imgTitle: 'Детский велокат COMMENCAL EL CAMINO',
                            price: 150,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 300,
                            commentsCount: 40,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Велосипед двухподвес TREK REMENDY',
                            img: 'img/goods_photo_3.jpg',
                            imgTitle: 'Велосипед двухподвес TREK REMENDY',
                            price: 350,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 400,
                            commentsCount: 60,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                },
                {
                    groupName: 'Гироскутеры',
                    groupArr: [
                        {
                            name: 'Гироскутер SMART BALANCE GRAFFITI',
                            img: 'img/goods_photo_4.jpg',
                            imgTitle: 'Гироскутер SMART BALANCE GRAFFITI',
                            price: 25900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 100,
                            commentsCount: 17,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироцикл SPEED WAY',
                            img: 'img/goods_photo_5.jpg',
                            imgTitle: 'Гироцикл SPEED WAY',
                            price: 38900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 247,
                            commentsCount: 33,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироскутер XIAOMI DESERT',
                            img: 'img/goods_photo_6.jpg',
                            imgTitle: 'Гироскутер XIAOMI DESERT',
                            price: 79900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 143,
                            commentsCount: 22,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        }
                    ]
                },
                {
                    groupName: 'Самокаты',
                    groupArr: [
                        {
                            name: 'Детский велокат COMMENCAL EL CAMINO',
                            img: 'img/goods_photo_2.jpg',
                            imgTitle: 'Детский велокат COMMENCAL EL CAMINO',
                            price: 150,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 300,
                            commentsCount: 40,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Велосипед двухподвес TREK REMENDY',
                            img: 'img/goods_photo_3.jpg',
                            imgTitle: 'Велосипед двухподвес TREK REMENDY',
                            price: 350,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 400,
                            commentsCount: 60,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Велосипед двухподвес GT FURY',
                            img: 'img/goods_photo_1.jpg',
                            imgTitle: 'Велосипед двухподвес GT FURY',
                            price: 400,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 199,
                            commentsCount: 15,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                },
                {
                    groupName: 'Аксессуары',
                    groupArr: [
                        {
                            name: 'Гироскутер XIAOMI DESERT',
                            img: 'img/goods_photo_6.jpg',
                            imgTitle: 'Гироскутер XIAOMI DESERT',
                            price: 79900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 143,
                            commentsCount: 22,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Гироскутер SMART BALANCE GRAFFITI',
                            img: 'img/goods_photo_4.jpg',
                            imgTitle: 'Гироскутер SMART BALANCE GRAFFITI',
                            price: 25900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 100,
                            commentsCount: 17,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироцикл SPEED WAY',
                            img: 'img/goods_photo_5.jpg',
                            imgTitle: 'Гироцикл SPEED WAY',
                            price: 38900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 247,
                            commentsCount: 33,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                }
            ]
        };
        this.sellData = {
            title: 'продажа',
            goodsArr: [
                {
                    groupName: 'Велосипеды',
                    groupArr: [
                        {
                            name: 'Велосипед двухподвес GT FURY',
                            img: 'img/goods_photo_1.jpg',
                            imgTitle: 'Велосипед двухподвес GT FURY',
                            price: 400,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 199,
                            commentsCount: 15,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Детский велокат COMMENCAL EL CAMINO',
                            img: 'img/goods_photo_2.jpg',
                            imgTitle: 'Детский велокат COMMENCAL EL CAMINO',
                            price: 150,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 300,
                            commentsCount: 40,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Велосипед двухподвес TREK REMENDY',
                            img: 'img/goods_photo_3.jpg',
                            imgTitle: 'Велосипед двухподвес TREK REMENDY',
                            price: 350,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 400,
                            commentsCount: 60,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                },
                {
                    groupName: 'Гироскутеры',
                    groupArr: [
                        {
                            name: 'Гироскутер SMART BALANCE GRAFFITI',
                            img: 'img/goods_photo_4.jpg',
                            imgTitle: 'Гироскутер SMART BALANCE GRAFFITI',
                            price: 25900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 100,
                            commentsCount: 17,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироцикл SPEED WAY',
                            img: 'img/goods_photo_5.jpg',
                            imgTitle: 'Гироцикл SPEED WAY',
                            price: 38900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 247,
                            commentsCount: 33,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироскутер XIAOMI DESERT',
                            img: 'img/goods_photo_6.jpg',
                            imgTitle: 'Гироскутер XIAOMI DESERT',
                            price: 79900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 143,
                            commentsCount: 22,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        }
                    ]
                },
                {
                    groupName: 'Самокаты',
                    groupArr: [
                        {
                            name: 'Детский велокат COMMENCAL EL CAMINO',
                            img: 'img/goods_photo_2.jpg',
                            imgTitle: 'Детский велокат COMMENCAL EL CAMINO',
                            price: 150,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 300,
                            commentsCount: 40,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Велосипед двухподвес TREK REMENDY',
                            img: 'img/goods_photo_3.jpg',
                            imgTitle: 'Велосипед двухподвес TREK REMENDY',
                            price: 350,
                            adress: 'пр-т Шолохова, 112',
                            lookCount: 400,
                            commentsCount: 60,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Велосипед двухподвес GT FURY',
                            img: 'img/goods_photo_1.jpg',
                            imgTitle: 'Велосипед двухподвес GT FURY',
                            price: 400,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 199,
                            commentsCount: 15,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                },
                {
                    groupName: 'Аксессуары',
                    groupArr: [
                        {
                            name: 'Гироскутер XIAOMI DESERT',
                            img: 'img/goods_photo_6.jpg',
                            imgTitle: 'Гироскутер XIAOMI DESERT',
                            price: 79900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 143,
                            commentsCount: 22,
                            traderImg: 'img/trader_logo_2.png',
                            traderTitle: 'bikecenter'
                        },
                        {
                            name: 'Гироскутер SMART BALANCE GRAFFITI',
                            img: 'img/goods_photo_4.jpg',
                            imgTitle: 'Гироскутер SMART BALANCE GRAFFITI',
                            price: 25900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 100,
                            commentsCount: 17,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        },
                        {
                            name: 'Гироцикл SPEED WAY',
                            img: 'img/goods_photo_5.jpg',
                            imgTitle: 'Гироцикл SPEED WAY',
                            price: 38900,
                            adress: 'ул. Пушкинская, 2а',
                            lookCount: 247,
                            commentsCount: 33,
                            traderImg: 'img/trader_logo_1.png',
                            traderTitle: '100% Спорта'
                        }
                    ]
                }
            ]
        };
    })
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
    .component('mainPage', {
        template: require('./../../tmpl/main-page-tmpl.html'),
        controller: function (goodsData) {
            this.rentData = goodsData.rentData;
            this.sellData = goodsData.sellData;
            
            //console.log(this.langSelects);
            //console.log(this.currencySelects);
            //console.log(this.langSelected);
        }
    })
    .component('searchForm', {
        template: require('./../../tmpl/search-form-tmpl.html'),
        controller: function(searchFormData) {
            this.selects = searchFormData.selectsData;
            this.activeSelects = [];
            this.activeSelectGroup = [];
            this.selectIsChanged = false;
            this.initActiveSelects = () => {
                let selectsCount = 3;
                let activeSelectGroup = this.selects;
                //let firstActive = this.selects[0];
                
                for (let i = 0; i < selectsCount; i++) {
                    this.activeSelectGroup.push(activeSelectGroup);
                    this.activeSelects.push(activeSelectGroup[0]);
                    activeSelectGroup = activeSelectGroup[0].subCat;
                }
            };
            this.reInitActiveSelectGroups = () => {
                for (let i = 1; i < this.activeSelectGroup.length; i++) {
                    let cachedGroup = this.activeSelectGroup[i];
                    
                    //console.log(cachedGroup);
                    this.activeSelectGroup[i] = this.activeSelects[i-1].subCat;
                    //console.log(this.activeSelects[i-1]);
                    //console.log(this.activeSelectGroup[i]);
                    
                    if ( cachedGroup !== this.activeSelectGroup[i]) {
                        this.activeSelects[i] = this.activeSelectGroup[i][0];
                    }
                    
                    /*console.log(this.activeSelectGroup[i][0]);*/
                }
                /*console.log(this.activeSelectGroup);
                console.log(this.activeSelects);*/
            };
            this.onSelect = () => {
                this.selectIsChanged = true;
            };
            Object.defineProperty(this, "selectExperimental", {
                get: (() => {
                    var counter = 0;
                    return () => {
                        console.log(this.selectIsChanged);
                        console.log(counter);
                        if (this.selectIsChanged && counter < this.activeSelectGroup.length) {
                            this.reInitActiveSelectGroups();
                            counter++;
                        } else {
                            this.selectIsChanged = false;
                            counter = 0;
                        }
    
                        return this.activeSelectGroup;
                    }
                })()
            });
                
         
            this.getActiveSelectGroups = (() => {
                let init = false;
                return () => {
                    init ? this.reInitActiveSelectGroups() : init = true;
        
                    return this.activeSelectGroup;
                }
            })();
            /*this.selectedArr = this.selects.map((item) => {
                return item.options[0];
            });*/
            this.searchKeyword = '';
            this.searchSelected = false;
            this.searchPotentialFields = searchFormData.searchData;
            this.setSearch = (name) => {
                this.searchKeyword = name;
                this.searchSelected = true;
            };
            
            this.initActiveSelects();
            //console.dir(this.getActiveSelectGroups());
        }
    })
    .component('autocomplete', {
        template: require('./../../tmpl/autocomplete-tmpl.html'),
        bindings: {
            value: '=',
            getSimilarValue: '<'
        },
        controller: function () {
            this.value = this.value || '';
            this.isSelected = false;
            
            this.setValue = (name) => {
                this.value = name;
                this.isSelected = true;
            };
            this.onValueChange = () => {
                this.isSelected = false;
                this.similarValues = this.getSimilarValue(this.value);
            }
        }
    })
    .component('customSelect', {
        bindings: {
            options: '<',
            selectedOption: '=',
            customFunc: '=?'
        },
        template: require('./../../tmpl/custom-select-tmpl.html'),
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
    })
    .component('goodsBlock', {
        bindings: {
            goodsData: '<'
        },
        template: require('./../../tmpl/goods-block-tmpl.html'),
        controller: function () {
            //this.goodsData = goodsData.rentData;
            this.activeGroup = this.goodsData.goodsArr[0];
        }
    })
    .component('navbar', {
        template: require('./../../tmpl/navbar-tmpl.html'),
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
        template: require('./../../tmpl/pagefooter-tmpl.html'),
        controller: function (selectData) {
            this.langSelects = selectData.langSelectData;
            this.langSelected = this.langSelects[0];
            this.currencySelects = selectData.currencySelectData;
            this.currencySelected = this.currencySelects[0];
            
            this.onChooseLang = () => {
                //console.log('lang choosed');
                //console.log(this);
            };
            this.onChooseCurrency = () => {
                //console.log('currency choosed');
                //console.log(this);
            };
        }
    });