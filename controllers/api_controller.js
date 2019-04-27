let db = require("../models");

module.exports = function(app) {
  //users routes
  app.post("/api/user", (req, res) => {
    let answer = req.body;
    console.log(req.body);
    db.User.create({
      firstName: answer.firstName,
      lastName: answer.lastName,
      email: answer.email,
      userName: answer.userName,
      password: answer.password
    }).then(function(dbUser) {
      console.log(dbUser);
    });
  });

  app.put("/api/user/:username", (req, res) => {
    let username = req.params.username;
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
          userName: username
        }
      }
    ).then(function(dbUser) {
      console.log(dbUser);
    });
  });

  app.put("/api/user/:username/waiter", (req, res) => {
    let username = req.params.username;
    db.User.update(
      {
        isWaiter: true
      },
      {
        where: {
          userName: username
        }
      }
    );
  });

  app.delete("/api/user/:username", (req, res) => {
    let username = req.params.username;
    db.User.destroy({
      where: {
        userName: username
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
