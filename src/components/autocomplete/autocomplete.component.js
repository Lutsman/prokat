class AutocompleteController {
    constructor () {
        this.value = this.value || '';
        this.isSelected = false;
        
        //console.log(this.holder);
    }

    setValue (name) {
        this.value = name;
        this.isSelected = true;
    }

    onValueChange () {
        this.isSelected = false;
        this.similarValues = this.getSimilarValue(this.value);


        //console.dir(this.onChange);
        //console.log(typeof this.onChange === 'function');

        if (typeof this.onChange === 'function') {
            this.onChange();
        }
    }
}

const autocompleteComponent = {
    template: require('./autocomplete-tmpl.html'),
    bindings: {
        value: '=',
        getSimilarValue: '<',
        holder: '<',
        onChange: '&?'
    },
    controller: AutocompleteController
};

export default autocompleteComponent;