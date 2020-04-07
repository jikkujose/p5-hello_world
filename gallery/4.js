;(function() {
  document.title = "Chess Board"
})()

let gs = {
  BLACK: 0,
  WHITE: 255,
}

function setup() {
  createCanvas(512, 512)
  background(255)
  drawBoard()
}

function drawSquare(x, y, color) {
  fill(color)
  rect(x, y, 50, 50)
}

function drawBoard() {
  for (let k = 0; k < 10; k++) {
    for (let i = 0; i < 10; i++) {
      let color = (i + k + 1) % 2 ? gs.BLACK : gs.WHITE
      drawSquare(6 + i * 50, 6 + k * 50, color)
    }
  }
}

function draw() {}
