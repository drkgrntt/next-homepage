import { useContext, useEffect, useState } from 'react'
import {
  getDatabase,
  ref,
  set,
  remove,
  push,
  onValue,
  query,
  equalTo,
  orderByChild,
} from 'firebase/database'
import bookmarkContext from './bookmarkContext'
import userContext from './userContext'
import Bookmark from '../types/Bookmark'

const BookmarkProvider = ({ children }) => {
  const { currentUser } = useContext(userContext)
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  const db = getDatabase()
  const bookmarksRef = ref(db, 'bookmarks')

  useEffect(() => {
    if (!currentUser) {
      setBookmarks([])
      return
    }

    const bookmarksQuery = query(
      bookmarksRef,
      orderByChild('userId'),
      equalTo(currentUser.uid)
    )
    const unsubscribe = onValue(bookmarksQuery, (snapshot) => {
      const data = snapshot.val()
      if (!data) {
        setBookmarks([])
        return
      }

      const bookmarks = Object.keys(data).map<Bookmark>((key) => {
        return {
          id: key,
          userId: data[key].userId,
          url: data[key].url,
        }
      })
      setBookmarks(bookmarks)
    })

    return () => unsubscribe()
  }, [currentUser])

  const addBookmark = async (url: string) => {
    if (!currentUser) return

    await set(push(bookmarksRef), {
      userId: currentUser.uid,
      url,
    })
  }

  const removeBookmark = async (id: string) => {
    const bookmarkRef = ref(db, `bookmarks/${id}`)
    await remove(bookmarkRef)
  }

  return (
    <bookmarkContext.Provider
      value={{
        bookmarks,
        addBookmark,
        removeBookmark,
      }}
    >
      {children}
    </bookmarkContext.Provider>
  )
}

export default BookmarkProvider
