

(() => {


    const fullName = (
        firstName: string,
        lastName?: string,
        upper: boolean = false): string => {

        if (upper) {
            return `${firstName} ${lastName ?? 'no lastname'}`.toUpperCase();
        }
        return `${firstName} ${lastName ?? 'no lastname'}`.toLowerCase();
    }

    const name = fullName('Andres', 'Vasquez', true);
    console.log({ name })


})()