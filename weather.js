const apiProxy = "https://cors-anywhere.herokuapp.com/"
const apiURL = "http://api.openweathermap.org/data/2.5/weather"
const apiKey = "ad57da1720ec07b47db8b59c86aa8c0f"

let debug = null

function getLocation(position){
  let coord = position.coordinates;


figWeather(coord.latitude, coord.longitude)
}

function figWeather (latitude, longitude){
  let values = {lat: latitude, lon: longitude, appid: apiKey}
  let queryString = queryBuilder(values)
  
  getWeather(queryString) 
}

function getWeather (queryString){
  let request = new XMLHttpRequest()
}

 //talks to the API
request.open("GET", apiProxy + apiURL, queryString, true)


//fires when the request is complete
//update the DOM
request.onload = function () {
    let weatherDiv = document.getElementById("weather")
    let response = JSON.parse(request.response)
    console.log(response.weather)
    
 // debug = response
    weatherDiv.innerHTML = " Weather today in : " + response.name + " "
      + " Description : " + response.weather[0].description
      + " Temperature (Kelvin): "+ response.main.temp
      + " Minimum Temperature (Kelvin) : "+ response.main.temp_min
      + " Maximum Temperature (Kelvin) : "+ response.main.temp_max
  }

  // fires if something goes wrong
  request.error = function (errorObject) {
    console.log("broken :(")
    console.log(errorObject)
  }
    
   // send the request!
  request.send()

function queryBuilder(queryObj){
  let holder = []
  // loop through queryObj key value pairs
  for(let key in queryObj){
   
 let convert = `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key])}`
   
    holder.push(convert)
  }

    
    
    




