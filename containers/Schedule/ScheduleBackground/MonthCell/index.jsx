import React from 'react'
import { GRID_WIDTH, SCHEDULE_TABLE_HEADER_HEIGHT } from '../../constants/constants'
import { daysOfMonth } from '../../utils'
import moment from 'moment'
import styles from './style.module.less'

const isToday = (year, month, day) => {
  const today = moment()
  return today.year() === year && today.month() + 1 === month && today.date() === day
}

const MonthCell = ({ month, year }) => {
  return (
    <div
      className={styles.monthCell}
      style={{
        width: daysOfMonth(year, month) * GRID_WIDTH,
        borderRight: month === 12 ? 'none' : '1px solid #666',
      }}
    >
      <header className={styles.monthHeader}>{month}</header>
      <div className={styles.dateContainer}>
        {new Array(daysOfMonth(year, month)).fill('').map((_, index) => {
          const days = daysOfMonth(year, month)
          return (
            <div
              key={index}
              style={{
                width: GRID_WIDTH,
                border: '1px solid #666',
                borderLeft: 'none',
                borderRight: index + 1 === days ? 'none' : '1px solid #666',
                backgroundColor: isToday(year, month, index + 1) ? 'red' : 'transparent',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: `calc(${SCHEDULE_TABLE_HEADER_HEIGHT}px - 20px - 1px)`,
                  borderBottom: '1px solid #666',
                  textAlign: 'center',
                }}
              >
                {index + 1}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(MonthCell)
