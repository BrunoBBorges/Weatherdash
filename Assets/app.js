$.get( "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c5fd94db03643d3ada48616c3ca850e5}", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
   
  });

  