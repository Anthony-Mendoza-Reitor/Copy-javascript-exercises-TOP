const convertToCelsius = function(tempFar) {
  tempCel = ((5/9)*(tempFar - 32));
  return (Math.round(tempCel * 100));
};

const convertToFahrenheit = function(tempCel) {
  tempFar = ((9/5)*(tempCel + 32));
  return (Math.round(tempFar * 100));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
