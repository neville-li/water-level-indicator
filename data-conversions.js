var getWaterLevel = (waterLevel, callback) => {
  //waterLevel ranges from (30,85)
  // Depth is in mm, ranges from (0mm - 40mm)

  var depth = 0.1083 * Math.pow(1.0696, waterLevel);
  var percentage = (depth / 40) * 100;
  if (waterLevel > 0 && depth > 0 && percentage >0) {
    callback(depth.toFixed(2), percentage.toFixed(2));
  } else {
    callback(0,0);
  }
}

module.exports = {
  getWaterLevel
}
