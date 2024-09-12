import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export function formatTimestamp(current: number) {
  return dayjs(current).format('YYYY/MM/DD HH:mm:ss')
}

export function formatUptime(uptimeSeconds: number) {
  const uptimeDuration = dayjs.duration(uptimeSeconds, 'seconds')

  const days = uptimeDuration.days()
  const hours = uptimeDuration.hours()
  const minutes = uptimeDuration.minutes()
  const seconds = uptimeDuration.seconds()

  return `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`
}
