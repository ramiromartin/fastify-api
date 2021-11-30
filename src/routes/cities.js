const { getCity } = require("../controllers/cities");

// City schema
const City = {
  type: "object",
  properties: {
    isGreaterThanFifteen: { type: "boolean" },
    cityName: { type: "string" },
    temperature: { type: "integer" },
    message: { type: "string" },
  },
};

const getCityOpts = {
  schema: {
    response: {
      200: City,
    },
  },
  handler: getCity,
};

function cityRoutes(fastify, options, done) {
  fastify.get("/cities/:city", getCityOpts);

  done();
}

module.exports = cityRoutes;
