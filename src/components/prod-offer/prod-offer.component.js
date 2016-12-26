class ProdOfferController {
    constructor () {

    }
    getCurrency () {
        return String.fromCharCode(this.data.currency);
    }
}

const prodOfferComponent = {
    bindings: {
        data: '<'
    },
    template: require('./prod-offer-tmpl.html'),
    controller: ProdOfferController
};
export default prodOfferComponent;