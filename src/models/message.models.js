import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    roomId: {
        type: String,
        required: true,
    },
},{timestamps: true }
)

export const message = mongoose.model("message",messageSchema);