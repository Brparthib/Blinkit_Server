const fastify = require("fastify");
require("dotenv").config();
require("./config/dbConnect");

const start = async () => {
  const app = fastify();
  const PORT = process.env.PORT || 3000;
  app.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Blinkit Started on ${address}`);
    }
  });
};

start();
