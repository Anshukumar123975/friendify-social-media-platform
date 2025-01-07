import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    avatar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    like: {
        type: Number,
        default: 0,
    },
    comment: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    media: {
        type: String,
    }
},{timestamps: true }
)

export const post = mongoose.model("post",postSchema);