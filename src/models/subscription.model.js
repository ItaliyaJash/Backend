import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subsciber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.type.ObjectId, // one to whom 'subscriber' is subscribing
        ref:"User"
    }
}, {timestamps: true})

export const Subcription = mongoose.model("Subcription", subscriptionSchema)