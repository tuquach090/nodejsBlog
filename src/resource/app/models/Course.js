const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);


const Course = new Schema({
    name: { type: String, maxLenght: 255 },
    description: { type: String, maxLenght: 600, required: true },
    images: { type: String, maxLenght: 255 },
    video_id: { type: String, maxLenght: 255 },
    level: { type: String, maxLenght: 255 },
    slug: { type: String, slug: "name", unique: true }
}, { timestamps: true });

module.exports = mongoose.model("Course", Course);