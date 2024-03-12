(() => {

    type Hero = {
        name: string,
        edad: number,
        powers: string[],
        getNombre?: () => string,
    }
    


    let flash: Hero = {
        name: 'Barry Allen',
        edad: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        edad: 35,
        powers: ['Super velocidad', 'Super poderes']
    }


    console.log(flash);
})();