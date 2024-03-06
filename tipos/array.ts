( () => {

  //const numbers: ( string | number | boolean )[] = [ 1, 2, 3, 4, 5, '6', 7, 8, 9 ];
  const numbers: number[] = [ 1, 2, 3, 4, 5, 7, 8, 9 ];

  numbers.push( 15 );
  console.log( numbers );

  const villians = [ 'Omega rojo', 'Duende Verde' ];

  villians.forEach( v => console.log( v.toUpperCase() ) );

} )();