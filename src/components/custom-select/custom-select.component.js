class CustomSelectController {
    constructor () {
        this.isOpen = false;
    }

    setSelection (newSelect) {
        let index = this.index;

        this.selectedOption = newSelect;
        this.isOpen = false;

        if(typeof this.customFunc === 'function') {
            this.customFunc({
                newActiveSelect: newSelect,
                index: index
            });
        }
    }
}

const customSelectComponent = {
    bindings: {
        options: '<',
        selectedOption: '=',
        customFunc: '&?',
        index: '<?'
    },
    template: require('./custom-select-tmpl.html'),
    controller: CustomSelectController
};

export default customSelectComponent;