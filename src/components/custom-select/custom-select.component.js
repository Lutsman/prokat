class CustomSelectController {
    constructor () {
        this.isOpen = false;
        /*if(typeof this.customFunc === 'function') {
         console.log('func run');
         this.customFunc();
         }*/

        //console.dir(this.options);
    }

    setSelection (newSelect) {
        this.selectedOption = newSelect;
        this.isOpen = false;

        //console.dir(this.customFunc);
        //console.log(typeof this.customFunc);

        if(typeof this.customFunc === 'function') {
            //console.log('func run');
            this.customFunc();
        }
    }
}

const customSelectComponent = {
    bindings: {
        options: '<',
        selectedOption: '=',
        customFunc: '=?'
    },
    template: require('./custom-select-tmpl.html'),
    controller: CustomSelectController
};

export default customSelectComponent;