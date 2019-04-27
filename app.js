let express = require("express");
let PORT = process.env.PORT || 8080;
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/api_controller")(app);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
