var five = require("johnny-five");
var board = new five.Board();

var convertWaterLevel = require("./convert-water-level.js");

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A0",
    freq: 1000
  });

  sensor.on("data", function() {
    // this.analog approximately ranges from 40 - 80

      if (this.analog >= 0){
        var millimeters = this.analog - 40;
        var percentage = ((this.analog - 40)/42)*100;
      } else {
        var millimeters = 0;
        var percentage = 0;
      }


    console.log("Water Level: ");
    console.log("analog: "+ this.analog);
    console.log(`${millimeters}mm`);
    console.log(`${percentage}%`);
  });
});
