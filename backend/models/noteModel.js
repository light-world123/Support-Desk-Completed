const mongoose = require('mongoose')
const User = require('./userModel')

// Define schema for a Note Document
const noteSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    ticket: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Ticket'
    },
    text: {
        type: String,
        required: [true, 'Please add some text'],
    },
    isStaff: {
        type: Boolean,
        required: false
    },
    staffId: {
        type: String,
    }
},
{
    timestamps: true

}

)

// create a model based on schema
const Note = mongoose.model('Note', noteSchema)

module.exports = Note