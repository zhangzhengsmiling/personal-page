import React, { useMemo, useRef, useEffect } from 'react'
import styles from './style.module.less'
import { GRID_WIDTH, SCHEDULE_TABLE_HEADER_HEIGHT, SCHEDULE_HEIGHT, SCHEDULE_ROW_GAP } from './constants/constants'
import ScheduleHeaderCell from './ScheduleHeaderCell'
import ScheduleTableBackground from './ScheduleBackground'
import { daysCross, daysOfYear, lastOf } from './utils'
import moment from 'moment'
import { daysOfMonth } from './utils'

const colorMap = new Map([
  [1, 'red'],
  [2, 'orange'],
  [3, 'green'],
  [4, 'blue'],
])

// export const scheduleRender = (data: RenderDataType, index: any, target: any) => {
//   const headerStyle = {
//     width: '100%',
//     height: data.scheduleList.length * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP),
//     borderBottom: index === target.length - 1 ? 'none' : '1px solid #666',
//   }

//   const scheduleRowStyle = {
//     height: data.scheduleList.length * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP),
//   }

//   return {
//     header: (
//       <div key={Math.random().toString()} style={headerStyle}>
//         {data.header}
//       </div>
//     ),
//     schedule: (
//       <div key={Math.random().toString()} className={styles.scheduleRow} style={scheduleRowStyle}>
//         {data.scheduleList.map((items, row) => (
//           <React.Fragment key={row}>
//             {items.map((item, index) => (
//               <div
//                 className={styles.item}
//                 key={index}
//                 style={{
//                   left: item.x,
//                   top: row * (SCHEDULE_HEIGHT + SCHEDULE_ROW_GAP),
//                   width: item.width,
//                   height: SCHEDULE_HEIGHT,
//                   backgroundColor: item.background,
//                 }}
//               >
//                 <span className={styles.operationTips}>
//                   <span onClick={() => console.log(item.ext)}>查看</span>
//                 </span>
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </div>
//     ),
//   }
// }

// // 像构建完成的排期里添加渲染属性，宽度，位置以及颜色
// const mapRenderData = (gridWidth: number, colorMap: Map<number, string>, currentYear: number) => (
//   data: ScheduleItemType[][],
// ) => {
//   return data.map((list) => {
//     return list.map((scheduleItem) => {
//       return {
//         ext: scheduleItem,
//         x: daysCross(`${currentYear}-01-01`, scheduleItem.beginDate) * gridWidth,
//         width: daysCross(scheduleItem.beginDate, scheduleItem.endDate) * gridWidth,
//         background: colorMap.get(scheduleItem.type) as string,
//       }
//     })
//   })
// }

// /**
//  * 排期构建
//  * @param length 广告位容纳商家数
//  * @param data
//  * @returns
//  */
// export const schedule = (length: number) => (data: ScheduleItemType[]): ScheduleItemType[][] => {
//   const results = new Array(length).fill('').map((_) => [] as ScheduleItemType[])
//   const input = [...data]
//   while (input.length) {
//     const item = input.shift() as ScheduleItemType
//     for (let i = 0; i < results.length; i++) {
//       const resultArray = results[i]
//       const lastOfArray = lastOf(resultArray)
//       if (lastOfArray === null) {
//         resultArray.push(item)
//         break
//       }
//       if (moment(lastOfArray.endDate) < moment(item.beginDate)) {
//         resultArray.push(item)
//         break
//       }
//     }
//   }
//   return results
// }

// const originData = [
//   {
//     advSiteId: 1,
//     advSiteName: '1-3坑',
//     advCount: 3,
//     planList: [
//       {
//         id: 1,
//         beginDate: '2022-01-01',
//         endDate: '2022-01-11',
//         type: 1,
//       },
//       {
//         id: 3,
//         beginDate: '2022-01-01',
//         endDate: '2022-01-22',
//         type: 1,
//       },
//       {
//         id: 2,
//         beginDate: '2022-01-02',
//         endDate: '2022-01-05',
//         type: 2,
//       },
//       {
//         id: 7,
//         beginDate: '2022-01-08',
//         endDate: '2022-01-18',
//         type: 2,
//       },
//     ],
//   },
//   {
//     advSiteId: 2,
//     advCount: 2,
//     advSiteName: '2-4坑',
//     planList: [
//       {
//         id: 5,
//         beginDate: '2022-01-02',
//         endDate: '2022-01-23',
//         type: 2,
//       },
//       {
//         id: 4,
//         beginDate: '2022-01-05',
//         endDate: '2022-01-11',
//         type: 1,
//       },
//       {
//         id: 6,
//         beginDate: '2022-01-24',
//         endDate: '2022-01-30',
//         type: 1,
//       },
//     ],
//   },
// ]

// const ScheduleTable = () => {
//   const year = 2022
//   const days = daysOfYear(year)
//   const ref = useRef<HTMLDivElement>(null)

