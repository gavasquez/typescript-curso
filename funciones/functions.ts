


(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activarBatiSignal = (): string => {
        return 'Activate';
    }

    console.log(typeof activarBatiSignal)

    const heroName = returnName();
})();