const SubjectDB = require("../model/model");
const LessonDB = require("../model/lesson");
const ImageDB = require('../model/image')
// create and save user

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const subject = new SubjectDB({
    name: req.body.name,
    teacher: req.body.teacher,
    chapters: req.body.chapters
  });

  subject
    .save(subject)
    .then((data) => {
      res.send(data);
      //res.redirect('/')
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some Error occurred while creating operation",
      });
    });
};

// retrive and return al users / or single user

exports.find = (req, res) => {
  if (req.body.id) {
    const id = req.body.id;
    SubjectDB.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "user not found" });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "error finding user with id=" + id });
      });
  } else {
    SubjectDB.find()
      .then((subject) => {
        res.send(subject);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while finding User!",
        });
      });
  }
};

exports.createLesson = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const lesson = new LessonDB({
      name: req.body.name,
      chapter: req.body.chapter,
      length: req.body.length,
      link: req.body.link,
      subject: req.body.subject
    });
  
    lesson
      .save(lesson)
      .then((data) => {
        res.send(data);
        //res.redirect('/')
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some Error occurred while creating operation",
        });
      });
  };
  
  // retrive and return al users / or single user
  
  exports.findLesson = (req, res) => {
    if (req.body.id) {
      const id = req.body.id;
      LessonDB.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "user not found" });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "error finding user with id=" + id });
        });
    } else {
      LessonDB.find()
        .then((lesson) => {
          res.send(lesson);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error occurred while finding User!",
          });
        });
    }
  };


  exports.createImage = (req, res) => {
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    const image = new ImageDB({
      name: req.body.name,
      semister: req.body.semister,
      subject: req.body.subject
    });
  
    image
      .save(image)
      .then((data) => {
        res.send(data);
        //res.redirect('/')
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some Error occurred while creating operation",
        });
      });
  };
  
  // retrive and return al users / or single user
  
  exports.findImage = (req, res) => {
    if (req.body.id) {
      const id = req.body.id;
      ImageDB.findById(id)
        .then((data) => {
          if (!data) {
            res.status(404).send({ message: "user not found" });
          } else {
            res.send(data);
          }
        })
        .catch((err) => {
          res.status(500).send({ message: "error finding user with id=" + id });
        });
    } else {
      ImageDB.find()
        .then((image) => {
          res.send(image);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Error occurred while finding User!",
          });
        });
    }
  };