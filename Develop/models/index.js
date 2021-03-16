const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,   
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});


const cardioSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  
  exercises: [
    {
      type: {
        type: String,
      },
      name: {
        type: String,   
      },
      duration: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const resistance = mongoose.model("Resistance", resistanceSchema);
const cardio = mongoose.model("Cardio", cardioSchema);

module.exports = resistance;
module.exports = cardio;
