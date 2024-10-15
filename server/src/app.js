// App.js will contain the express code, instead of server.js
const path = require("path");
const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/plantes.router");

const app = express(); // Set up express

app.use(cors({
    origin: "http://localhost:3000",
}));



app.use(express.json());  // The built in json middleware parses any incoming JSON from 
                        // the body of incoming requests
app.use(express.static(path.join(__dirname, "..", "public")));
                        
app.use(planetsRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
})

module.exports = app;