const express = require("express");
const path = require("path");
const sendmail = require("./mail");
const bodyparser = require("body-parser");
const log = console.log();

const app = express();

app.use(bodyparser.urlencoded({extended: true}));

const index = path.join(__dirname,"public","index.html");

app.get("/",(req,res) => {
    res.sendFile(index);
});

app.post("/",function(req,res) {
    const {email,subject,body} = req.body;
    sendmail(email,subject,body);
    res.send("succesfully sent");
});


app.listen(3000,function () {
    console.log("server started at port 3000");
} );