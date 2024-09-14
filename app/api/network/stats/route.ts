import si, { Systeminformation } from 'systeminformation'

export const dynamic = 'force-dynamic'

// Network Stats
export async function GET() {
  // https://systeminformation.io/network.html
  const networkInterfaceDefault = await si.networkInterfaceDefault()
  const [{ rx_bytes, tx_bytes, rx_sec, tx_sec }] = await si.networkStats(networkInterfaceDefault)
  const result: NetworkStatsResponse = {
    networkInterfaceDefault,
    networkStats: {
      rx_bytes,
      tx_bytes,
      // 从第二次调用开始，才能获得每秒的网络传输值
      rx_sec: rx_sec ?? 0,
      tx_sec: tx_sec ?? 0,
    },
  }

  return Response.json(result)
}

export interface NetworkStatsResponse {
  // 默认网卡的名称
  networkInterfaceDefault: string

  // rx_bytes：接收的总字节数
  // tx_bytes：发送的总字节数
  // rx_sec: 接收字节数/秒（下载速度）
  // tx_bytes: 每秒传输的字节数（上传速度）
  networkStats: Pick<Systeminformation.NetworkStatsData, 'rx_bytes' | 'tx_bytes' | 'rx_sec' | 'tx_sec'>
}
