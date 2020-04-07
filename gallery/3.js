;(function() {
  document.title = "Go Board - 9x9"
})()

function setup() {
  createCanvas(512, 512)
  board()
}

function board() {
  background(221, 176, 112)

  drawLines()
  drawStars()
}

function drawLines() {
  for (let i = 0; i < 9; i++) {
    yShift = 16 + 60 * i
    line(16, yShift, 512 - 16, yShift)
  }

  for (let i = 0; i <= 9; i++) {
    xShift = 16 + 60 * i
    line(xShift, 16, xShift, 512 - 16)
  }
}

function drawStars() {
  let start = { x: 136, y: 136 }
  let array = [
    [start.x, start.y],
    [start.x + 120, start.y],
    [start.x + 240, start.y],
    [start.x, start.y + 120],
    [start.x, start.y + 240],
    [start.x + 120, start.y + 120],
    [start.x + 120, start.y + 240],
    [start.x + 240, start.y + 120],
    [start.x + 240, start.y + 240],
  ]

  array.forEach(([x, y]) => blackDot(x, y))
}

function blackDot(x, y) {
  fill(0)
  circle(x, y, 8)
}

let gs = {}

function draw() {}
