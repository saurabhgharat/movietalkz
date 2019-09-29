var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    creation_dt: { type: Date, required: true }
});


userSchema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}
userSchema.methods.isValid = function (hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);

}
module.exports = mongoose.model("User", userSchema, "user");