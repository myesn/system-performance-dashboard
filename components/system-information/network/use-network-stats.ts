import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { NetworkStatsResponse } from '@/app/api/network/stats/route'

export function useNetworkStats() {
  const { data, error, isLoading } = useSWR<NetworkStatsResponse, Error>('/api/network/stats', fetcher)

  return {
    networkStats: data,
    isLoading,
    isError: error,
  }
}
