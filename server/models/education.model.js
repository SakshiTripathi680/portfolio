import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    degree:{
        type: String,
        required: true
    },
    stream:{
        type: String,
        required: false
    },
    institution:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Education", EducationSchema);