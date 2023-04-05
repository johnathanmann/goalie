const { Schema, model, Types } = require("mongoose");

const goalSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
      },
    value: {
        type: Number,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

const Goal = model("Goal", goalSchema);

module.exports = Goal;

