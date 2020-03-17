var express = require("express");
var cors = require('cors')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')

const routes = require("./routes/Users");
const apiRoutes = require("./routes/api-routes");
const drinks = require("./routes/Drinks");
const path = require('path');


var PORT = process.env.PORT || 3001;
var app = express();

// Define middleware here
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.use(routes);
app.use(apiRoutes);
app.use(drinks);

const mongoURI = 'mongodb://localhost:27017/buzzBuddy'

mongoose
  .connect(
    process.env.MONGODB_URI||
    mongoURI,
    { useNewUrlParser: true }
  )
  .catch(err => console.log(err))


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
