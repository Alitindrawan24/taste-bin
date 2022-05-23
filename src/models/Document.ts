import mongoose from 'mongoose';

const documentScheme = new mongoose.Schema({
    value: {
        type: String,
        required: true
    }
});

export default mongoose.model('Document', documentScheme)