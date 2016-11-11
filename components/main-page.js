angular.module('mainPage', [])
    .service('searchFormData', function() {
        this.selectsData = [
            {
                options: [
                    {
                        name: 'В прокат',
                        id: 1
                    },
                    {
                        name: 'В подарок',
                        id: 2
                    },
                    {
                        name: 'На продажу',
                        id: 3
                    }
                ]
            },
            {
                options: [
                    {
                        name: 'Велосипед',
                        id: 1
                    },
                    {
                        name: 'Самокат',
                        id: 2
                    },
                    {
                        name: 'Пепелац',
                        id: 3
                    }
                ]
            },
            {
                options: [
                    {
                        name: 'Горный',
                        id: 1
                    },
                    {
                        name: 'Норный',
                        id: 2
                    },
                    {
                        name: 'Амфибия',
                        id: 3
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
    .component('mainPage', {
        templateUrl: 'tmpl/main-page-tmpl.html',
        controller: function (selectData) {
            this.langSelects = selectData.langSelectData;
            this.langSelected = this.langSelects[0];
            this.currencySelects = selectData.currencySelectData;
            this.currencySelected = this.currencySelects[0];
            
            //console.log(this.langSelects);
            //console.log(this.currencySelects);
            //console.log(this.langSelected);
        }
    })
    .component('searchForm', {
        templateUrl: 'tmpl/search-form-tmpl.html',
        controller: function(searchFormData) {
            this.selects = searchFormData.selectsData;
            this.selectedArr = this.selects.map((item) => {
                return item.options[0];
            });
            this.searchKeyword = '';
            this.searchSelected = false;
            this.searchPotentialFields = searchFormData.searchData;
            this.setSearch = (name) => {
                this.searchKeyword = name;
                this.searchSelected = true;
            };
        }
    })
    .component('customSelect', {
        bindings: {
            options: '<',
            selectedOption: "="
        },
        templateUrl: 'tmpl/custom-select-tmpl.html',
        controller: function() {
            this.isOpen = false;
            this.setSelection = (newSelect) => {
                this.selectedOption = newSelect;
                this.isOpen = false;
            };
            
            //console.dir(this.options);
        }
    })
    .component('goodsBlock', {
        template: `<div class="goods-nav">
							<p>{{$ctrl.goodsData.title}}</p>
							<ul class="goods-menu">
								<li ng-repeat="goodsGroup in $ctrl.goodsData.goodsArr" ng-click="$ctrl.activeGroup = goodsGroup">
									<a href="javascript:void(0)">{{goodsGroup.groupName}}</a>
								</li>
							</ul>
							<a href="#">Как сюда попасть?</a>
						</div>
						<div ng-repeat="goodsGroup in $ctrl.goodsData.goodsArr" ng-if="$ctrl.activeGroup === goodsGroup" class="link-box">
							<div ng-repeat="goodsCard in goodsGroup.groupArr">
								<a href="javascript:void(0)">
									<img ng-src="{{goodsCard.img}}" alt="{{goodsCard.imgTitle}}">
									<p class="price">{{goodsCard.price}} &#8381;</p>
									<p>{{goodsCard.Name}}</p>
									<p class="place">{{goodsCard.adress}}</p>
									<p>
										<span class="look">{{goodsCard.lookCount}}</span>
										<span class="comment">{{goodsCard.commentsCount}}</span>
										<span class="company-logo">
												<img ng-src="{{goodsCard.traderImg}}" alt="{{goodsCard.traderTitle}}">
										</span>
									</p>
								</a>
							</div>
						</div>`,
        controller: function (goodsData) {
            this.goodsData = goodsData.rentData;
            this.activeGroup = this.goodsData.goodsArr[0];
        }
    });