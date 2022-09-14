import { Weather, Visibility } from './enums'

export type Words = 'otra' | 'cosa' | 'aqui' | 'verdad'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
