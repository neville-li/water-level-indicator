class WaterSensor {
  constructor(pin, freq, location){
    this.pin = pin;
    this.freq = freq;
    this.location = location;
    this.analog = 0;
    this.millimeters = 0;
    this.percentage = 0;
  }
  toString(){
    return `Water Level:\nAnalog Level: ${this.analog} Depth: ${this.millimeters}mm Percentage: ${this.percentage.toFixed(1)}%`;
  }
}
module.exports = {
WaterSensor
};
