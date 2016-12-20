/*class SearchAutocomplete {
 constructor (searchFormData) {
 this.value = '';
 }

 getSimilarValue (value) {
 console.log(value);
 //let val = value;
 //val.json.stringify;

 return this.searchFormData.searchData;
 }
 }*/

class SearchFormController {
    constructor (searchFormData) {
        this.selects = searchFormData.selectsData;
        this.activeSelects = [];
        this.activeSelectGroup = [];
        this.searchAutocomplete = {
            value: '',
            placeholder: 'В Ростове-на-Дону',
            getSimilarValue: (value) => {
                console.log(value);

                return searchFormData.searchData;
            }
        };

        this.initActiveSelects();
    }

    initActiveSelects () {
        let activeSelectGroup = this.selects;

         do {
            this.activeSelectGroup.push(activeSelectGroup);
            this.activeSelects.push(activeSelectGroup[0]);
            activeSelectGroup = activeSelectGroup[0].subCat;
        } while (activeSelectGroup)
    }

    reInitActiveSelectGroups (newActiveSelect, index) {
        let i = index + 1;
        this.activeSelects[index] = newActiveSelect;

        for (i; i < this.activeSelectGroup.length; i++) {
            this.activeSelectGroup[i] = this.activeSelects[i-1].subCat;
            this.activeSelects[i] = this.activeSelectGroup[i][0];
        }
    }

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