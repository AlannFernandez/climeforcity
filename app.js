var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var preasure = document.querySelector('.preasure');
var tempMax = document.querySelector('.temp-max');
var tempMin = document.querySelector('.temp-min');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374&lang=es')
.then(response => response.json())

.then(data => {
  console.log(data)
  var tempValue = data['main']['temp'];
  var humValue = data['main']['humidity'];
  var pressValue = data['main']['pressure'];
  var tempMaxValue = data['main']['temp_max'];
  var tempMinValue = data['main']['temp_min'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc : "+descValue  ;
  temp.innerHTML = "Temp : "+tempValue;
  tempMax.innerHTML = "Max : "+tempMaxValue;
  tempMin.innerHTML = "Min : "+tempMinValue;  
  humidity.innerHTML = "Humedad : "+humValue;
  preasure.innerHTML = "Presíon : "+pressValue;
  input.value ="";

})

.catch(err => alert("Revisa el nombre de la ciudad"));
})
