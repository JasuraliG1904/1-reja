const http = require("http")
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://Jasurali:Jasurali1904@cluster0.pylbcp1.mongodb.net/"
mongodb.connect(connectionString,
    {
        userNewUrlParser: true,
        usedUnifiedTopology: true
    },
    (err, client) => {
        if (err) console.log(err);
        else {
            module.exports = client
            const app = require("./app")
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`Server is running: ${PORT}`);
            });

        }
    })
