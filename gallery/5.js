let population = count => {
  let array = []
  for (let i = 0; i < count; i++) {
    array.push(generateRandomPeople())
  }

  return array
}

let gs = {
  palette: {
    black: alpha => `rgba(1, 22, 39, ${alpha})`,
    red: alpha => `rgba(214, 40, 40, ${alpha})`,
    white: "rgba(230, 230, 230, 1)",
    green: alpha => `rgba(46, 196, 182, ${alpha})`,
  },
  person: { size: 4, color: "#232323" },
  population: population(300),
}

function generateRandomPeople() {
  let speed = () => Math.random() - 0.5
  let location = () => Math.random() * window.innerHeight + 20

  return {
    velocity: [speed(), speed()],
    position: [location(), location()],
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  document.title = "Disease Spread"
}

function draw() {
  mover()
}

function mover() {
  background(gs.palette.black(1))
  gs.population.forEach(previousState => {
    let newState = stateUpdater(previousState)
    drawPerson(newState)
  })
}

function drawPerson({ position }) {
  fill(gs.palette.white)
  let x = position[0]
  let y = position[1]

  if (y < 300) {
    fill(gs.palette.green(1))
  }
  circle(x, y, gs.person.size)
  if (x > 200) {
    fill(gs.palette.red(0.2))
    noStroke()
    circle(x, y, gs.person.size * 4)
  }
}

function stateUpdater({ velocity, position }) {
  if (position[0] < gs.person.size || position[0] > width - gs.person.size) {
    velocity[0] *= -1
  }

  if (position[1] < gs.person.size || position[1] > height - gs.person.size) {
    velocity[1] *= -1
  }

  position[0] += velocity[0]
  position[1] += velocity[1]
  return { velocity, position }
}
