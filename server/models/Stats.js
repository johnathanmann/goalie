const { Schema, model, Types } = require("mongoose");

const statsSchema = new Schema ({
    userId: {
        type: String,
        required: true,
        trim: true
      },
    goalsMade: {
        type: Number,
        required: true
    },
    goalsCompleted: {
        type: String,
        required: true
    }
});

const Stats = model("Stats", statsSchema);

module.exports = Stats;

