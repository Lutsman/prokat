class MotionController {
    constructor () {

    }
}

const motionComponent = {
    bindings: {
        data: '<'
    },
    template: require('./motion-tmpl.html'),
    controller: MotionController
};
export default motionComponent;