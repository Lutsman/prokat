component('customSelect', {
    bindings: {
        options: '<',
        selectedOption: '=',
        customFunc: '<'
    },
    templateUrl: 'tmpl/custom-select-tmpl.html',
    controller: function() {
        this.isOpen = false;
        this.setSelection = (newSelect) => {
            this.selectedOption = newSelect;
            this.isOpen = false;
            
            //console.dir(this.customFunc);
            //console.log(typeof this.customFunc);
            
            if(typeof this.customFunc === 'function') {
                //console.log('func run');
                this.customFunc();
            }
        };
        
        /*if(typeof this.customFunc === 'function') {
         console.log('func run');
         this.customFunc();
         }*/
        
        //console.dir(this.options);
    }
});