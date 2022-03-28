function celciusToFahrenheit(celcius){
    var Fahrenheit = (celcius * 9/5) + 32;
    console.log(Fahrenheit);
}
function fahrenheitTocelcius(Fahrenheit){
    var celcius = (Fahrenheit - 32) *(5/9);
    console.log(celcius);
}
console.log("convertion from celcius to fahrenheit:- ", celciusToFahrenheit(32));
console.log("convertion from fahrenheit to celcius:- ", fahrenheitTocelcius(32));