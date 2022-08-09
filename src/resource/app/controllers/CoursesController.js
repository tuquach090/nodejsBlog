const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");


class CoursesController {

    /* [GET] /courses/create */
    create(req, res, next) {
        res.render("courses/create");
    }
    /* [POST] /courses/add */
    store(req, res, next) {
        let data = req.body;
        const course = new Course(data);

        course.save()
            .then(() => {
                res.redirect("/");
            });
    }
    /* [GET] /courses/show/:slug */
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => res.render('courses/show', { course: mongooseToObject(course) }))
            .catch(next);
    }

    /* [GET] /courses/create */
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render("courses/edit", { course: mongooseToObject(course) }))
            .catch(next);
    }

    /* [PUT] /courses/:id */
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
        .then(()=> res.redirect("/me/stored/courses"))
        .catch(next);
    }


}


module.exports = new CoursesController();