import React, { useMemo, useRef } from 'react'
import styles from './style.module.less'
import {
  GRID_WIDTH,
  SCHEDULE_TABLE_HEADER_HEIGHT,
  SCHEDULE_HEIGHT,
  SCHEDULE_ROW_GAP,
  GRID_PADDING,
  BORDER_STYLE,
} from './constants/constants'
import { daysCross, lastOf } from './utils'
import moment from 'moment'
import DashedLine, { useDashedLineState } from './DashedLine'
import withStyles from 'isomorphic-style-loader/withStyles';
import DateGridsBackground from './DateGridsBackground'
const LEFT_WIDTH = 100

const scheduleRender = (data, index, target) => {
  const offsetY =
    countSum(target.slice(0, index).map((item) => item.scheduleList)) * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP) +
    SCHEDULE_TABLE_HEADER_HEIGHT

  const gridHeight = data.scheduleList.length * (SCHEDULE_ROW_GAP + SCHEDULE_HEIGHT)
  return {
    header: (
      <g transform={`translate(0, ${offsetY})`}>
        <text x={LEFT_WIDTH / 2} textAnchor="middle" y={gridHeight / 2} fill="rgba(0, 0, 0, .84)">
          {data.header}
        </text>
        <line x1="0" x2="100%" y1={gridHeight} y2={gridHeight} stroke={BORDER_STYLE} />
      </g>
    ),
    schedule: (
      <g transform={`translate(0, ${offsetY})`} key={index}>
        {data.scheduleList.map((list, index) => (
          <g key={index}>
            {list.map((item) => {
              return (
                <ScheduleItem
                  key={item.ext.id}
                  x={item.x}
                  width={item.width}
                  type={item.ext.type}
                  height={SCHEDULE_HEIGHT}
                  y={index * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP) + SCHEDULE_ROW_GAP / 2}
                  text="asdf"
                />
              )
            })}
          </g>
        ))}
        <line x1={0} x2="100%" y1={gridHeight} y2={gridHeight} stroke={BORDER_STYLE} />
      </g>
    ),
  }
}

// 像构建完成的排期里添加渲染属性，宽度，位置以及颜色
const mapRenderData = (gridWidth, startTime) => (data) => {
  return data.map((list) => {
    return list.map((scheduleItem) => {
      return {
        ext: scheduleItem,
        x: daysCross(startTime, scheduleItem.beginDate) * gridWidth,
        width: daysCross(scheduleItem.beginDate, scheduleItem.endDate) * gridWidth,
      }
    })
  })
}

/**
 * 排期构建
 * @param length 广告位容纳商家数
 * @param data
 * @returns
 */
export const schedule = (length) => (data) => {
  const results = new Array(length).fill('').map((_) => [])
  const input = [...data]
  while (input.length) {
    const item = input.shift()
    for (let i = 0; i < results.length; i++) {
      const resultArray = results[i]
      const lastOfArray = lastOf(resultArray)
      if (lastOfArray === null) {
        resultArray.push(item)
        break
      }
      if (moment(lastOfArray.endDate) < moment(item.beginDate)) {
        resultArray.push(item)
        break
      }
    }
  }
  return results
}

const originData = [
  {
    advSiteId: 1,
    advSiteName: '1-3坑',
    advCount: 3,
    planList: [
      {
        id: 1,
        beginDate: '2022-01-01',
        endDate: '2022-01-11',
        type: 4,
      },
      {
        id: 3,
        beginDate: '2022-01-01',
        endDate: '2022-01-22',
        type: 1,
      },
      {
        id: 2,
        beginDate: '2022-01-02',
        endDate: '2022-01-05',
        type: 2,
      },
      {
        id: 7,
        beginDate: '2022-01-08',
        endDate: '2022-01-18',
        type: 2,
      },
    ],
  },
  {
    advSiteId: 2,
    advCount: 2,
    advSiteName: '2-4坑',
    planList: [
      {
        id: 5,
        beginDate: '2022-01-02',
        endDate: '2022-01-23',
        type: 2,
      },
      {
        id: 4,
        beginDate: '2022-01-05',
        endDate: '2022-01-11',
        type: 1,
      },
      {
        id: 6,
        beginDate: '2022-01-24',
        endDate: '2022-01-30',
        type: 1,
      },
    ],
  },
  {
    advSiteId: 3,
    advCount: 2,
    advSiteName: '2-4坑',
    planList: [
      {
        id: 8,
        beginDate: '2022-01-02',
        endDate: '2022-01-23',
        type: 2,
      },
      {
        id: 9,
        beginDate: '2022-01-05',
        endDate: '2022-01-11',
        type: 3,
      },
      {
        id: 10,
        beginDate: '2022-01-24',
        endDate: '2022-01-30',
        type: 4,
      },
    ],
  },
]

