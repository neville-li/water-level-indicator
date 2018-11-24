var five = require("johnny-five");
var board = new five.Board();
var express = require("express");
var app = express();
var convert = require("./convert-water-level.js");

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

//initialize water level sensor
class SensorData {
  constructor(pin, freq, location){
    this.pin = pin;
    this.freq = freq;
    this.location = location;
    this.analog = 0;
    this.millimeters = 0;
    this.percentage = 0;
  }
  toString(){
    return `Analog Level: ${this.analog} Depth: ${this.millimeters}mm Percentage: ${this.percentage.toFixed(1)}%`;
  }
}

//Create instance for sensors
var sensorDataOne = new SensorData("A0",1000, "UH");
var sensors = [sensorDataOne];

// express setup
app.get("/", (req,res) => {
  res.render("index",{sensors});
});

app.listen(3000, () => {
  console.log("server started");
});

// arduino setup

board.on("ready", function() {
  var sensorOne = new five.Sensor({
    pin: sensorDataOne.pin,
    freq: sensorDataOne.freq
  });

  sensorOne.on("data", function() {
    // this.analog approximately ranges from 40 - 80
    convert.getWaterLevel(this.analog,(millimeters, percentage) => {
      sensorDataOne.analog = this.analog;
      sensorDataOne.millimeters = millimeters;
      sensorDataOne.percentage = percentage;
      console.log("Water Level: ");
      console.log(sensorDataOne.toString());
    });
  });
});
