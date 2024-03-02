const express = require("express");
require("dotenv").config();
const db = require("./db");
const app = express();
const cors = require("cors");
const bodyParser= require("body-parser")
const port = 7100;
const userRoutes = require('./routes/user.routes')
app.use(cors());
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( { extended: true } ) )

app.use("/api", userRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
