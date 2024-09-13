import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { CpuCurrentLoadResponse } from '@/app/api/cpu/current-load/route'

export function useCpuCurrentLoad() {
  const { data, error, isLoading } = useSWR<CpuCurrentLoadResponse, Error>('/api/cpu/current-load', fetcher)

  return {
    currentLoad: data,
    isLoading,
    isError: error,
  }
}
