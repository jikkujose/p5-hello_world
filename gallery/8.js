const closure = sketch => {
  document.title = "Snake"

  let gs = {
    gridSize: 40,
    color: sketch.color(23, 54, 22),
    background: sketch.color(230),
    canMove: false,
    snake: [[10, 20], [20, 20], [30, 20], [30, 30], [30, 40]],
    movementDirection: [0, 0],
    clock: 0,
    delay: 2,
  }

  sketch.setup = () => {
    sketch.createCanvas(512, 256)
    sketch.background(230)
  }

  sketch.draw = () => {
    gs.clock += 1

    if (gs.clock % gs.delay === 0) {
      sketch.move(gs.snake, ...gs.movementDirection)
    }

    if (gs.clock > 1000000) {
      gs.clock = 0
    }

    sketch.background(gs.background)
    drawSnake(gs.snake)
  }

  sketch.move = (snake, x, y) => {
    let previousHead = snake[0]
    let size = 10
    let nextHead = [previousHead[0] + x * size, previousHead[1] + y * size]
    if (gs.canMove) {
      gs.snake.pop()
      gs.snake = [nextHead, ...snake]
    }
  }

  sketch.keyPressed = () => {
    gs.movementDirection = getMovementDirection(sketch.keyCode)
    gs.canMove = true
    sketch.loop()
  }

  sketch.keyReleased = () => {
    gs.canMove = false
    sketch.noLoop()
  }

  let drawSnake = snake => {
    snake.forEach(([x, y]) => drawBodyUnit(x, y, 10))
  }

  let drawBodyUnit = (x, y, size = gs.gridSize) => {
    sketch.fill(gs.color)
    sketch.stroke(230)
    sketch.rect(x, y, size, size)
  }

  let getMovementDirection = keyCode => {
    switch (keyCode) {
      case sketch.LEFT_ARROW:
        return [-1, 0]
      case sketch.RIGHT_ARROW:
        return [1, 0]
      case sketch.UP_ARROW:
        return [0, -1]
      case sketch.DOWN_ARROW:
        return [0, 1]
      default:
        return [0, 0]
    }
  }
}

new p5(closure)
