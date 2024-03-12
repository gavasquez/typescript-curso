"use strict";
(function () {
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    var Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["minima"] = 0] = "minima";
        Fuerza[Fuerza["media"] = 1] = "media";
        Fuerza[Fuerza["maxima"] = 5] = "maxima";
        Fuerza[Fuerza["supermaxima"] = 100] = "supermaxima";
    })(Fuerza || (Fuerza = {}));
    console.log(Fuerza);
    var fuerzaFlash = Fuerza.maxima;
    var fuerzaSuperman = Fuerza.supermaxima;
    var fuerzaBatman = Fuerza.media;
    var fuerzaAcuaman = Fuerza.minima;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app_1.js.map