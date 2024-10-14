// App.js will contain the express code, instead of server.js
const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/plantes.router");

const app = express(); // Set up express

app.use(cors({
    origin: "http://localhost:3000",
}));



app.use(express.json());  // The built in json middleware parses any incoming JSON from 
                        // the body of incoming requests

                        
app.use(planetsRouter);


module.exports = app;