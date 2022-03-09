/**
 * 表格左上角固定头部单元格
 */
import React from 'react'
import { SCHEDULE_TABLE_HEADER_HEIGHT } from '../constants/constants'

const ScheduleHeaderCell = () => {
  return (
    <div style={{ width: '100%', height: SCHEDULE_TABLE_HEADER_HEIGHT, borderBottom: '1px solid #666' }}>hello</div>
  )
}

export default React.memo(ScheduleHeaderCell)
