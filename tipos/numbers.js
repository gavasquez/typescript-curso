"use strict";
(function () {
    var avengers = 10;
    console.log(avengers);
    var villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    /* avengers = 123 */
    avengers = Number('55');
    console.log({ avengers: avengers });
})();
