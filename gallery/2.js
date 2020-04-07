function setup() {
  createCanvas(600, 600)
}

let lineHeight = 0

function draw() {
  background(0)
  stroke(123)

  lineHeight -= 2

  if (lineHeight < 0) {
    lineHeight = height
  }

  lineAtHeight(lineHeight)
}

const lineAtHeight = h => line(0, h, width, h)
