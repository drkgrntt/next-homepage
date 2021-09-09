import { createContext } from 'react'
import Bookmark from '../types/Bookmark'

interface BookmarkContext {
  bookmarks: Bookmark[]
  addBookmark: Function
}

export default createContext<BookmarkContext>({
  bookmarks: [],
  addBookmark: (url: string) => {},
})
