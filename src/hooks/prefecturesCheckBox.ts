import { useState, useEffect, useMemo } from 'react'
import { fetcher } from './fetcher'
import useSWR from 'swr'

type PrefecturesResponses = {
  prefCode: number
  prefName: string
}

export const usePrefecturesCheckBox = () => {
  const { data, error } = useSWR('/api/v1/prefectures', fetcher)
  const [prefecturesList, setPrefecturesList] = useState<string[]>([''])

  if (error) {
    throw new Error('API Error /api/v1/prefectures')
  }

  const prefecturesCheckBoxData = useMemo(() => {
    if (typeof data === 'object' && 'result' in data) {
      const prefecturesNameList = data.result.map((element: PrefecturesResponses) => {
        const prefectureName = element.prefName
        return prefectureName
      })
      return prefecturesNameList
    }
    return []
  }, [data])

  useEffect(() => {
    setPrefecturesList(prefecturesCheckBoxData)
  }, [prefecturesCheckBoxData, data])

  return prefecturesList
}
