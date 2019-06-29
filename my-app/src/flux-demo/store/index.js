class Store {
    constructor (data) {
        this.sourceData = data;
        this.count = 0;
    }

    doIncrement () {
        this.count++;
    }
};

export default new Store();
