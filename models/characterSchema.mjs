import mongoose from 'mongoose';

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    theBoys: {
        type: Boolean,
        required: true,
    }
});

export default mongoose.model('Character', characterSchema);