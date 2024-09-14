import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import type { OsinfoTimeResponse } from '@/app/api/osinfo/time/route'

export function useOsinfoTime() {
  const { data, error, isLoading } = useSWR<OsinfoTimeResponse, Error>('/api/osinfo/time', fetcher)

  return {
    time: data,
    isLoading,
    error,
  }
}
