'use client'

import prettyBytes from 'pretty-bytes'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useMemoryMem } from './use-memory-mem'
import type { MemoryMemResponse } from '@/app/api/memory/mem/route'

export function MemoryMemContainer() {
  const { mem, isLoading, isError } = useMemoryMem()

  if (isLoading) return <div>刷新中..</div>
  if (isError) return <div>请求失败</div>
  if (!mem) return <div>数据解析失败</div>

  return <MemoryMem {...mem} />
}

function MemoryMem(props: MemoryMemProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>内存占用率</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* className="col-span-2" */}
        <Item name="总共可用" value={prettyBytes(props.total)} />
        <Item name="空闲" value={prettyBytes(props.free)} />
        <Item name="已用" value={prettyBytes(props.used)} />
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

interface MemoryMemProps extends MemoryMemResponse {}
