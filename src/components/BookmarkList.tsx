import { useContext } from 'react'
import bookmarkContext from '../context/bookmarkContext'
import styles from '../styles/BookmarkList.module.scss'

const BookmarkList = () => {
  const { bookmarks, removeBookmark } = useContext(bookmarkContext)

  const renderBookmarks = () => {
    return bookmarks.map((bookmark) => {
      return (
        <li key={bookmark.id}>
          <a href={bookmark.url}>{bookmark.url}</a>
          {' - '}
          <button
            onClick={() => {
              if (!window.confirm(`remove ${bookmark.url}?`)) return
              removeBookmark(bookmark.id)
            }}
          >
            x
          </button>
        </li>
      )
    })
  }

  return (
    <>
      <h2 className={styles.title}>Bookmarks</h2>
      <ul>{renderBookmarks()}</ul>
    </>
  )
}

export default BookmarkList
