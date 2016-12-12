class SearchFormController {
    constructor (searchFormData) {
        this.selects = searchFormData.selectsData;
        this.activeSelects = [];
        this.activeSelectGroup = [];
        this.selectIsChanged = false;

        Object.defineProperty(this, "selectsArr", {
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

        this.getActiveSelectGroups = this.getActiveSelectGroupsInit();
        /*this.selectedArr = this.selects.map((item) => {
         return item.options[0];
         });*/
        /*this.searchKeyword = '';
         this.searchSelected = false;
         this.searchPotentialFields = searchFormData.searchData;
         this.setSearch = (name) => {
         this.searchKeyword = name;
         this.searchSelected = true;
         };*/

        this.initActiveSelects();
        //console.dir(this.getActiveSelectGroups());
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

    reInitActiveSelectGroups () {
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
    }

    getActiveSelectGroupsInit () {
        let init = false;
        return () => {
            init ? this.reInitActiveSelectGroups() : init = true;

            return this.activeSelectGroup;
        }
    }

    onSelect () {
        this.selectIsChanged = true;
    }

    search () {

    }


}

const searchFormComponent = {
    template: require('./search-form-tmpl.html'),
    controller: SearchFormController
};

export default searchFormComponent;