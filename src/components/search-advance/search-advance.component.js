class SearchAdvanceController {
    constructor (searchAdvanceData, searchFormData) {
        this.fieldsData = searchAdvanceData.fieldsData;
        this.showSearch = true;
        this.searchAutocomplete = {
            value: '',
            placeholder: 'Город, район, адрес',
            getSimilarValue: (value) => {
                console.log(value);

                return searchFormData.searchData;
            }
        };
        this.init();
    }


    init () {
        this.initCat();
        this.minPrice = this.fieldsData.minPrice;
        this.maxPrice = this.fieldsData.maxPrice;
        this.adress = '';

        for (let key in this.fieldsData.trackers) {
            if (this.fieldsData.trackers[key].active) {
                this.tracker = this.fieldsData.trackers[key];
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
        //this.getItems();
    }
    resetForm () {
        this.init();
    }
}

const searchAdvanceComponent = {
    template: require('./search-advance-tmpl.html'),
    bindings: {
        tracker: '=',
        itemsCount: '<',
        getItems: '@',
        minPrice: '=',
        maxPrice: '='
    },
    controller: SearchAdvanceController
};

export default searchAdvanceComponent;