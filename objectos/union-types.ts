

(() => {
    type Hero = {
        name: string,
        edad: number,
        powers: string[],
        getNombre?: () => string,
    }

    let myCustomVariable: (string | number | Hero) = 'Andres';
    console.log(myCustomVariable)

    myCustomVariable = {
        name: 'Bruce',
        edad: 43,
        powers: ['Ninguno']
    };

    console.log(typeof myCustomVariable)
})();