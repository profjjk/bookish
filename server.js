// DEPENDENCIES
// ================================================
const express = require('express');


// ROUTER CONFIGURATION
// ================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Path to static files.
app.use(express.static("public"));

// Body parsers.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure handlebars.
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Path to routers.
const routes = require("./controllers/book_controller.js");
app.use(routes);

// Listener.
app.listen(PORT, function() {
  console.log("Server listening on " + PORT);
})