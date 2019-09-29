var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    comment: { type: String, required: true },
    user: { type: Schema.Types.ObjectId },
    moviename: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    movie: { type: Schema.Types.ObjectId },
    posted_at: { type: Date, required: true }

})
module.exports = mongoose.model("Comment", commentSchema)