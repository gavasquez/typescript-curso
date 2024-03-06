"use strict";
(function () {
    //const numbers: ( string | number | boolean )[] = [ 1, 2, 3, 4, 5, '6', 7, 8, 9 ];
    var numbers = [1, 2, 3, 4, 5, 7, 8, 9];
    numbers.push(15);
    console.log(numbers);
    var villians = ['Omega rojo', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
