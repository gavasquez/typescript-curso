

( () => {
  let avenger: any = 123;
  let existes;
  let power;

  avenger = 'Doctor Strange';
  /* console.log( avenger.charAt() ); */
  console.log( (avenger as string).charAt(0) );
  avenger = 150.5422;
  console.log( (<number>avenger).toFixed( 2 ) );
} )();