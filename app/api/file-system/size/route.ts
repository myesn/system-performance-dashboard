import si, { Systeminformation } from 'systeminformation'

export const dynamic = 'force-dynamic'

// File System
export async function GET() {
  // https://systeminformation.io/filesystem.html
  const result: FileSystemSizeResponse[] = await si.fsSize()

  return Response.json(result)
}

export interface FileSystemSizeResponse extends Systeminformation.FsSizeData {}
