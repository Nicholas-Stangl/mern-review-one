const mongoose = require("mongoose")


const ThingSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:[true, "First Name is required!"],
        minLength: [3, "First Name must be at least 3 chars"],
        maxLength: [30, "First Name exceeds max length 1000 chars"]
    },

    last_name:{
        type: String,
        required:[true, "Last Name is required!"],
        minLength: [3, "Last Name must be at least 3 chars"],
        maxLength: [30, "Last Name exceeds max length 1000 chars"]
    },

    graduation_date: {
        type: Date,
        required:[true, "Grad Date is required!"]
    },

    profilePic:{
        type: String,
    },

    numberOfBelts:{
        type: Number
    },

    isVeteran:{
        type: Boolean
    }


}, {timestamps:true})


const Thing = mongoose.model("Thing", ThingSchema );

module.exports = Thing;