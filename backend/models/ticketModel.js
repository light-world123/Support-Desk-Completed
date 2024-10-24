const mongoose = require('mongoose')
const User = require('./userModel')

// Define schema for a Ticket Document
const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['iPhone', 'Mackbook Pro', 'HP Elitebook', 'HP Probook'],
    },
    description: {
        type: String,
        required: [true, 'Please describe the issue']
    },
    status: {
        type: String,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
},
{
    timestamps: true

}

)

// create a model based on schema
const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket