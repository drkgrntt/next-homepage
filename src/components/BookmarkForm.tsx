import { useState, useContext } from 'react'
import bookmarkContext from '../context/bookmarkContext'

const BookmarkForm = () => {
  const [url, setUrl] = useState('')
  const { addBookmark } = useContext(bookmarkContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addBookmark(url)
    setUrl('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <input className="button" type="submit" />
    </form>
  )
}

export default BookmarkForm
