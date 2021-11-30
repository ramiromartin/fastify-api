const got = require("got");
const { kelvinToCelcius, isGreaterThan } = require("../utils/helpers");

const getCity = async (req, reply) => {
  const { city } = req.params;
  const response = await got(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  const body = JSON.parse(response.body);

  reply.send({
    isGreaterThanFifteen: isGreaterThan(kelvinToCelcius(body.main.temp)),
    cityName: city,
    temperature: kelvinToCelcius(body.main.temp),
    message: `The temperature in ${city} city is ${kelvinToCelcius(
      body.main.temp
    )} degrees (celcius)`,
  });
};

module.exports = {
  getCity,
};
