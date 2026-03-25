const cityInput = document.querySelector("#cityInput");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const btn = document.querySelector("#searchBtn");
const img = document.querySelector('#icon');

async function getWeather(city){
	try{
		const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8ff011f49cd00fec9b7dc0fda940c2f6&units=metric");
		const data = await response.json();
		if(data.cod === "404")
		{
	    	document.querySelector('#description').textContent = "City not found";
	    	return;
		}
		img.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
		document.querySelector('#city-name').textContent = city;
		document.querySelector('#temp').textContent = data.main.temp + "C";
		document.querySelector('#description').textContent = data.weather[0].description;
		humidity.textContent = "Humidity : " + data.main.humidity + "%";
		wind.textContent = "Wind-speed : " + data.wind.speed;
	}
	catch(error){
		console.log(error)
	}
}

cityInput.addEventListener("keydown",function(e){
	if(e.key == "Enter"){
		city = cityInput.value;
		getWeather(city);
	}
})

btn.addEventListener("click", function(){
	city = cityInput.value;
	getWeather(city);
});
