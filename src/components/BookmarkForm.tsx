import { useState, useContext } from 'react'
import bookmarkContext from '../context/bookmarkContext'
import styles from '../styles/BookmarkForm.module.scss'

const INITIAL_STATE = {
  url: '',
  name: '',
  folder: '',
}

const BookmarkForm = () => {
  const [state, setState] = useState(INITIAL_STATE)
  const { addBookmark } = useContext(bookmarkContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addBookmark(state)
    setState(INITIAL_STATE)
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>Add Bookmark</summary>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          required
          name="url"
          placeholder="URL"
          className="input"
          value={state.url}
          onChange={handleChange}
        />
        <input
          required
          name="name"
          placeholder="Name"
          className="input"
          value={state.name}
          onChange={handleChange}
        />
        <input
          name="folder"
          placeholder="Folder"
          className="input"
          value={state.folder}
          onChange={handleChange}
        />
        <input className="button" type="submit" />
      </form>
    </details>
  )
}

export default BookmarkForm
