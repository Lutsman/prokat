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
        let index = this.index;

        //this.customFunc();
        //console.dir(this.customFunc);
        //console.log(typeof this.customFunc);
        //console.dir(this.customFunc);

        if(typeof this.customFunc === 'function') {
            console.log('func run');
            console.log(newSelect);
            //console.log(index);
            this.customFunc({index: index});
        }
    }
}

const customSelectComponent = {
    bindings: {
        options: '<',
        selectedOption: '=',
        customFunc: '&',
        index: '<?'
    },
    template: require('./custom-select-tmpl.html'),
    controller: CustomSelectController
};

export default customSelectComponent;