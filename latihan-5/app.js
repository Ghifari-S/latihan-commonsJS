const { celsiusToFahrenheit } = require('./conversion');
const { kuadrat } = require('./mathUtils');

const suhuCelsius = 30;
const suhuFahrenheit = celsiusToFahrenheit(suhuCelsius);
console.log(`Suhu dalam Fahrenheit: ${suhuFahrenheit}`);

const hasilKuadrat = kuadrat(suhuFahrenheit);
console.log(`Kuadrat dari suhu dalam Fahrenheit: ${hasilKuadrat}`);
