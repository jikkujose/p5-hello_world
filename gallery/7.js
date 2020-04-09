function setup() {
  createCanvas(512, 512)
  document.title = "Go Board - All Sizes"
  background(221, 176, 112)
  drawBoard(9)
  noLoop()
}

function draw() {}

function drawBoard(size) {
  let gap = Math.floor(height / (size + 1))
  let boardEdge = gap * size

  for (let i = 1; i <= size; i++) {
    line(i * gap, gap, i * gap, boardEdge)
  }

  for (let i = 1; i <= size; i++) {
    line(gap, gap * i, boardEdge, gap * i)
  }

  drawNineStars(size)
}

function drawNineStars(boardSize) {
  let gap = Math.floor(height / (boardSize + 1))
  let centerX = Math.ceil(boardSize / 2) * gap
  let centerY = centerX
  let centerOffset = Math.floor(boardSize / 4)
  let offset = gap * centerOffset
  if (boardSize == 19) {
    offset += 2 * gap
  }

  let starCoordinates = [
    [centerX - offset, centerY - offset],
    [centerX - offset, centerY],
    [centerX - offset, centerY + offset],
    [centerX, centerY - offset],
    [centerX, centerY],
    [centerX, centerY + offset],
    [centerX + offset, centerY - offset],
    [centerX + offset, centerY],
    [centerX + offset, centerY + offset],
  ]

  starCoordinates.forEach(([x, y]) => drawStar(x, y))
}

function drawStar(x, y, size = 6) {
  fill(0)
  ellipse(x, y, size)
}
