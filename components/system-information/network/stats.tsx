'use client'

import prettyBytes from 'pretty-bytes'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useNetworkStats } from './use-network-stats'
import type { NetworkStatsResponse } from '@/app/api/network/stats/route'

export function NetworkStatsContainer() {
  const { networkStats, isLoading, isError } = useNetworkStats()

  if (isLoading) return <div>刷新中..</div>
  if (isError) return <div>请求失败</div>
  if (!networkStats) return <div>数据解析失败</div>

  return <NetworkStats {...networkStats} />
}

function NetworkStats({ networkInterfaceDefault, networkStats }: NetworkStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>网络流量</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* className="col-span-2" */}
        <Item name="网卡名称" value={networkInterfaceDefault} className="col-span-1 md:col-span-2" />
        <Item name="上传" value={prettyBytes(networkStats.tx_sec) + '/s'} />
        <Item name="下载" value={prettyBytes(networkStats.rx_sec) + '/s'} />
        <Item name="上传总量" value={prettyBytes(networkStats.tx_bytes)} />
        <Item name="下载总量" value={prettyBytes(networkStats.rx_bytes)} />
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

interface NetworkStatsProps extends NetworkStatsResponse {}
