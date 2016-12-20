class SearchAdvanceController {
    constructor (searchAdvanceData, searchFormData, catGoodsData) {
        this.searchAdvanceData = searchAdvanceData;
        this.searchFormData = searchFormData;
        this.catGoodsData = catGoodsData;
        this.fieldsData = this.searchAdvanceData.fieldsData;
        this.showSearch = false;
        this.searchAutocomplete = {
            value: '',
            placeholder: 'Город, район, адрес',
            getSimilarValue: (value) => {
                console.log(value);

                return this.searchFormData.searchData;
            }
        };

        this.init();

        //console.log(this.searchAutocomplete.holder);
        //console.log(this.fieldsData.sorters);
    }


    init () {
        this.adress = '';
        this.minPrice = this.fieldsData.minPrice;
        this.maxPrice = this.fieldsData.maxPrice;

        this.initCat();
        this.getItems();

        this.items = this.newItems;
        this.itemsCount = this.currItemsCount;

        for (let key in this.fieldsData.sorters) {
            if (this.fieldsData.sorters[key].active) {
                this.sorter = this.currSorter = this.fieldsData.sorters[key];
            }
        }
        
        //console.log(this.tracker);
    }
    initCat () {
        let activeCatGroup = this.fieldsData.categories;
        this.activeCatGroup = [];
        this.activeCats = [];

        do {
            this.activeCatGroup.push(activeCatGroup);
            this.activeCats.push(this.getActiveCat(activeCatGroup));
            activeCatGroup = this.activeCats[this.activeCats.length - 1].subCat;
        } while (activeCatGroup);

        //console.log(this.activeCats);
        //console.log(this.activeCatGroup);
    }
    reInitActiveCat (newActiveCat, index) {
        let i = index + 1;
        this.activeCats[index] = newActiveCat;

        for (i; i < this.activeCatGroup.length; i++) {
            this.activeCatGroup[i] = this.activeCats[i-1].subCat;
            this.activeCats[i] = this.activeCatGroup[i][0];
        }
    }
    getActiveCat (obj) {
        if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
            for (let key in obj) {
                if (!obj[key].active) continue;

                return obj[key];
            }
        } else if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                if (!obj[i].active) continue;

                return obj[i];
            }
        }

        return obj[0];
    }
    setActiveCat (newActiveCat, index, toggle) {
        if (this.activeCats[index] === newActiveCat) return;

        this.reInitActiveCat(newActiveCat, index);

        this.toggle = toggle; // unused
    }
    searchRender () {
        //this.getItems(); //then need promise

        this.items = this.minMaxFilteredItems;
        this.itemsCount = this.currItemsCount;
        this.sorter = this.currSorter;
    }
    resetForm () {
        this.init();

    }
    getItems () {
        console.log('get items');
        this.newItems = this.catGoodsData.dataGoods;
        this.setMinMax();
    }
    setMinMax () {
        this.minMaxFilteredItems = this.getMinMax();
        this.currItemsCount = this.minMaxFilteredItems.length;
        console.log(this.currItemsCount);
    }
    getMinMax () {
        return this.minMaxFilter(this.newItems, this.minPrice, this.maxPrice);
    }
    minMaxFilter (input, min, max) {
        if (!input) return [];

        min = min || 0;
        max = max || 0;
        //console.log(input);
        //console.log(min);
        //console.log(max);

        return input.filter((item) => {
            let result = true;

            if ( min > 0 && max > min) {
                result = item.price >= min && item.price <= max;
            } else if (min > 0) {
                result = item.price >= min;
            } else if (max > 0) {
                result = item.price <= max;
            }

            return result;
        });
    }
}

const searchAdvanceComponent = {
    template: require('./search-advance-tmpl.html'),
    bindings: {
        sorter: '=',
        itemsCount: '=',
        items: '=?'
    },
    controller: SearchAdvanceController
};

export default searchAdvanceComponent;