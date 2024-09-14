import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { FileSystemSizeResponse } from '@/app/api/file-system/size/route'

export function useFileSystemSize() {
  const { data, error, isLoading } = useSWR<FileSystemSizeResponse[], Error>('/api/file-system/size', fetcher)

  return {
    fsSizes: data,
    isLoading,
    error,
  }
}
