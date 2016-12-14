class PagefooterController {
    constructor(selectData) {
        this.langSelects = selectData.langSelectData;
        this.langSelected = this.langSelects[0];
        this.currencySelects = selectData.currencySelectData;
        this.currencySelected = this.currencySelects[0];
    }

    onChooseLang() {
        //console.log('lang choosed');
        //console.log(this);
    }
    onChooseCurrency() {
        //console.log('currency choosed');
        //console.log(this);
    }
}

const pagefooterComponent = {
    template: require('./pagefooter-tmpl.html'),
    controller: PagefooterController
};

export default pagefooterComponent;