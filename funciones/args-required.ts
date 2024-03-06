

(() => {


    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`
    }

    const name = fullName('Andres', 'Vasquez');
    console.log(name)


})()