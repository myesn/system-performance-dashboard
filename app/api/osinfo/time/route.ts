import si, { Systeminformation } from 'systeminformation'

export const dynamic = 'force-dynamic'

// Get current time and OS uptime
export async function GET() {
  // https://systeminformation.io/general.html
  // current: local (server) time
  // uptime: uptime in number of seconds
  // timezone: e.g. GMT+0200
  // timezoneName: e.g. CEST
  const result: OsinfoTimeResponse = si.time()
  return Response.json(result)
}

export interface OsinfoTimeResponse extends Systeminformation.TimeData {}
