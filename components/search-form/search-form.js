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