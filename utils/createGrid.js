const createGrid = (count) => {
  const points = [];
  for (let row = 0; row < count; row++) {
      for (let col = 0; col < count; col++) {
        points.push([row/(count-1), col/(count-1)])
      }
  }
  return points
};

module.exports = {createGrid}