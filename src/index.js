const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require('express-handlebars');


const app = express();
const port = 3000;

// HTTP loger
app.use(morgan("combined"));

// Template Engine
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resource/views"));


app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});
app.listen(port, (req, res) => console.log(`Example app listening at Http://localhost:${port}`));