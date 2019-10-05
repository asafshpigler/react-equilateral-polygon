function Point(x, y) {
  this.x = x
  this.y = y
}

function radians(degrees) {
  return degrees * Math.PI / 180
};

function getPointsOfEquilateralPolygon(sideCount, radius) {
  const isValidArgs = (
    typeof sideCount === 'number' && sideCount >= 3 &&
    typeof radius === 'number' && radius > 0
  )
  if (!isValidArgs) return []

  const points = []
  const angleDelta = 360 / sideCount
  const center = new Point(radius, radius)

  let angle = null
  let x = null
  let y = null
  let point = null
  let angleInRadians = null

  for (let i = 0; i < sideCount; i++) {
    angle = angleDelta * i - 90
    angleInRadians = radians(angle)
    x = center.x + radius * Math.cos(angleInRadians)
    y = center.y + radius * Math.sin(angleInRadians)
    point = new Point(x.toFixed(2), y.toFixed(2))
    points.push(point)
  }

  return points
}

function pointsArrayToString(points) {
  const pointsStr = points.reduce((str, point, index) => {
    str += point.x + ',' + point.y
    if (index !== points.length - 1) str += ' '
    return str
  }, '')

  return pointsStr
}

export {
  getPointsOfEquilateralPolygon,
  pointsArrayToString,
}