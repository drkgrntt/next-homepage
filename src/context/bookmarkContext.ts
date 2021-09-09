import { createContext } from 'react'
import Bookmark from '../types/Bookmark'

interface BookmarkContext {
  bookmarks: Bookmark[]
  addBookmark: Function
  removeBookmark: Function
}

export default createContext<BookmarkContext>({
  bookmarks: [],
  addBookmark: (url: string) => {},
  removeBookmark: (id: string) => {},
})
