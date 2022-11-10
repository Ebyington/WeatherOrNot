const searchTxt = document.querySelectorAll("#searchbar");
const searchBtn = document.getElementById("searchBtn");
const resultCard = document.getElementsByClassName("cityinfo");
const forecast = document.getElementById("5day");
const history = document.getElementsByClassName("history")
const key = '7ad9897fb3f13afcc3b961ee556c9b02'

function getWeather() {
    let searchInput = searchTxt.value;
    
    localStorage.setItem("city", searchInput);
    
    fetch('api.openweathermap.org/data/2.5/weather?q=${searchTxt}&appid=${key}&units=imperial')
      .then(function(response){
        return(response.json())
      })

    fetch('api.openweathermap.org/data/2.5/forecast?q=${searchTxt}&appid=${key}&units=imperial')
      .then(function(response){
        return(response.json())
      })


    


    list.wind.speed    
list.main.temp
    list.main.humidity


}

searchBtn.addEventListener('click', getWeather);