const newsRouter = require("./news");
const siteRoute = require("./site");
const coursesRouter = require("./courses");
const meCouter = require("./me");

function route(app) {
    // Sủ dụng app.use để gọi qua router (sd app.get để gọi trực tiếp)
    app.use("/me", meCouter);
    app.use("/news", newsRouter);
    app.use("/courses", coursesRouter);

    app.use("/", siteRoute);
}

module.exports = route;