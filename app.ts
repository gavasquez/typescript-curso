(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza { minima = 0, media, maxima = 5, supermaxima = 100}
    console.log(Fuerza)
    const fuerzaFlash: Fuerza = Fuerza.maxima;
    const fuerzaSuperman: Fuerza = Fuerza.supermaxima;
    const fuerzaBatman: Fuerza = Fuerza.media;
    const fuerzaAcuaman: Fuerza = Fuerza.minima;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  