const strokeColor = (type) => {
  switch (type) {
    case 1:
      return '#B4EDCE'
    case 2:
      return '#E0E0E0'
    case 3:
      return '#FFE4E0'
    case 4:
      return '#FFE2B8'
  }
}

const fillColor = (type) => {
  switch (type) {
    case 1:
      return '#E6FAEE'
    case 2:
      return '#F5F5F5'
    case 3:
      return '#FFF2F0'
    case 4:
      return '#FFF6E6'
  }
}

const textColor = (type) => {
  switch (type) {
    case 1:
      return '#16BA77'
    case 2:
      return 'rgba(0, 0, 0, .4)'
    case 3:
      return '#F53B3B'
    case 4:
      return '#F77E14'
  }
}

const range = (begin, end) => {
  const days = daysCross(begin, end)
  return new Array(days).fill('').map((_, index) => {
    const date = moment(begin).add(index, 'days')
    const year = date.year()
    const month = date.month() + 1
    const day = date.date()
    return {
      year,
      month,
      day,
    }
  })
}

const ScheduleItem = ({
  x,
  y,
  width,
  height,
  type,
  text,
}) => {
  return (
    <g className={styles.scheduleItem}>
      <g transform={`translate(${x + GRID_PADDING}, ${y})`}>
        <rect
          rx={4}
          ry={4}
          width={width - GRID_PADDING * 2}
          height={height}
          stroke={strokeColor(type)}
          fill={fillColor(type)}
        />
        <text fill={textColor(type)} x={5} y={25}>
          {text}
        </text>
      </g>
    </g>
  )
}

const countSum = (array) => {
  return array.reduce((temp, current) => temp + current.length, 0)
}

const ScheduleTable = () => {
  const beginDate = '2022-01-01'
  const endDate = '2022-01-31'
  const ds = range(beginDate, endDate)
  const list = originData.map((item) => mapRenderData(GRID_WIDTH, beginDate)(schedule(item.advCount)(item.planList)))
  const dashLine = useDashedLineState()

  const results = useMemo(() => {
    const ds = originData.map((item) => {
      return {
        header: item.advSiteName,
        scheduleList: mapRenderData(GRID_WIDTH, beginDate)(schedule(item.advCount)(item.planList)),
      }
    })
    return ds.map(scheduleRender)
  }, [])

  const rowCount = countSum(list)
  const height = rowCount * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP) + SCHEDULE_TABLE_HEADER_HEIGHT

  const ref = useRef(null)

  return (
    <div className={styles.scheduleTable}>
      <div className={styles.left}>
        <svg style={{ width: '100%', height: height }}>
          <line x1="0" y1="1" x2="100%" y2="1" stroke={BORDER_STYLE}></line>
          <line
            x1="0"
            y1={SCHEDULE_TABLE_HEADER_HEIGHT}
            x2="100%"
            y2={SCHEDULE_TABLE_HEADER_HEIGHT}
            stroke={BORDER_STYLE}
          />
          <line x1="calc(100%)" y1="0" x2="calc(100%)" y2="100%" stroke={BORDER_STYLE} />
          {results.map((item) => item.header)}
        </svg>
      </div>
      <div className={styles.right} ref={ref}>
        <svg style={{ width: ds.length * GRID_WIDTH, height: height }}>
          <DateGridsBackground dateList={ds} highlightDate="2022-01-10" />
          {results.map((item) => item.schedule)}
          <g transform={`translate(0, ${SCHEDULE_TABLE_HEADER_HEIGHT})`}>
            <DashedLine {...dashLine.state} />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default withStyles(styles)(ScheduleTable)
