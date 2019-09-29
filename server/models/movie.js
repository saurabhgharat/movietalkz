var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var movieSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    film: { type: String, required: true },
    director: { type: String, required: true },
    starring: { type: String, required: true },
    company: { type: String, required: true },
    releasedate: { type: String, required: true },
    runningtime: { type: String, required: true },
    budget: { type: String, required: true },
    boxoffice: { type: String, required: true },
    poster: { type: String, required: true },
    rank: { type: Number },
    comment: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]

})
module.exports = mongoose.model("Movie", movieSchema, "movies")