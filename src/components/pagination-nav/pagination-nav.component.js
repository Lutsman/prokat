class PaginationNavController {
    constructor () {
        this.startPos = this.getStartPos();
        this.repeater = this.getRepeaterArr();
    }

    setCurrPage (index) {
        this.currPage = index;
        this.repeater = this.getRepeaterArr();
    }
    getStartPos () {
        return Math.floor(this.currPage / this.pageLimit) * this.pageLimit;
    }
    prev () {
        this.startPos -= this.pageLimit;
        this.repeater = this.getRepeaterArr();
    }
    next () {
        this.startPos += this.pageLimit;
        this.repeater = this.getRepeaterArr();
    }
    getRepeaterArr () {
        if (this.startPos >= this.pageCount) {
            this.startPos = this.pageCount - this.pageCount % this.pageLimit;
        } else if (this.startPos < 0) {
            this.startPos = 0;
        }

        let arr = [];
        let i = this.startPos;
        let length = i + this.pageLimit > this.pageCount ? this.pageCount : i + this.pageLimit;

        for (i; i < length; i++) {
            arr[i] = i + 1;
        }
        //this.startPos = i;

        //console.log(arr);

        return arr;
    }
}

const paginationNavComponent = {
    template: require('./pagination-nav-tmpl.html'),
    bindings: {
        currPage: '=',
        pageCount: '<',
        pageLimit: '<'

    },
    controller: PaginationNavController
};

export default paginationNavComponent;