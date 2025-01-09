import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength : [6,"Password must be atleast 6 characters long"],
    },
    avatar: {
        type: String,
    },
    totalLikes: {
        type: Number,
        default: 0,
    },
    totalComments: {
        type: Number,
        default: 0,
    },
    totalPosts: {
        type: Number,
        default: 0,
    },
    friends: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Friends",
        default: [],
    },   
})

export const User = mongoose.model("User",userSchema);