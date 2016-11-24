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
    .component('category', {
        templateUrl: 'tmpl/category-tmpl.html',
        controller: function () {
            
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
    .component('categoryGoodsBlock', {
        
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