type Size = ''|'S'|'M'|'L';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) {}

    isProductReady(): boolean {
        // No DRY
        // if( !this.name.length ) { throw Error('The name is required.'); }
        // if( !this.price ) { throw Error('The price is required.'); }
        // if( !this.size.length ) { throw Error('The size is required.'); }

        for ( const key in this) {
            // console.log(typeof(this[key]));
            switch (typeof(this[key])) {
                case 'string':
                    if( !(<string><unknown>this[key]).length ) { throw Error(`The ${key} is required.`); }
                break;
                case 'number':
                    if( !(<number><unknown>this[key]) ) { throw Error(`The ${key} is required.`); }
                break;
                default:
                    throw Error(`Type ${typeof(this[key])} is unsupported.`);
            }
        }
        return true;
    }

    toString() {
        if( !this.isProductReady() ) { return; }
        return `Product: ${this.name} - Price: ${this.price} - Size: ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Blue Pants', 20, 'M');
    console.log( bluePants.toString() );
})();