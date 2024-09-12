import useSWR from 'swr'
import { Systeminformation } from 'systeminformation'
import { fetcher } from '@/lib/fetcher'

export function useOsinfoTime() {
  const { data, error, isLoading } = useSWR<Systeminformation.TimeData, Error>('/api/osinfo/time', fetcher)

  return {
    time: data,
    isLoading,
    isError: error,
  }
}
