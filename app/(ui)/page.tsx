import { ModeToggle } from '@/components/mode-toggle'
import { CpuCurrentLoadContainer } from '@/components/system-information/cpu/current-load'
import { FileSystemSizeContainer } from '@/components/system-information/file-system/size'
import { MemoryMemContainer } from '@/components/system-information/memory/mem'
import { NetworkStatsContainer } from '@/components/system-information/network/stats'
import { OsinfoTimeContainer } from '@/components/system-information/osinfo/time'

export default function Home() {
  return (
    <div className="p-4 space-y-3">
      <ModeToggle className="absolute right-[16px] top-[28px]" />
      <OsinfoTimeContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
        <CpuCurrentLoadContainer />
        <MemoryMemContainer />
        <NetworkStatsContainer />
        <FileSystemSizeContainer />
      </div>
    </div>
  )
}
