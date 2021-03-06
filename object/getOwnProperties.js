//定义多个属性
let book = {};
Object.defineProperties(book, {
    year_: { value: 2017 },
    edition: { value: 1, writable: true },
    year: {
        get() {
            return this.year_;
        },
        set(newValue) {
            if (newValue > 2017) {
                this.year_ = newValue;
                this.edition += newValue - 2017;
            }
        }
    }
});

console.log(Object.getOwnPropertyDescriptors(book))