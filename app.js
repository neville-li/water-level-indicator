var five = require("johnny-five");
var board = new five.Board();
var express = require("express");
var app = express();
var convert = require("./data-conversions.js");
var model = require("./sensor-models.js");

var port = 3000;
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

//initialize water level sensor
var waterSensors = [];
waterSensors.push(new model.WaterSensor("A0", 1000, "UH"));

// arduino setup

board.on("ready", function() {
  var sensorOne = new five.Sensor({
    pin: waterSensors[0].pin,
    freq: waterSensors[0].freq
  });

  sensorOne.on("data", function() {
    // this.analog approximately ranges from 40 - 80
    convert.getWaterLevel(this.analog, (millimeters, percentage) => {
      waterSensors[0].analog = this.analog;
      waterSensors[0].millimeters = millimeters;
      waterSensors[0].percentage = percentage;
      console.log(waterSensors.toString());
    });
  });
});

// express setup
app.get("/", (req,res) => {
  res.render("index",{sensors: waterSensors});
});

app.listen(port, () => {
  console.log("server started");
});
