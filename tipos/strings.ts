( () => {

  const batman: string = 'Batman';
  const robin: string = "Robin";
  const volcanNegro: string = `Heroe: Volcan Negro`;

  const abc = 123;

  console.log( `I'm ${ batman } - ${ abc }` );

  console.log(batman[10]?.toUpperCase() || 'No esta presente')

} )();