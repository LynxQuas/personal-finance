import { useEffect, useState } from "react"
import type { DashboardData } from "../types"

export function useDashboardData() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json")
        if (!res.ok) throw new Error("Failed to fetch dashboard data")
        const json: DashboardData = await res.json()
        setData(json)
      } catch (err: any) {
        setError(err.message || "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading, error }
}
