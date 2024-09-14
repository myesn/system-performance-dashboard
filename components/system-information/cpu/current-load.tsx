'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import AnimatedCircularProgressBar from '@/components/magicui/animated-circular-progress-bar'
import { useCpuCurrentLoad } from './use-cpu-current-load'
import type { CpuCurrentLoadResponse } from '@/app/api/cpu/current-load/route'

export function CpuCurrentLoadContainer() {
  const { currentLoad, isLoading, isError } = useCpuCurrentLoad()

  if (isLoading) return <div>刷新中..</div>
  if (isError) return <div>请求失败</div>
  if (!currentLoad) return <div>数据解析失败</div>

  return <CpuCurrentLoad {...currentLoad} />
}

function CpuCurrentLoad({ currentLoad }: CpuCurrentLoadProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CPU 利用率</CardTitle>
      </CardHeader>
      <CardContent className='flex justify-center'>
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={currentLoad}
          gaugePrimaryColor="rgb(79 70 229)"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
      </CardContent>
    </Card>
  )
}

interface CpuCurrentLoadProps extends CpuCurrentLoadResponse {}
