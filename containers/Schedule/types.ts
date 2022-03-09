export interface ScheduleItemType {
  id: number
  beginDate: string
  endDate: string
  type: number // 枚举值
}

export interface RenderDataType {
  header: string
  scheduleList: {
    x: number
    width: number
    background: string
    ext: any
  }[][]
}
