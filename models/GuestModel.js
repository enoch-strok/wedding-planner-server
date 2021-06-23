const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema(
        {
            guestName: { type: String },
            guestPhone: {type: Number},
            numberOfGuests: { type: Number},
            notes: { type: String},
        },
        {
            timestamps: true,
        }
    );

module.exports.Guest = mongoose.model('Guest', GuestSchema);