(() => {

    function isRedFruit( fruit: string ): boolean {
        // return ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) ? true : false;
        return ['manzana', 'cereza', 'ciruela'].includes(fruit);
    }

    type FuitColor = 'red'|'yellow'|'purple'; // Tipos son exclusivamente de typescript
    function getFruitsByColor( color: string ): string[] {
        // switch ( color ) {
            // case 'red':
                // return ['manzana','fresa'];
            // case 'yellow':
                // return ['piña','banana'];
            // case 'purple':
                // return ['moras','uvas'];
            // default:
                // throw Error('the color must be: red, yellow, purple');
        // }
        const fruitsByColor = {
            red:    ['manzana','fresa'],
            yellow: ['piña','banana'],
            purple: ['moras','uvas']
        };

        if ( !Object.keys(fruitsByColor).includes(color) ) { throw Error('the color must be: red, yellow, purple'); }

        return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( ! isFirstStepWorking ) { return 'First step broken.'; }
        if( ! isSecondStepWorking ) { 'Second step broken.'; }
        if( ! isThirdStepWorking ) { return 'Third step broken.'; }
        return ( isFourthStepWorking ) ? 'Working properly!' : 'Fourth step broken.';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




