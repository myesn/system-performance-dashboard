// https://swr.vercel.app/zh-CN/docs/error-handling#status-code-and-error-object
export const fetcher = async (url: string) => {
  const res = await fetch(url)

  // 如果状态码不在 200-299 的范围内，
  // 我们仍然尝试解析并抛出它。
  if (!res.ok) {
    const resJson = await res.json()

    throw new Error(resJson.message)
  }
  return res.json()
}
