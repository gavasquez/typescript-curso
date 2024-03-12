"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName !== null && lastName !== void 0 ? lastName : 'no lastname').toUpperCase();
        }
        return "".concat(firstName, " ").concat(lastName !== null && lastName !== void 0 ? lastName : 'no lastname').toLowerCase();
    };
    var name = fullName('Andres', 'Vasquez', true);
    console.log({ name: name });
})();
//# sourceMappingURL=args-default.js.map