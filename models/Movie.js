const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    age: { type: Number },
    time: { type: String },
    genre: { type: String },
    cast: { type: String },
    director: { type: String },
    writer: { type: String },
    type: { type: String },
    category: { type: String },
    episode: { type: Number },
    season: { type: Number },
    isSeries: { type: Boolean, default: false },
    isCover: { type: Boolean, default: false },
    listId: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
