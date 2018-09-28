"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get("/fortune", replaceFortune);

}

function replaceFortune(result) {
  var fortune = result;
  $("#fortune-text").html(fortune);
}


$('#get-fortune-button').on('click', showFortune);
//Will run showFortune() when button is clicked.
//^Part of the page will refresh

// showFortune(); 
//^will run showFortune() every time you load or refresh the webpage.


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, showForecast);


    // TODO: request weather with that URL and show the forecast in #weather-info
}

function showForecast(result) {

  $("#weather-info").html(result.forecast);
//result is a dictionary, so you need to call the the key with .forecast

}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


