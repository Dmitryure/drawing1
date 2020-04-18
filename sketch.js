const canvasSketch = require("canvas-sketch");
const { createGrid } = require("./utils/createGrid");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    createGrid(5).forEach(([u, v]) => {
      context.beginPath();
      context.arc(u * width, v * height, 100, 0, Math.PI * 2, false);
      context.strokeStyle = "black";
      context.lineWidth = 40;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
