const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({
    title: String,
    category: String,
    image: String,
    description: String,
    link: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Idea", IdeaSchema);