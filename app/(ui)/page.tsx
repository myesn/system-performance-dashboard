import { CpuCurrentLoadContainer } from '@/components/system-information/cpu/current-load'
import { MemoryMemContainer } from '@/components/system-information/memory/mem'
import { OsinfoTimeContainer } from '@/components/system-information/osinfo/time'

export default function Home() {
  return (
    <div className="pt-6 px-4">
      <OsinfoTimeContainer />
      <div className="grid grid-cols-3 gap-4">
        <CpuCurrentLoadContainer />
        <MemoryMemContainer />
      </div>
    </div>
  )
}
