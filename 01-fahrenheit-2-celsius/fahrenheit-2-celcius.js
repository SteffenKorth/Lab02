let fahrenheit2celcius = (fahrenheit) => {
    celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

let celcius2fahrenheit = (celcius) => {
    fahrenheit = (celcius * 9 / 5) +32;
    return fahrenheit;
}

module.exports = { fahrenheit2celcius, celcius2fahrenheit};
