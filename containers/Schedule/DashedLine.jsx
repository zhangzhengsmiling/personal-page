import React, { useState } from 'react'

const DashedLine = ({ visible, y, x1, x2 }) => {
  return (
    <g style={{ display: visible ? 'block' : 'none' }}>
      <line x1="0" x2={x1} y1={y} y2={y} stroke="blue" strokeDasharray="5 5" />
      <line x1={x2} x2="100%" y1={y} y2={y} stroke="blue" strokeDasharray="5 5" />
    </g>
  )
}

export const useDashedLineState = () => {
  const [state, setState] = useState({
    visible: false,
    y: 0,
    x1: 0,
    x2: 0,
  })

  const show = (x1, x2, y) => {
    setState({
      visible: true,
      x1,
      x2,
      y,
    })
  }
  const hide = () => {
    setState({
      visible: true,
      x1: 0,
      x2: 0,
      y: 0,
    })
  }
  return {
    state,
    show,
    hide,
  }
}

export default React.memo(DashedLine)
