import React from 'react'
import MonthCell from './MonthCell'

const ScheduleTableBackground = ({ year }) => {
  return (
    <>
      {new Array(12).fill('').map((_, index) => (
        <MonthCell key={index} month={index + 1} year={year} />
      ))}
    </>
  )
}

export default ScheduleTableBackground
