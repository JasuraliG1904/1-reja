console.log("Web Serverni boshlash");
const express = require("express");
const app = express(); // maqsadli obyekt
const http = require("http")
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
// 1
app.use(express.static("public")); //clientlarga public folder ochiq degani
app.use(express.json()); //json formatni object formatga otadi
app.use(express.urlencoded({ extended: true })); //html formdan express qabul qiladi 

//2 Session code

//3 bssa => back end a html yasaymiz. EJS orqali
app.set("views", "views");
app.set("view engine", "ejs");


app.get('/author', (req, res) => {
    res.render("author", { user: user })
})


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



const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`Server is running: ${PORT}, http://localhost:${PORT}`);
});
