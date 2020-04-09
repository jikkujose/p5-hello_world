function setup() {
  createCanvas(600, 600)
  document.title = "Sinusoid"
}

function draw() {
  background(0)
  strokeWeight(1)
  stroke(50)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)
  let blankState = false
  let n = 10

  for (let i = 0; i < width; i++) {
    let phase = (i / width) * 2 * 3.14 * n
    stroke(23, 112, 9)
    strokeWeight(2)
    let angle = (2 * 3.14 * (i - phase)) / width
    let y = height / 2 + 100 * Math.sin(n * angle)

    if (phase % (2 * 3.14) < 3.14 / 3) {
      stroke(255, 2, 45)
    }

    point(i, y)
  }
}
