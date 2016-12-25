class ProdOfferController {
    constructor () {

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