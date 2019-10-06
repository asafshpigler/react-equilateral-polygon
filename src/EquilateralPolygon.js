import React, { Component } from 'react'
import {
  getPointsOfEquilateralPolygon,
  pointsArrayToString,
} from './utils.js'
import './EquilateralPolygon.css'

class EquilateralPolygon extends Component {
  constructor(props) {
    super()

    const { sideCount, size } = props
    const pointsStr = this.getPointsStr(sideCount, size)

    this.state = {
      points: pointsStr,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sideCount === this.props.sideCount) return

    const { sideCount, size } = this.props
    const pointsStr = this.getPointsStr(sideCount, size)
    this.setState({ points: pointsStr })
  }

  getPointsStr(sideCount, size) {
    const isValidArgs  = typeof sideCount === 'number' && sideCount >= 3
    if (!isValidArgs) return

    const radius = size / 2
    const points = getPointsOfEquilateralPolygon(sideCount, radius)
    const pointsStr = pointsArrayToString(points)

    return pointsStr
  }

  render() {
    const { size } = this.props
    const { points } = this.state

    return points && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="equilateral-polygon-svg"
        style={{ height: size, width: size }}
      >
        <polygon
          className="equilateral-polygon-polygon"
          points={points}
        />
      </svg>
    )
  }
}

export default EquilateralPolygon