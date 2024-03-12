"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName !== null && lastName !== void 0 ? lastName : 'no lastname');
    };
    var name = fullName('Andres');
    console.log({ name: name });
})();
//# sourceMappingURL=args-opcional.js.map