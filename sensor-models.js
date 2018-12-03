class WaterSensor {
  constructor(pin, freq, location){
    this.pin = pin;
    this.freq = freq;
    this.location = location;
    this.analog = 0;
    this.millimeters = 0;
    this.percentage = 0;
    this.state = "";
  }
  toString(){
    return `Location: ${this.location}\nAnalog Level: ${this.analog} Depth: ${this.millimeters}mm Percentage: ${this.percentage}%`;
  }
  update(analog, millimeters, percentage){
    this.analog = analog;
    this.millimeters = millimeters;
    this.percentage = percentage;
    if(percentage > 70) {
      this.state = "danger";
    } else if (percentage > 40){
      this.state = "warning";
    } else {
      this.state = "success";
    }
  }
}
module.exports = {
WaterSensor
};
