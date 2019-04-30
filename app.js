let express = require("express");
let PORT = process.env.PORT || 8080;
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./controllers/api_controller")(app);
require("./controllers/html_controller")(app);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
