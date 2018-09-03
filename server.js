'use strict';

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
var server = app.start();


function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
}


// Get all devices 
app.get("api/devices",function(req,res){

})

// set all devices
app.post("/api/devices", function(req, res) {

});

// get device state by id
app.get("/api/device/:id", function(req, res) {
});

// create device by id
app.put("/api/device/:id", function(req, res) {
});


app.delete("/api/device/:id", function(req, res) {
});

// get device state 

// create device

// delete device

//update device