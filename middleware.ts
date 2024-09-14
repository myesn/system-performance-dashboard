import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimitMap = new Map()

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.ip
  if (ip === '::1') return NextResponse.next()

  // 目前 / 页面打开后，总共会发出 5 个请求，限制 15 代表 1 分钟内只允许刷新 3 次
  const limit = 15 // Limiting requests to 15 per minute per IP
  const windowMs = 60 * 1000 // 1 minute

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    })
  }

  const ipData = rateLimitMap.get(ip)

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0
    ipData.lastReset = Date.now()
  }

  if (ipData.count >= limit) {
    return NextResponse.json({ message: '请求太频繁，请 1 分钟后再试' }, { status: 429 })
  }

  ipData.count += 1

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}
