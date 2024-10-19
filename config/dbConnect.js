const mongoose = require('mongoose');
require("dotenv").config();

// for handling mongoDB error
mongoose.set("strictQuery", false);

// mongoDB connect
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  })
  .catch((err) => {
    console.log(`Database Connection Failed: ${err}`);
  });
