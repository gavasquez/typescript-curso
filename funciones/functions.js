"use strict";
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activarBatiSignal = function () {
        return 'Activate';
    };
    console.log(typeof activarBatiSignal);
    var heroName = returnName();
})();
