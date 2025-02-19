const http = require('http');
// const mongoose = require("mongoose");

const express = require("express");

const app = require('./app');
const { mongoConnect } = require("./services/mongo");
const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

// const MONGO_URL = "mongodb+srv://nasa-api:IFwxrtgNs1F9T2oQ@nasacluster.m7bpw.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

const server = http.createServer(app);

// mongoose.connection.once("open", () => {
//   console.log("MongoDB connection ready!");
// });

// mongoose.connection.on("error", (err) => {
//   console.error(err);
// });

async function startServer() {

    await mongoConnect();

  //  Instead of 
  // await mongoose.connect(MONGO_URL);
 
  // The four arguments that were added have been deprecated
  
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();





// const http = require('http');
// const mongoose = require("mongoose");

// const app = require('./app');

// const { loadPlanetsData } = require('./models/planets.model');

// const PORT = process.env.PORT || 8000;

// const MONGO_URL = "mongodb+srv://nasa-api:IFwxrtgNs1F9T2oQ@nasacluster.m7bpw.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";

// const server = http.createServer(app);

// mongoose.connection.once("open", () => {
//   console.log("MongoDB connection ready!");
// });

// mongoose.connection.on("error", (err) => {
//   console.error(err);
// });

// async function startServer() {
  
//   await mongoose.connect(MONGO_URL);

//   await loadPlanetsData();
  
//   server.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}...`);
//   });
// }

// startServer();