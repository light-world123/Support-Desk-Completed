const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Note = require('../models/noteModel')
const Ticket = require('../models/ticketModel')

// @desc Get note for a ticket
// @route GET/api/tickets/:ticketId/notes
// @access Private
const getNotes = asyncHandler(async (req, res)=>{
    //    Get user using id in the JWT

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.findById(req.params.ticketId)

    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorised')
    }

    const notes = await Note.find({ticket: req.params.ticketId})

    res.status(200).json(notes)
})

// @desc Create ticket note
// @route POST/api/tickets/:ticketId/notes
// @access Private
const addNote = asyncHandler(async (req, res)=>{
    //    Get user using id in the JWT

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    const ticket = await Ticket.findById(req.params.ticketId)

    if(ticket.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorised')
    }

    const note = await Note.create({
        user: req.user.id,
        text: req.body.text,
        isStaff: false,
        ticket: req.params.ticketId
    })

    res.status(200).json(note)
})

module.exports = {
    getNotes,
    addNote,
}