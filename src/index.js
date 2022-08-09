const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const route = require("./resource/routes");
const db = require("./resource/config/db");
const methodOverride = require("method-override");
// Connect Db
db.connect();

// Config use file
app.use(express.static(path.join(__dirname, 'public')));


// HTTP loger
// app.use(morgan("combined"));


// Template Engine
app.engine("hbs", engine({
    extname: ".hbs",
    helpers: {
        sum: (a, b) => a + b,
    }
}));


// Midlewere get request post
app.use(express.urlencoded({
    extended: true
}));


// method override
app.use(methodOverride('_method'))

// Set View Engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));


// Route
route(app);


app.listen(port, (req, res) => console.log(`App listening at Http://localhost:${port}`));