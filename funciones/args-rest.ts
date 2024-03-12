

(() => {


    const fullName = ( fistName: string, ...restArg: string[]):string => {
        return `${fistName} ${restArg.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();