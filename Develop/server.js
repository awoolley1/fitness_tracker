const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes.js")(app)
require("./routes/htmlRoutes.js")(app)

const url = 'mongodb://localhost/workout'

const db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected', url)
})
db.on('error', err => {
  console.error('connection error', err)
})

mongoose.connect(process.env.MONGODB_URI || url, {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
