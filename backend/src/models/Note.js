import mongoose from "mongoose";

// Creata a schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

}, { timestamps: true}
); //created at and updated at fields

// create model

const Note = mongoose.model("Note", noteSchema);

export default Note;
