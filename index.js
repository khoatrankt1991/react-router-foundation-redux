var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", "view");
app.use(express.static("dist"));
const PORT = 3000;
app.listen(PORT);

app.get("/", (req, res)=> res.render("index"));
