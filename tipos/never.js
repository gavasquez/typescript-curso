"use strict";
(function () {
    var error = function (mensaje) {
        throw new Error('Message');
    };
    error('hola');
})();
