const mongoose = require("mongoose")

const File = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    Aadhar:{
        type: String,
        required: true
    },
    password: String,

    path:{
        type: String,
        required: true
    },
    originalName:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("File",File)