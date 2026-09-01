console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // maqsadli obyekt
const fs = require("fs")

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
    }
    else {
        user = JSON.parse(data)
    }
})


// Mongo Chaqirish
const db =require("./server").db()


// 1
app.use(express.static("public")); //clientlarga public folder ochiq degani
app.use(express.json()); //json formatni object formatga otadi
app.use(express.urlencoded({ extended: true })); //html formdan express qabul qiladi 

//2 Session code

//3 bssa => back end a html yasaymiz. EJS orqali
app.set("views", "views");
app.set("view engine", "ejs");


// app.get('/author', (req, res) => {
//     res.render("author", { user: user })
// })


//4 Routing code
// app.get("/", function (req, res) {
//     res.end("Jasurbek")
// })
// app.get("/hello", function (req, res) {
//     res.end("hello")
// })

// app.post("/create-item", (req, res) => {
//     console.log(req.body);
//     res.json({ test: "succes" })
// })

app.get("/", function (req, res) {
    res.render("rejalar")
})

module.exports = app;