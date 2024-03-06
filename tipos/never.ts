

(()=> {

    const error = (mensaje: string):never => {
        throw new Error('Message');
    }

    error('hola');
})();