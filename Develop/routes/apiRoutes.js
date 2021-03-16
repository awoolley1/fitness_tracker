const router = require("express").Router();
const Exercise = require("../models/index.js");

//post route
router.post("/api/workouts", ({ body }, res) => {
    Exercise.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  //put route
  router.put("/api/workouts/:id", ({ body }, res) => {
    Exercise.findByIdAndUpdate(
        params.id,
        { $push: { excercises: body } },
        {new: true, runValidators: true}
    )
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

 // get route
  router.get("/api/workouts", (req, res) => {
    Exercise.find({})
      .sort({ date: -1 })
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  module.exports = router;