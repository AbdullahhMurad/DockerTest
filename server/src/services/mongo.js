const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://nasa-api:IFwxrtgNs1F9T2oQ@nasacluster.m7bpw.mongodb.net/nasa?retryWrites=true&w=majority&appName=NASACluster";


mongoose.connection.once("open", () => {
    console.log("MongoDB connection ready!");
  });
  
mongoose.connection.on("error", (err) => {
    console.error(err);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}