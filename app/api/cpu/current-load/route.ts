import si from 'systeminformation'

// Get current time and OS uptime
export async function GET(request: Request) {
  // https://systeminformation.io/general.html
  // currentLoad: 当前负载百分比值
  const { currentLoad } = await si.currentLoad()
  const result: CpuCurrentLoadResponse = {
    currentLoad: Math.ceil(currentLoad)
  }
  return Response.json(result)
}

interface CpuCurrentLoadResponse {
  currentLoad: number
}
