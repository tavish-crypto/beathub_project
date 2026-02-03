const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Song title is required.']
    },
    artist: {
        type: String,
        required: [true, 'Artist name is missing.'],
        minlength: [3, 'Artist name must be at least 3 characters.']
    },
    genre: {
        type: String,
        enum: {
            values: ['Pop', 'Rock', 'Jazz', 'Hip-Hop'],
            message: 'Genre must be one of Pop, Rock, Jazz, or Hip-Hop.'
        },
        default: 'Pop'
    },
    duration: {
        type: Number,
        required: true,
        min: [0, 'Duration cannot be negative.']
    }
}, {
    timestamps: true
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song
