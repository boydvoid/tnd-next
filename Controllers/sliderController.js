const db = require("../Models");

module.exports = {
  addLink: (req, res) => {
    console.log(req.body);
    db.slider
      .create({
        title: req.body.title,
        img: req.body.img,
        link: req.body.link
      })
      .then(done => {
        res.send(done);
      });
  },
  loadall: (req, res) => {
    db.slider.find({}).then(done => {
      res.send(done);
    });
  },
  save: (req, res) => {
    db.blogs
      .updateOne(
        //need to get id from form
        { _id: req.body.id },
        {
          $set: {
            username: req.body.username,
            blog: req.body.blog,
            title: req.body.title,
            img: req.body.img,
            live: req.body.live,
            category: req.body.category
          }
        }
      )
      .then(done => {
        res.send(done);
      })
      .catch(err => {
        console.log("err: " + err);
        res.send({ err: "duplicate title" });
      });
  }
};
