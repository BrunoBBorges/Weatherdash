const city = document.getElementById('#search');
const api = 'https://api.openweathermap.org/data/2.5/forecast?q=Hartford&units=metric&appid=c5fd94db03643d3ada48616c3ca850e5';
let dayonetemp;
let daytwotemp;
let daythreetemp;
let dayfourtemp;
let dayfivetemp;
let daysixtemp;

// console.log(value.list)
// savesearch.addEventListener('click', savesearch)        Cant seem to get this to work going to submit without search button and static Hartford location
// function savesearch(){
  
//   const city = document.getElementById('#citysearch').value;
//   console.log(city)
// }
// console.log(savesearch)

$.ajax({
  url: api , 
  method: 'GET'
}).then(function(response){
  // console.log(response)
  
  let newHtml = '';
  for(let i = 0; i < 5; i++) {
    const dayTemp = response.list[i];
    
    const {temp, humidity} = dayTemp.main;
    newHtml += `
      <div class="card blue-grey white-text col s12 m6 l3">
        <div>Temperature: ${temp} Celcius</div>
        <div>Humidity: ${humidity}%</div>
      </div>
    `;
  }

  const {temp, humidity, feels_like} = response.list[0].main;
  const {speed} = response.list[0].wind; //const speed = dayonetemp.wind.speed; 
  
  document.getElementById('rowhtml').innerHTML = newHtml;
  document.getElementById('bigtemp').innerHTML = `
    <div>Temperature: ${temp} Celcius</div>
    <div>Humidity: ${humidity}%</div>
    <div>Wind Speed: ${speed}KM/H</div>
    <div>Feels like: ${feels_like} Celcius</div>
  `;

  // console.log('test', document.getElementById('bigtemp'), document.getElementById('bigtemp').innerHTML)
  // console.log(dayonetemp, temp, humidity)
});