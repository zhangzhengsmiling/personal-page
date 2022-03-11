import React from 'react'
import { GRID_WIDTH, BORDER_STYLE, SCHEDULE_TABLE_HEADER_HEIGHT } from './constants/constants'
import styles from './style.module.less'
import moment from 'moment'
import cls from 'classnames'

const OFFSET_TEXT = 20
const CIRCLE = {
  OFFSET: 5,
  RADIUS: 12,
}

const isDateEqual = (date1, date2) => {
  return moment(date1).valueOf() === moment(date2).valueOf()
}

const dateToString = ({ year, month, day }) => [year, month, day].join('-')

const HighLightDate = ({ x }) => {
  return (
    <g>
      <line x1={x} x2={x} y1={SCHEDULE_TABLE_HEADER_HEIGHT} y2="100%" stroke="#8FCBFF" />
      <circle cx={x} cy={SCHEDULE_TABLE_HEADER_HEIGHT - OFFSET_TEXT - CIRCLE.OFFSET} r={CIRCLE.RADIUS} />
    </g>
  )
}

const CommonDate = ({
  offsetOfLine,
  offsetOfText,
  date,
}) => {
  return (
    <g>
      <text
        x={offsetOfText}
        fill="rgba(0, 0, 0, 0.84)"
        y={SCHEDULE_TABLE_HEADER_HEIGHT - OFFSET_TEXT}
        textAnchor="middle"
      >
        {date.day}
      </text>
      <line x1={offsetOfLine} x2={offsetOfLine} y1={SCHEDULE_TABLE_HEADER_HEIGHT} y2="100%" stroke={BORDER_STYLE} />
    </g>
  )
}

const DataGridsBackground = ({ dateList, highlightDate }) => {
  return (
    <g className={styles.dateGridsBackground}>
      <line x1="0" y1="1" x2="100%" y2="1" stroke={BORDER_STYLE} />
      <line
        x1="0"
        y1={SCHEDULE_TABLE_HEADER_HEIGHT}
        x2="100%"
        y2={SCHEDULE_TABLE_HEADER_HEIGHT}
        stroke={BORDER_STYLE}
      />
      {dateList.map((date, index) => {
        const eq = isDateEqual(highlightDate, dateToString(date))
        const textOffsetX = (index + 0.5) * GRID_WIDTH
        return (
          <g
            key={index}
            className={cls({
              [styles.highlight]: eq,
            })}
          >
            {eq && <HighLightDate x={textOffsetX} />}
            <CommonDate date={date} offsetOfLine={index * GRID_WIDTH} offsetOfText={textOffsetX} />
          </g>
        )
      })}
    </g>
  )
}

export default DataGridsBackground
