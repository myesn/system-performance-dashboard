'use client'

import type { JSX } from 'react'
import prettyBytes from 'pretty-bytes'
import { Network, MoveUp, MoveDown, ArrowUp01, ArrowDown01 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNetworkStats } from './use-network-stats'
import type { NetworkStatsResponse } from '@/app/api/network/stats/route'

export function NetworkStatsContainer() {
  const { networkStats, isLoading, error } = useNetworkStats()

  if (isLoading) return <div>刷新中..</div>
  if (error) return <div>{error.message}</div>
  if (!networkStats) return <div>数据解析失败</div>

  return <NetworkStats {...networkStats} />
}

function NetworkStats({ networkInterfaceDefault, networkStats }: NetworkStatsProps) {
  const itemIconClassName = 'h-4 w-4 text-muted-foreground'

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-1">
          <span>网络流量</span>
          <Network className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {/* className="col-span-2" */}
        <Item name="网卡名称" value={networkInterfaceDefault} className="col-span-2 lg:col-span-4" />
        <Item name="上传" icon={<MoveUp className={itemIconClassName} />} value={prettyBytes(networkStats.tx_sec) + '/s'} />
        <Item name="下载" icon={<MoveDown className={itemIconClassName} />} value={prettyBytes(networkStats.rx_sec) + '/s'} />
        <Item name="上传总量" icon={<ArrowUp01 className={itemIconClassName} />} value={prettyBytes(networkStats.tx_bytes)} />
        <Item name="下载总量" icon={<ArrowDown01 className={itemIconClassName} />} value={prettyBytes(networkStats.rx_bytes)} />
      </CardContent>
    </Card>
  )
}

function Item({ name, value, className, icon }: ItemProps) {
  return (
    <div className={cn(className)}>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground flex items-center space-x-1">
        {icon}
        {name}
      </div>
    </div>
  )
}

interface ItemProps {
  name: string
  value: string | number
  className?: string
  icon?: JSX.Element
}

interface NetworkStatsProps extends NetworkStatsResponse {}
