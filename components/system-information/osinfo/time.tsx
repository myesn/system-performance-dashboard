'use client'

import { Clock4 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatTimestamp, formatUptime } from '@/lib/time-format'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useOsinfoTime } from './use-osinfo-time'
import type { OsinfoTimeResponse } from '@/app/api/osinfo/time/route'

export function OsinfoTimeContainer() {
  const { time, isLoading, error } = useOsinfoTime()

  if (isLoading) return <div>刷新中..</div>
  if (error) return <div>{error.message}</div>
  if (!time) return <div>数据解析失败</div>

  return <OsinfoTime {...time} />
}

function OsinfoTime(props: OsinfoTimeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <span>服务器时间</span>
          <Clock4 className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
        {/* <CardDescription>服务器当前时间 & 服务器正常运行时间</CardDescription> */}
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* className="col-span-2" */}
        <Item name="当前时间" value={formatTimestamp(props.current)} />
        <Item name="正常运行时间" value={formatUptime(props.uptime)} />
        <Item name="时区" value={props.timezone} />
        <Item name="时区名称" value={props.timezoneName} />
      </CardContent>
    </Card>
  )
}

function Item({ name, value, className }: ItemProps) {
  return (
    <div className={cn(className)}>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{name}</div>
    </div>
  )
}

interface ItemProps {
  name: string
  value: string | number
  className?: string
}

interface OsinfoTimeProps extends OsinfoTimeResponse {}
