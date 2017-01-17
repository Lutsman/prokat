import angular from 'angular';

class NavbarController {
    constructor ($scope, $window, $element) {
        this.isHidden = this.isHidden || false;
        this.isHiddenApp = this.isHiddenApp || false;
        this.$window = $window;
        this.$scope = $scope;
        this.$element = $element;

        angular.element(this.$window).on('scroll', this.scrollFunc());
    }

    scrollFunc ()  {
        let prevScrollPos = 0;

        return () => {
            /*console.log(scrollPos++);
             console.log(this);*/

            let currScrollPos = this.$window.scrollY;
            let scrollDiff = currScrollPos - prevScrollPos;
            //let scrollDirection = 0;
            let isChanged = false;
            let offset = 631 - this.$element[0].getBoundingClientRect().height;

            prevScrollPos = currScrollPos;

            //console.log(prevScrollPos);
            //console.log(currScrollPos);


            if (scrollDiff > 0 && !this.isHidden && currScrollPos > offset) {
                //scrollDirection = 1;
                this.isHidden = true;
                isChanged = true;

                if (typeof this.callback === 'function') {
                    this.callback({hide: true});
                }
                //console.log($element[0].offsetHeight);
            } else if (scrollDiff < 0  && this.isHidden) {
                //scrollDirection = -1;
                this.isHidden = false;
                isChanged = true;
                //console.log($element[0].offsetHeight);

                if (typeof this.callback === 'function') {
                    this.callback({hide: true});
                }
            }

            //console.log(scrollDirection);

            if (isChanged) {
                this.$scope.$apply();
                //console.log(offset);
                //console.log(document.querySelector('navbar').getBoundingClientRect().height);
                //console.log(document.querySelector('navbar').offsetHeight);
                //console.log($element[0].getBoundingClientRect().height);
                //console.log('changed');
                //console.log($element[0].offsetHeight);
            }
        }

    }
}

//NavbarController.$inject = ['$scope', '$window', '$element'];

const navbarComponent = {
    bindings: {
        callback: '&?',
        isHidden: '=?',
        isHiddenApp: '=?'
    },
    template: require('./navbar-tmpl.html'),
    controller: NavbarController
};

export default navbarComponent;