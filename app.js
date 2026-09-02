console.log("Web Serverni boshlash");
const { log } = require("console");
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
const db = require("./server").db()
const mongodb = require("mongodb")

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


app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log(req.body);
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        
      res.json(data.ops[0]);
        // if (err) {
        //     console.log(err);
        //     res.end("something went wrong");
        // }
        // else {
        //     res.end("Successfully");
        // }
    })
})

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne({_id:new mongodb.ObjectId(id)}, function (err, data) {
    res.json({state:"success"});
  })
});

app.get("/", function (req, res) {
    console.log("user entered /");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        }
        else {
            console.log(data);
            // res.render("rejalar")
            res.render("rejalar", { items: data })
        }
    })
})

module.exports = app;