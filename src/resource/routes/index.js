const newsRouter = require("./news");
const siteRoute = require("./site");

function route(app) {
    // Sủ dụng app.use để gọi qua router (sd app.get để gọi trực tiếp)
    app.use("/news", newsRouter);

    app.use("/", siteRoute);
}

module.exports = route;