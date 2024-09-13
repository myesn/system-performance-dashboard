import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { MemoryMemResponse } from '@/app/api/memory/mem/route'

export function useMemoryMem() {
  const { data, error, isLoading } = useSWR<MemoryMemResponse, Error>('/api/memory/mem', fetcher)

  return {
    mem: data,
    isLoading,
    isError: error,
  }
}
