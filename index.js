require('dotenv').config()

const express = require('express');
const connectDB = require('./src/config/db.config');
const port = process.env.PORT;

// Connect Database
connectDB();

const app = express();

app.use(express.json());

app.use('*', require('./src/controller'));


app.listen(port, () => {
  console.log(`Express server is listening on ${port}`);
});
