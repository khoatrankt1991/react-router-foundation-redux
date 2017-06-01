var express = require('express');
var app = express();
var session = require("express-session");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(session({
  secret: 'khoatran23kj23&32023932%^$#@# cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000*60*2 }
}));

app.set("view engine", "ejs");
app.set("views", "view");
app.use(express.static("dist"));
const PORT = 3000;
app.listen(PORT, ()=>console.log("Server is starting in PORT: ... " + PORT));
app.use((req, res, next)=>{
    console.log("LOGGLE: " + req.url);
    if(req.session.username == null && req.url != "/" && req.url != "/getInfo" && req.url != "/signIn" && req.url != "/signOut")
        res.redirect("/");
    next();
    //if(req.url == "/") next();
    //req.session.username?next():next('route')
});
app.get("/", (req, res)=> res.render("index"));

app.post("/signIn", jsonParser, (req, res)=>{
    var {username , password} = req.body;
    if(username === "khoatran" && password === "khoatran") {
        req.session.username = username;
        res.send(username);
    } else res.send("LOGIN_FAIL");
});
app.get("/signOut", (req, res)=>{
    req.session.username = null;
    res.send("REMOVED_SESSION");
});
app.get("/getInfo", (req, res)=>{
    req.session.username?res.send(req.session.username):res.send("SESSION_OUT")
});
app.get("/page1", (req, res)=>{
    var arr = [];
    for( var i =0; i < 100; i++) {
        var obj = {
        id: i,
            brand: "Apple",
            type: "phone",
            created: "2017"
        };
        arr.push(obj);
    }
    res.send(arr);
});