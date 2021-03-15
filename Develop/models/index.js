const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout",
      },
      name: {
        type: String,
        required: "Enter name of workout",
      },
      duration: {
        type: Number,
        required: "Enter duration of workout",
      },
      weight: {
        type: Number,
        required: "Enter amount of weight",
      },
      reps: {
        type: Number,
        required: "Enter quantity of reps",
      },
      sets: {
        type: Number,
        required: "Enter number of sets",
      },
    },
  ],
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
