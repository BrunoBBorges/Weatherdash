var city = document.getElementById('#search');
var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&cnt=3&appid=c5fd94db03643d3ada48616c3ca850e5';



$.get( api, function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
   
  });

