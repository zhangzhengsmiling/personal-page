import moment from 'moment'

/**
 * 计算startDate与endDate之间的日期间隔
 */
export const daysCross = (beginDate, endDate) => {
  return moment.duration(moment(endDate).diff(moment(beginDate))).asDays() + 1 // 包含起始和终止日期
}

export const lastOf = (array) => {
  if (array.length === 0) return null
  return array[array.length - 1]
}

export const daysOfYear = (year) => {
  const isLeap = moment(`${year}-01-01`).isLeapYear()
  return isLeap ? 366 : 365
}

export const daysOfMonth = (year, month) => {
  const isLeap = moment(`${year}-01-01`).isLeapYear()
  const daysOfFeb = isLeap ? 29 : 28
  const days31 = [1, 3, 5, 7, 8, 10, 12]
  const days30 = [4, 6, 9, 11]
  switch (true) {
    case days31.includes(month):
      return 31
    case days30.includes(month):
      return 30
    default:
      return daysOfFeb
  }
}
