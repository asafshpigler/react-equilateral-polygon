// Link.react.test.js
import React from 'react'
import EquilateralPolygon from '../src/EquilateralPolygon.js'
import renderer from 'react-test-renderer'

test('EquilateralPolygon component is rendered', () => {
  const component = renderer.create(
    <EquilateralPolygon sideCount={3} size={50} />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
