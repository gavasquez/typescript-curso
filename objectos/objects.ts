

(() => {



    let flash: {
        name: string,
        edad: number,
        powers: string[],
        getNombre?: () => string,
    } = {
        name: 'Barry Allen',
        edad: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: {
        name: string,
        edad: number,
        powers: string[],
        getNombre?: () => string,
    } = {
        name: 'Clark Kent',
        edad: 35,
        powers: ['Super velocidad', 'Super poderes']
    }


    console.log(flash);
})();