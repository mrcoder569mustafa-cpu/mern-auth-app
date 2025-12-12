const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // ✅ Correct

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model("accounts", UserSchema);
module.exports = UserModel;
