'use client'

import prettyBytes from 'pretty-bytes'
import { HardDrive } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useFileSystemSize } from './use-file-system-size'
import { CategoryBar } from '@/components/tremor/category-bar'
import type { FileSystemSizeResponse } from '@/app/api/file-system/size/route'

export function FileSystemSizeContainer() {
  const { fsSizes, isLoading, error } = useFileSystemSize()

  if (isLoading) return <div>刷新中..</div>
  if (error) return <div>{error.message}</div>
  if (!fsSizes) return <div>数据解析失败</div>

  return <FileSystemSize fsSizes={fsSizes} />
}

function FileSystemSize({ fsSizes }: FileSystemSizeProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <span>磁盘使用情况</span>
          <HardDrive className="h-4 w-4 text-muted-foreground" />
        </CardTitle>
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
        {/* <span>
          已用：{useRound}% ({prettyBytes(used)} / {prettyBytes(size)})
        </span> */}
      </div>
      {/* <Progress value={useRound} className="h-2" indicatorClassName="bg-blue-500" /> */}
      {/* 背景颜色的 css 代码没有被编译进最终的 css 文件中。https://github.com/tremorlabs/tremor-raw/issues/89 */}
      <CategoryBar
        values={[25, 25, 25, 25]}
        marker={{ value: useRound, tooltip: `已用 ${useRound}% (${prettyBytes(used)} / ${prettyBytes(size)})`, showAnimation: true }}
        colors={['cyan', 'lime', 'amber', 'pink']}
        showLabels={true}
      />
    </div>
  )
}

interface ItemProps extends FileSystemSizeResponse {}

interface FileSystemSizeProps {
  fsSizes: FileSystemSizeResponse[]
}
