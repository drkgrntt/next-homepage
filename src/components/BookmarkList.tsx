import { useContext } from 'react'
import bookmarkContext from '../context/bookmarkContext'
import styles from '../styles/BookmarkList.module.scss'

const BookmarkList = () => {
  const { bookmarks } = useContext(bookmarkContext)

  const renderBookmarks = () => {
    return bookmarks.map((bookmark) => {
      return (
        <li key={bookmark.id}>
          <a href={bookmark.url}>{bookmark.url}</a>
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
