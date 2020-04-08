let gs = {
  pulser: { radius: 6, color: alpha => `rgba(123, 232, 43, ${alpha})` },
  simulation: { steps: 1000 },
  iterator: 0,
}

function setup() {
  createCanvas(512, 512)
  document.title = "Progress Dots"
}

function draw() {
  background(255)

  drawProgressDots(100, 100, 4, color(123, 223, 43), 3.3, 3)
}

function drawProgressDots(x, y, radius, color, speed, count) {
  let gap = radius * 4

  for (let i = 0; i < count; i++) {
    cycler(x + i * gap, y, speed, (-1 * (i * 22)) / (count - 1))(radius, color)
  }
}

function cycler(x, y, speed, staggerPercentage = 0) {
  let steps = gs.simulation.steps / speed
  let stagger = (staggerPercentage / 100) * steps

  if (gs.iterator > steps) {
    gs.iterator = 0
  }

  let theta = (gs.iterator + stagger) * ((2 * Math.PI) / steps)
  let phase = Math.sin(theta)

  gs.iterator += 1
  return (radius, color) => drawPulser(x, y, radius, color, phase)
}

function drawPulser(x, y, radius, color, phase) {
  color.setAlpha(85 + (175 * (phase + 1)) / 2)
  fill(color)
  noStroke()
  circle(x, y, radius * (2 + phase))
}
