var getWaterLevel = (waterLevel, callback) => {

  var millimeters = waterLevel - 40;
  var percentage = ((waterLevel - 40) / 42) * 100;
  if (millimeters >= 0 && percentage >=0) {
    callback(millimeters, percentage);
  } else {
    callback(0,0);
  }
}

module.exports = {
  getWaterLevel
}
