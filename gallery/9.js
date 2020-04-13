const sketch = s => {
  document.title = "Snake Game"

  let config = {
    snake: [[0, 0]],
    canMove: false,
    color: s.color(23),
    red: s.color(230, 0, 0),
    background: s.color(230),
    snakeLength: 5,
    cellEdge: 13,
    apples: [],
  }

  s.setup = () => {
    s.createCanvas(480, 270)
    s.background(config.background)
    s.noLoop()
  }

  s.draw = () => {
    s.background(config.background)
    drawSnake()
    drawApples()
  }

  const drawSnake = (snake = config.snake) => {
    snake.forEach(coordinates => drawCell(...coordinates))
  }

  const drawApples = (apples = config.apples) => {
    apples.forEach(location =>
      drawCell(...location, config.cellEdge, config.red)
    )
  }

  let drawCell = (
    x,
    y,
    size = config.cellEdge,
    color = config.color,
    strokeColor = config.background
  ) => {
    s.fill(color)
    s.stroke(strokeColor)
    s.rect(x, y, size, size)
  }

  s.keyPressed = () => {
    const direction = getDirectionFromKeyCode(s.keyCode)

    config.snake = move(direction)
    s.redraw()
  }

  const spawnApple = (cellEdge = config.cellEdge) => {
    const _x = Math.floor(s.width / cellEdge)
    const _y = Math.floor(s.height / cellEdge)

    const x = cellEdge * Math.floor(s.random(0, _x))
    const y = cellEdge * Math.floor(s.random(0, _y))

    return [x, y]
  }

  const move = (
    direction,
    snake = config.snake,
    length = config.snakeLength,
    cellEdge = config.cellEdge,
    apples = config.apples
  ) => {
    let previousHead = snake[0]
    let nextHead = [
      previousHead[0] + cellEdge * direction[0],
      previousHead[1] + cellEdge * direction[1],
    ]

    if (didEatApple(nextHead)) {
      config.snakeLength += 1
      removeAppleAt(nextHead)
      config.apples = [...apples, spawnApple()]
    }

    if (apples.length == 0) {
      config.apples = [...apples, spawnApple()]
    }

    if (snake.length >= length) {
      snake.pop()
    }

    return [nextHead, ...snake]
  }

  const didEatApple = (location, apples = config.apples) => {
    return apples.some(c => c[0] == location[0] && c[1] == location[1])
  }

  const removeAppleAt = (location, apples = config.apples) => {
    const index = apples.indexOf(location)
    apples.splice(index, 1)
  }

  const getDirectionFromKeyCode = keyCode => {
    switch (keyCode) {
      case s.LEFT_ARROW:
        return [-1, 0]
      case s.RIGHT_ARROW:
        return [1, 0]
      case s.UP_ARROW:
        return [0, -1]
      case s.DOWN_ARROW:
        return [0, 1]
      default:
        return [0, 0]
    }
  }
}

new p5(sketch)
