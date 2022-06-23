import { db } from '../data/db-json'

export const getItems = type => {
  return db.filter(item => item.type === type)
}
