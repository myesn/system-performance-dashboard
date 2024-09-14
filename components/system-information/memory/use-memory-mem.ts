import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { MemoryMemResponse } from '@/app/api/memory/mem/route'

export function useMemoryMem() {
  const { data, error, isLoading } = useSWR<MemoryMemResponse, Error>('/api/memory/mem', fetcher)

  return {
    mem: data,
    isLoading,
    error,
  }
}
