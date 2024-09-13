import si from 'systeminformation'

export const dynamic = 'force-dynamic'

// Get current time and OS uptime
export async function GET() {
  // https://systeminformation.io/general.html
  // currentLoad: 当前负载百分比值
  const { currentLoad } = await si.currentLoad()
  const result: CpuCurrentLoadResponse = {
    currentLoad: Math.ceil(currentLoad),
  }
  return Response.json(result)
}

export interface CpuCurrentLoadResponse {
  currentLoad: number
}
