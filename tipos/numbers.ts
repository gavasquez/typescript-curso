( () => {
  let avengers = 10;
  console.log( avengers );
  const villanos: number = 20;
  if ( avengers < villanos ) {
    console.log( 'Estamos en problemas' );
  } else {
    console.log( 'Nos salvamos' );
  }

  /* avengers = 123 */
  avengers = Number('55')

  console.log({avengers})
} )();