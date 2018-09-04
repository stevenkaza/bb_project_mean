'use strict';

/**
 * Module dependencies.
 */
let app = require('./config/lib/app');
let server = app.start();
let mongodb = require("mongodb");

let DEVICES = "devices"
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.

function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
}
// Get all devices 
app.get("api/devices",function(req,res){
    db.collection(DEVICES).find({}).toArray(function(err, docs) {
        if (err) {
          handleError(res, err.message, "Failed to get devices.");
        } else {
          res.status(200).json(docs);
        }
      });
})
// CREATE all/a devices
app.post("/api/devices", function(req, res) {
    var newDevice = req.body;
    newDevice.createDate = new Date();
    if (!req.body.id) {
      handleError(res, "Invalid user input", "Must provide an id.", 400);
    } else {
      db.collection(DEVICE).insertOne(newDevice, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new device.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
    }
});

// get device state by id
app.get("/api/device/:id", function(req, res) {

});

// create device by id, how to update?
app.put("/api/device/:id", function(req, res) {


});

// delete device
app.delete("/api/device/:id", function(req, res) {


});

// get device state 

// create device

// delete device

//update device