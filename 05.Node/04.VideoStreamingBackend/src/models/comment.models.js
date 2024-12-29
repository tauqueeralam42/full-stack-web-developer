import mongoose from "mongoose";

const commentSchema = new Schema({
    content:{
        type:String,
        required:true
    },
    video:{
        type:Schema.Types.ObjectId,
        ref:"Video",
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"Usewr",
    },
},{timestamp:true});

export const Comment = mongoose.model("Comment",commentSchema);