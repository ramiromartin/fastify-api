const kelvinToCelcius = (kelvin) => {
  return Math.ceil(+kelvin - 273.15);
};

const isGreaterThan = (temp) => +kelvinToCelcius(temp) > 15;

module.exports = {
  kelvinToCelcius,
  isGreaterThan,
};
