const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("user", userSchema);
