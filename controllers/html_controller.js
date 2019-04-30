let path = require("path");

module.exports = function(app) {
  app.get("/", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/index.html");
    res.sendFile(reqPath);
  });

  app.get("/user/profile", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/user.html");
    res.sendFile(reqPath);
  });

  app.get("/events/board", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/waiterevent.html");
    res.sendFile(reqPath);
  });

  app.get("/events/create", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/createEvent.html");
    res.sendFile(reqPath);
  });

  app.get("/user/events", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/userevent.html");
    res.sendFile(reqPath);
  });

  app.get("/user/signup", (req, res) => {
    let reqPath = path.join(__dirname, "../views/assets/html/login.html");
    res.sendFile(reqPath);
  });
};
