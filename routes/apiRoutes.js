const router = require("express").Router();
const db = require("../models/");



// Get Routes
router.get("/api/workouts/", (req, res) => {
    db.Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

  router.get("/api/workouts/range", ({ query }, res) => {
    db.Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

// Post Route
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then(dbWorkouts => {
          console.log("Check Post")
          console.log(dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

// Put route
router.put("/api/workouts/:id", ({body,params},res) =>{
    console.log("Check")
    console.log(params)
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
      )
      .then(dbWorkouts => res.json(dbWorkouts))
      .catch(err => {
        console.log("err", err)
        res.json(err)
      })
    });

// Delete Route
router.delete("/api/workouts/:id", (req, res) => {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbWorkouts) {
      res.json(dbWorkouts);
    });
  });

  module.exports = router;