//   const results = useMemo(() => {
//     const ds = originData.map((item) => {
//       return {
//         header: item.advSiteName,
//         scheduleList: mapRenderData(GRID_WIDTH, colorMap, year)(schedule(item.advCount)(item.planList)),
//       }
//     })
//     return ds.map(scheduleRender)
//   }, [])

//   useEffect(() => {
//     const scrollDays = daysCross(`${year}-01-01`, moment().format('YYYY-MM-DD')) - 5
//     if (ref.current !== null) ref.current.scroll(scrollDays * GRID_WIDTH, 0)
//   }, [])

//   return (
//     <div className={styles.scheduleTable}>
//       <div className={styles.tableContainer}>
//         <div className={styles.left}>
//           <ScheduleHeaderCell />
//           {results.map((result) => result.header)}
//         </div>
//         <div className={styles.right} ref={ref}>
//           <div style={{ width: GRID_WIDTH * days, height: '100%', position: 'relative' }}>
//             <ScheduleTableBackground year={year} />
//             <div
//               style={{
//                 width: days * GRID_WIDTH,
//                 height: `calc(100% - ${SCHEDULE_TABLE_HEADER_HEIGHT}px)`,
//                 position: 'absolute',
//                 top: SCHEDULE_TABLE_HEADER_HEIGHT,
//                 left: 0,
//               }}
//             >
//               {results.map((result) => result.schedule)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

const MonthCell = ({ year, month }) => {
  const days = daysOfMonth(year, month)

  const renderWidth = days * GRID_WIDTH
  const x = (daysCross(`${year}-01-01`, `${year}-${month}-01`) - 1) * GRID_WIDTH

  return (
    <g>
      <line x1={x} y1="0" x2={x} y2="100%" stroke="#E0E0E0"></line>
      <line x1={renderWidth + x} y1="0" x2={renderWidth + x} y2="100%" stroke="#E0E0E0"></line>
      <line x1={x} y1="40" x2={renderWidth + x} y2="40" stroke="#E0E0E0"></line>
      <text x={x + renderWidth / 2} y="28" fill="gray">
        {year}-{month.toString().padStart(2, '0')}
      </text>
      <g>
        {new Array(days).fill('').map((_, index) => (
          <g key={index}>
            <line
              key={index}
              x1={x + (index + 1) * GRID_WIDTH}
              y1="40"
              x2={x + (index + 1) * GRID_WIDTH}
              y2="100%"
              stroke="#E0E0E0"
            />
            <text textAnchor="middle" y={64} x={(renderWidth / days) * index + x + GRID_WIDTH / 2} fill="gray">
              {index + 1}
            </text>
          </g>
        ))}
      </g>
    </g>
  )
}

const renderData = [
  {
    id: 1,
    text: '商家ID：3333333',
    x: 12 * GRID_WIDTH,
    y: 60 + 40,
    width: 22 * GRID_WIDTH,
    height: 40,
    type: 1,
  },
  {
    id: 2,
    text: '商家ID：4444444',
    x: 6 * GRID_WIDTH,
    y: 60 + 40 + 60 + 60 + 60,
    width: 10 * GRID_WIDTH,
    height: 40,
    type: 2,
  },
  {
    id: 3,
    text: '商家ID：5555555',
    x: 18 * GRID_WIDTH,
    y: 60 + 40 + 60 + 60,
    width: 14 * GRID_WIDTH,
    height: 40,
    type: 3,
  },
  {
    id: 4,
    text: '商家ID：6666666',
    x: 1 * GRID_WIDTH,
    y: 60 + 40 + 60,
    width: 4 * GRID_WIDTH,
    height: 40,
    type: 4,
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

const ScheduleTable = () => {
  const year = 2022
  return (
    <div style={{ display: 'flex', width: '100%', height: 400 }}>
      <div style={{ width: 80, height: '100%' }}>
        <svg style={{ width: '100%', height: '100%' }}>
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#E0E0E0"></line>
          <line x1="0" y1="80" x2="100%" y2="80" stroke="#E0E0E0"></line>
          <line x1="calc(100% - 1px)" y1="0" x2="100%" y2="100%" stroke="#E0E0E0"></line>
        </svg>
      </div>
      <div style={{ width: 'calc(100% - 80px)', height: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
        <svg style={{ width: daysOfYear(year) * GRID_WIDTH, height: '100%', fill: 'transparent' }}>
          <line x1="0" y1="1" x2="100%" y2="1" stroke="#E0E0E0"></line>
          <line x1="0" y1="80" x2="100%" y2="80" stroke="#E0E0E0"></line>
          {new Array(12).fill('').map((_, index) => (
            <MonthCell key={index} year={year} month={index + 1} />
          ))}
          {renderData.map((item) => (
            <g key={item.id} transform={`translate(${item.x}, ${item.y})`}>
              <rect
                rx={4}
                ry={4}
                width={22 * GRID_WIDTH}
                height={40}
                stroke={strokeColor(item.type)}
                fill={fillColor(item.type)}
              />
              <text fill={textColor(item.type)} x={5} y={25}>
                {item.text}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default ScheduleTable
