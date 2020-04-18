const random = require("canvas-sketch-util/random");

const createGrid = (count, multiplier) => {
  const points = [];
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      points.push({
        radius: random.value() * multiplier,
        position: { u: row / (count - 1), v: col / (count - 1) },
      });
    }
  }
  return points;
};

module.exports = { createGrid };
