import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    designation:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true
    },
    timeline:{
        type: String,
        required: true
    },
    description: String,
}, { timestamps: true })

export default mongoose.model("Experience", ExperienceSchema)