class SearchFormController {
    constructor (searchFormData) {
        this.selects = searchFormData.selectsData;
        this.activeSelects = [];
        this.activeSelectGroup = [];
        this.selectIsChanged = false;
        //this.isInit = false;
        this.searchAutocomplete = {
            value: '',
            getSimilarValue: (value) => {
                console.log(value);
                //let val = value;
                //val.json.stringify;

                return searchFormData.searchData;
            }
        };

        /*Object.defineProperty(this, "selectsArr", {
            get: (() => {
                var counter = 0;
                return () => {
                    //console.log(this.selectIsChanged);
                    //console.log(counter);
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
        });*/

        this.initActiveSelects();
        //this.onSelect();
    }

    initActiveSelects () {
        let selectsCount = 3;
        let activeSelectGroup = this.selects;
        //let firstActive = this.selects[0];

        for (let i = 0; i < selectsCount; i++) {
            this.activeSelectGroup.push(activeSelectGroup);
            this.activeSelects.push(activeSelectGroup[0]);
            activeSelectGroup = activeSelectGroup[0].subCat;
        }
    }

    reInitActiveSelectGroups (index) {
        let i = index ? index : 1;
        //console.log(index);
        //console.log(i);

        console.log(this.activeSelects);
        for (i; i < this.activeSelectGroup.length; i++) {
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
        console.log(this.activeSelects);
        console.log(this.activeSelectGroup);
         /*console.log(this.activeSelects);*/
    }

   /* getActiveSelectGroups () {
            this.isInit ? this.reInitActiveSelectGroups() : this.isInit = true;

            return this.activeSelectGroup;
    }*/

   /* onSelect (index) {
        //console.log(this);
        //this.selectIsChanged = true;

        this.reInitActiveSelectGroups(index);
    }*/

    search () {

    }
}

const searchFormComponent = {
    template: require('./search-form-tmpl.html'),
    controller: SearchFormController
};

export default searchFormComponent;


/*
.component('searchForm', {
    template: require('./../../tmpl/search-form-tmpl.html'),
    controller: function(searchFormData) {
        this.selects = searchFormData.selectsData;
        this.activeSelects = [];
        this.activeSelectGroup = [];
        this.selectIsChanged = false;
        this.searchAutocomplete = {
            value: '',
            getSimilarValue: (value) => {
                console.log(value);
                //let val = value;
                //val.json.stringify;

                return searchFormData.searchData;
            }
        };
        Object.defineProperty(this, "selectExperimental", {
            get: (() => {
                var counter = 0;
                return () => {
                    //console.log(this.selectIsChanged);
                    //console.log(counter);
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
        this.initActiveSelects();


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

                /!*console.log(this.activeSelectGroup[i][0]);*!/
            }
            /!*console.log(this.activeSelectGroup);
             console.log(this.activeSelects);*!/
        };
        this.onSelect = () => {
            this.selectIsChanged = true;
        };
        this.getActiveSelectGroups = (() => {
            let init = false;
            return () => {
                init ? this.reInitActiveSelectGroups() : init = true;

                return this.activeSelectGroup;
            }
        })();
        this.search = () => {

        };

    }
})*/