let db = require("../models");

module.exports = function(app) {
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
};
