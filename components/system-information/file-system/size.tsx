'use client'

import prettyBytes from 'pretty-bytes'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useFileSystemSize } from './use-file-system-size'
import type { FileSystemSizeResponse } from '@/app/api/file-system/size/route'
import { Progress } from '@/components/ui/progress'

export function FileSystemSizeContainer() {
  const { fsSizes, isLoading, isError } = useFileSystemSize()

  if (isLoading) return <div>刷新中..</div>
  if (isError) return <div>请求失败</div>
  if (!fsSizes) return <div>数据解析失败</div>

  return <FileSystemSize fsSizes={fsSizes} />
}

function FileSystemSize({ fsSizes }: FileSystemSizeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>磁盘使用情况</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {fsSizes.map((fsSize) => {
          return <Item key={fsSize.fs} {...fsSize} />
        })}
      </CardContent>
    </Card>
  )
}

function Item({ fs, type, size, used, available, use, rw }: ItemProps) {
  const useRound = Math.round(use)
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span>
          {fs} ({type}) {!rw && '只读'}
        </span>
        <span>剩余：{prettyBytes(available)}</span>
        <span>
          已用：{useRound}% ({prettyBytes(used)} / {prettyBytes(size)})
        </span>
      </div>
      <Progress value={useRound} className="h-2" indicatorClassName="bg-blue-500" />
    </div>
  )
}

interface ItemProps extends FileSystemSizeResponse {}

interface FileSystemSizeProps {
  fsSizes: FileSystemSizeResponse[]
}
