import mongoose from "mongoose";

const SkillsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    list:{
        type: [String],
        required: true
    }
})

export default mongoose.model("Skills", SkillsSchema);