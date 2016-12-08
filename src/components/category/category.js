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
        this.fieldsData = {
            title: 'Прокат велосипедов в Ростове-на-Дону',
            maxPrice: undefined,
            minPrice: undefined,
            trackers: [
                {
                    title: 'сначала дешевые',
                    name: 'price',
                    reverse: false,
                    id: 0,
                    active: true
                },
                {
                    title: 'сначала дорогие',
                    name: 'price',
                    reverse: true,
                    id: 1,
                    active: false
                },
                {
                    title: 'по-популярности',
                    name: 'rate',
                    reverse: false,
                    id: 2,
                    active: false
                }
            ],
            categories: [
                {
                    name: '',
                    title: 'В прокат',
                    active: true,
                    id: 0,
                    subCat: [
                        {
                            name: '',
                            title: 'Велосипед',
                            active: true,
                            id: 0,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-1',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: true,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Гироскутер',
                            active: false,
                            id: 1,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-2',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Самокат',
                            active: false,
                            id: 2,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-3',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Роликовые коньки',
                            active: false,
                            id: 3,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-4',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Аксессуары и оборудование',
                            active: false,
                            id: 4,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-5',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Зимняя техника',
                            active: false,
                            id: 5,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-6',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    name: '',
                    title: 'Купить',
                    active: false,
                    id: 1,
                    subCat: [
                        {
                            name: '',
                            title: 'Велосипед',
                            active: true,
                            id: 0,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-1',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: true,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Гироскутер',
                            active: false,
                            id: 1,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-2',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Самокат',
                            active: false,
                            id: 2,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-3',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Роликовые коньки',
                            active: false,
                            id: 3,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-4',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Аксессуары и оборудование',
                            active: false,
                            id: 4,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-5',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        },
                        {
                            name: '',
                            title: 'Зимняя техника',
                            active: false,
                            id: 5,
                            subCat: [
                                {
                                    name: '',
                                    title: 'Шоссейный-6',
                                    active: false,
                                    id: 0
                                },
                                {
                                    name: '',
                                    title: 'Горный',
                                    active: false,
                                    id: 1
                                },
                                {
                                    name: '',
                                    title: 'Детский',
                                    active: false,
                                    id: 2
                                },
                                {
                                    name: '',
                                    title: 'Хардтейл',
                                    active: false,
                                    id: 3
                                },
                                {
                                    name: '',
                                    title: 'Двухподвес',
                                    active: false,
                                    id: 4
                                },
                                {
                                    name: '',
                                    title: 'Фэтбайк',
                                    active: false,
                                    id: 5
                                },
                                {
                                    name: '',
                                    title: 'Электро',
                                    active: false,
                                    id: 6
                                },
                                {
                                    name: '',
                                    title: 'Компактный',
                                    active: false,
                                    id: 7
                                }
                            ]
                        }
    
                    ]
                }
            ]
        };
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
            if (!key || !fromLowToHight) {
                /*console.log(key);
                console.log(fromLowToHight);
                console.log(input);*/
                
                return input;
            }
            
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
        template: require('./../../tmpl/category-tmpl.html'),
        controller: function () {
            let self = this;
            
            this.dataGoods = [
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 355,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 400,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 500,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 5
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 700,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 1
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 25,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2.2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 355,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 3.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 171,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.2
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 314,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 1.5
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 275,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 366,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 2.7
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 555,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.3
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 576,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 4.9
                },
                {
                    img: 'img/goods_catalog_preview_1.jpg',
                    traderImg: 'img/trader_logo_3.png',
                    name: 'Горный профессиональный велосипед двухподвес GT FURY',
                    price: 1000,
                    currency: '₽',
                    description: 'С этим байком, рама которого аналогична верхней модели, вы будете не только быстрее на даунхильных трассах, но и сможете крепко подружиться в байк-парках. Если вы тот, кто не намерен отступать перед большими трамплинами и самым сложным уклоном.',
                    addTime: 'Добавлено 2 часа назад',
                    rate: 0.1
                }
            ];
            /*this.tracker = {
                name: 'rate',
                reverse: false
            };*/
            this.dataPagination = {
                goodsPerPage: 8,
                currPage: 0,
                pageLimit: 10,
                //testCount: 500,
                get goodsCount() {
                    let result = Object.keys(self.dataGoods).length;
                    //console.log(result);
                    //self.dataSearch.currGoodsCount;
                    
                    return result;//self.dataSearch.currGoodsCount; //result;
                },
                /*set goodsCount(input) {
                    this.testCount;
                },*/
                get pageCount() {
                    return Math.ceil(this.goodsCount / this.goodsPerPage);
                }
            };
            this.getGoods = () => {
                console.log('get goods');
                console.log(this);
            };
            /*Object.defineProperties(this, 'goodsCount', {
                get: function() {
                    return Object.keys(this.dataGoods).length;
                }.bind(this)
            });*/
            /*this.getPageCount = () => {
                return Math.ceil(this.dataSearch.currGoodsCount / this.dataPagination.goodsPerPage);
            };*/
            
            
            //this.dataPagination.pageCount = this.getPageCount();
            //console.log(this.dataPagination.goodsCount);
            //console.log(this.dataPagination.pageCount);
            
        }
    })
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
    });