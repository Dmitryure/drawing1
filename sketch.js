const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");
const { createGrid } = require("./utils/createGrid");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 200;
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const palette = random.pick(palettes);

    createGrid(25, 0.005).forEach(({ radius, position }) => {
      console.log(position.u);
      const x = lerp(margin, width - margin, position.u);
      const y = lerp(margin, height - margin, position.v);

      context.beginPath();
      context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      context.strokeStyle = random.pick(palette);
      context.lineWidth = 10;
      context.stroke();
    });
  };
};

canvasSketch(sketch, settings);
