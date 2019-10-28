const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId, //qual id que criou o cadastro
        ref: 'User' // referencia a qual model é essa informação.
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId, //qual id que criou o cadastro
        ref: 'Spot' // referencia a qual model é essa informação.
    }
});

module.exports = mongoose.model('Booking', BookingSchema);
