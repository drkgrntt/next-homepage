import { useCallback, useContext } from 'react'
import bookmarkContext from '../context/bookmarkContext'
import styles from '../styles/BookmarkList.module.scss'
import Bookmark from '../types/Bookmark'

const BookmarkList = () => {
  const { bookmarks, removeBookmark } = useContext(bookmarkContext)

  const dividedBookmarks = bookmarks.reduce<
    Record<string, Bookmark[]>
  >((dividedBookmarks, bookmark) => {
    if (!dividedBookmarks[bookmark.folder]) {
      dividedBookmarks[bookmark.folder] = []
    }
    dividedBookmarks[bookmark.folder].push(bookmark)

    return dividedBookmarks
  }, {})

  const renderBookmarks = (bms: Bookmark[]) => {
    return bms.map(({ id, url, name }) => {
      return (
        <li key={id}>
          <a href={url}>{name}</a>
          {' - '}
          <button
            onClick={() => {
              if (!window.confirm(`remove ${name} (${url})?`)) return
              removeBookmark(id)
            }}
          >
            x
          </button>
        </li>
      )
    })
  }

  const renderFolders = () => {
    return Object.keys(dividedBookmarks).map((folder) => {
      if (!folder) {
        return renderBookmarks(dividedBookmarks[folder])
      }

      return (
        <details className={styles.details}>
          <summary className={styles.summary}>{folder}</summary>
          {renderBookmarks(dividedBookmarks[folder])}
        </details>
      )
    })
  }

  return (
    <>
      <h2 className={styles.title}>Bookmarks</h2>
      <ul>{renderFolders()}</ul>
    </>
  )
}

export default BookmarkList
