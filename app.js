var five = require("johnny-five");
var board = new five.Board();

var convert = require("./convert-water-level.js");



board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 1000
  });

  sensor.on("data", function() {
    // this.analog approximately ranges from 40 - 80
    convert.getWaterLevel(this.analog,(millimeters, percentage) => {
      console.log("Water Level: ");
      console.log("analog: "+ this.analog);
      console.log(`${millimeters}mm`);
      console.log(`${percentage}%`);
      console.log("\n")
    });
  });
});
