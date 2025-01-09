import mongoose from "mongoose"

const friendSchema = new mongoose.Schema({
    requestTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    requestFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: Number,
        enum: [
            0, 1, 2, 3,
        ],
    }
},{timestamps: true }
)

export const friends = mongoose.model("friends",friendSchema);