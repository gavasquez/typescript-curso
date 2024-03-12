"use strict";
(function () {
    var fullName = function (fistName) {
        var restArg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArg[_i - 1] = arguments[_i];
        }
        return "".concat(fistName, " ").concat(restArg.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
//# sourceMappingURL=args-rest.js.map