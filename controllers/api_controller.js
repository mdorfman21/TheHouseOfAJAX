let db = require("../models");
const Sequelize = require("sequelize");
module.exports = function(app) {
  //users routes
  app.post("/api/user", (req, res) => {
    let answer = req.body;
    console.log(req.body);
    db.User.findOrCreate({
      where: {
        [Sequelize.Op.or]: [
          { userName: answer.userName },
          { email: answer.email }
        ]
      },
      defaults: {
        firstName: answer.firstName,
        lastName: answer.lastName,
        email: answer.email,
        password: answer.password
      }
    }).then(([user, created]) => {
      console.log(
        user.get({
          plain: true
        })
      );
      if (created === false) {
        res.redirect(409, "/login");
      }
      res.redirect(200, "/");
    });

    //need to put this as a result of a promise
    // db.User.create({
    //   firstName: answer.firstName,
    //   lastName: answer.lastName,
    //   email: answer.email,
    //   userName: answer.userName,
    //   password: answer.password
    // }).then(function(dbUser) {
    //   console.log(dbUser);
    // });
  });

  app.get("/api/user", (req, res) => {
    db.User.findAll({}).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.put("/api/user/:id", (req, res) => {
    let id = req.params.id;
    let answer = req.body;
    db.User.update(
      {
        firstName: answer.firstName,
        lastName: answer.lastName,
        email: answer.email,
        userName: answer.userName,
        password: answer.password
      },
      {
        where: {
          id: id
        }
      }
    ).then(function(dbUser) {
      console.log(dbUser);
    });
  });

  app.put("/api/user/waiter/:id", (req, res) => {
    db.User.update(
      {
        isWaiter: true
      },
      {
        where: {
          id: req.params.id
        }
      }
    ).then(dbUser => {
      console.log(dbUser);
    });
  });

  app.delete("/api/user/:id", (req, res) => {
    let id = req.params.id;
    db.User.destroy({
      where: {
        id
      }
    }).then(function(dbUser) {
      console.log(dbUser);
    });
  });

  //events routes
  app.get("/api/events", (req, res) => {
    db.Event.findAll({}).then(dbEvents => {
      res.json(dbEvents);
    });
  });

  app.post("/api/events", (req, res) => {
    let event = req.body;
    db.Event.create({
      name: event.name,
      location: event.location,
      date: event.date,
      author: event.author,
      startTime: event.startTime,
      endTime: event.endTime,
      payRate: event.payRate
    }).then(dbEvent => {
      console.log(dbEvent);
    });
  });

  app.put("/api/events/accepted", (req, res) => {
    let id = req.body.id;
    db.Event.update(
      {
        isAccepted: true,
        acceptedBy: req.body.waiterID
      },
      {
        where: {
          id
        }
      }
    );
  });

  app.put("/api/events", (req, res) => {
    let eventID = req.body.id;
    let event = req.body;
    db.Event.update(
      {
        name: event.name,
        location: event.location,
        author: event.author,
        startTime: event.startTime,
        endTime: event.endTime,
        payRate: event.payRate
      },
      {
        where: {
          id: eventID
        }
      }
    ).then(dbEvent => {
      console.log(dbEvent);
    });
  });

  app.delete("/api/events", (req, res) => {
    let id = req.body.id;
    db.Event.destroy({
      where: {
        id
      }
    });
  });
};
