import mongoose from "mongoose";

const tuitsSchema = mongoose.Schema({
    avatarIcon: String,
    userName: String,
    handle: String,
    time: String,
    tuit: String,
    image: String,
    liked: Boolean,
    likes: Number,
    comments: Number,
    retuits: Number
}, {collection: 'tuits'});

export default tuitsSchema;

