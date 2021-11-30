const fastify = require("fastify")({ logger: true });
const fastifyEnv = require("fastify-env");

fastify.register(require("fastify-swagger"), {
  exposeRoute: true,
  routePrefix: "/docs",
  swagger: {
    info: { title: "fastify-api" },
  },
});
const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 5000,
    },
  },
};

const options = {
  confKey: "config",
  schema: schema,
  dotenv: {
    path: `${__dirname}/.env`,
    debug: true,
  },
};

fastify.register(fastifyEnv, options);

fastify.register(require("./routes/cities"));

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
