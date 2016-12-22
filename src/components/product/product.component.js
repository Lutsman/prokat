class ProductController {
    constructor () {
        this.isHiddenAppNav = true;
    }
}

const ProductComponent = {
    template: require('./product-tmpl.html'),
    controller: ProductController
};

export default ProductComponent;