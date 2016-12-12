class SearchAdvanceController {
    constructor (searchAdvanceData) {
        this.fieldsData = searchAdvanceData.fieldsData;
        this.showSearch = false;
        this.init();
    }

    init () {
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
    }
    resetForm () {
        this.init();
    }
    setActiveCat (currCat, activeCatLink, toggle) {
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
    }
    initCat () {
        this.activeCat1 = this.getActiveCat(this.fieldsData.categories);
        /*console.dir(this.fieldsData.categories);
         console.dir(this.activeCat1);*/
        this.activeCat2 = this.getActiveCat(this.activeCat1.subCat);
        this.activeCat3 = this.getActiveCat(this.activeCat2.subCat);
    }
    getActiveCat (obj) {
        let result = false;

        if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
            for (let key in obj) {
                if (!obj[key].active) continue;

                result = obj[key];
                break;
            }
        } else if (Array.isArray(obj)) {
            for (let i = 0; i < obj.length; i++) {
                if (!obj[i].active) continue;

                result = obj[i];
                break;
            }
        }

        return result;
    }
    searchRender () {
        //this.getItems();
    }
}

const searchAdvanceComponent = {
    template: require('./search-advance-tmpl.html'),
    bindings: {
        tracker: '=',
        itemsCount: '<',
        getItems: '@'
    },
    controller: SearchAdvanceController
};

export default searchAdvanceComponent;