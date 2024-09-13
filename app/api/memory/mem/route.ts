import si, { Systeminformation } from 'systeminformation'

export const dynamic = 'force-dynamic'

// Memory information
export async function GET() {
  // https://github.com/sebhildebrandt/systeminformation/blob/3a92931c7d46605ffddc1aacb97a9727273b2888/lib/memory.js#L146
  // currentLoad: 当前负载百分比值
  const { total, free, used } = await si.mem()
  const result: MemoryMemResponse = { total, free, used }

  return Response.json(result)
}

export interface MemoryMemResponse extends Pick<Systeminformation.MemData, 'total' | 'free' | 'used'> {}
