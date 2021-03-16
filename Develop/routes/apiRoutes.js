const router = require("express").Router();
const Excercise = require("../models/index.js");

//first post
router.post("/api/workouts", ({ body }, res) => {
    Excercise.create(body)
      .then(dbExcercise => {
        res.json(dbExcercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // //second post
  // router.post("/api/workouts", ({ body }, res) => {
  //   Excercise.create(body)
  //     .then(dbExcercise => {
  //       res.json(dbExcercise);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });

  //put route
  // router.put("/api/workouts/:id", ({ body }, res) => {
  //   Excercise.findByIdAndUpdate(
  //       params.id,
  //       { $push: { excercises: body } },
  //       {new: true, runValidators: true}
  //   )
  //     .then(dbExcercise => {
  //       res.json(dbExcercise);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });

//  // get route
//   router.get("/api/workouts/range", (req, res) => {
//     Excercise.find({})
//       .sort({ date: -1 })
//       .then(dbExcercise => {
//         res.json(dbExcercise);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });


  module.exports = router;