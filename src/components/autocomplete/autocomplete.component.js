class AutocompleteController {
    constructor () {
        this.value = this.value || '';
        this.isSelected = false;
    }

    setValue (name) {
        this.value = name;
        this.isSelected = true;
    }

    onValueChange () {
        this.isSelected = false;
        this.similarValues = this.getSimilarValue(this.value);
    }
}

const autocompleteComponent = {
    template: require('./autocomplete-tmpl.html'),
    bindings: {
        value: '=',
        getSimilarValue: '<'
    },
    controller: AutocompleteController
};

export default autocompleteComponent;