import si from 'systeminformation'

// Get current time and OS uptime
export async function GET(request: Request) {
    // https://systeminformation.io/general.html
    // current: local (server) time
    // uptime: uptime in number of seconds
    // timezone: e.g. GMT+0200
    // timezoneName: e.g. CEST
    return Response.json(si.time())
}