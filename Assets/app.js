const city = document.getElementById('#search');
const api = 'https://api.openweathermap.org/data/2.5/forecast?q=Hartford&units=metric&appid=c5fd94db03643d3ada48616c3ca850e5';
const dayonetemp;
const daytwotemp;
const daythreetemp;
const dayfourtemp;
const dayfivetemp;
const daysixtemp;
// console.log(value.list)


$.ajax({
  url: api , 
  method: 'GET'
}).then(function(response){
  // console.log(response)
  dayonetemp = response.list[0];
  daytwotemp = response.list[1];
  daythreetemp = response.list[2];
  dayfourtemp = response.list[3];
  dayfivetemp = response.list[4];
  daysixtemp = response.list[5];
  // console.log(dayonetemp)
  const {temp, humidity, feels_like} = dayonetemp.main;
  const {speed} = dayonetemp.wind; //const speed = dayonetemp.wind.speed; 
  
// console.log(speed)
  // console.log(document.getElementById('bigtemp'))
  
  document.getElementById('bigtemp').innerHTML = `
    <div>Temperature: ${temp} Celcius</div>
    <div>Humidity: ${humidity}%</div>
    <div>Wind Speed: ${speed}KM/H</div>
    <div>Feels like: ${feels_like} Celcius</div>
  `;

  // console.log('test', document.getElementById('bigtemp'), document.getElementById('bigtemp').innerHTML)
  console.log(dayonetemp, temp, humidity)
});