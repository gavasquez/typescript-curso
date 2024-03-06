"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
