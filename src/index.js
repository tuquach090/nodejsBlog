const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require("./resource/routes");

// Config use file
app.use(express.static(path.join(__dirname, 'public')));
// HTTP loger
// app.use(morgan("combined"));
// Template Engine
app.engine("hbs", engine({
    extname: ".hbs"
}));
// Midlewere get request post
app.use(express.urlencoded({
    extended: true
}));
// Set View Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resource/views"));


// Route
route(app);


app.listen(port, (req, res) => console.log(`Example app listening at Http://localhost:${port}`));