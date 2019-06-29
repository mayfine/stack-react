/**
 * @file 数据维护
 * @function doIncrement 加法操作
 * @function doDecrement 减法操作
 */

class Store {
    constructor () {
        this.count = 0;
    }

    getData () {
        return this.count;
    }

    doIncrement () {
        this.count++;
    }

    doDecrement () {
        this.count--;
    }
};

export default new Store();
