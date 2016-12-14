class AutocompleteController {
    constructor () {
        this.value = this.value || '';
        this.isSelected = false;
        
        console.log(this.placeholder);
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
        getSimilarValue: '<',
        placeholder: '<?'
    },
    controller: AutocompleteController
};

export default autocompleteComponent;