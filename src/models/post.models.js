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
    content: {
        type: String,
        required: true,
    },
    media: {
        type: String,
    },
    like: {
        type: Number,
        default: 0,
    },
    comment: {
        type: [String],
        default: [],
    }
},{timestamps: true }
)

export const Post = mongoose.model("Post",postSchema); 