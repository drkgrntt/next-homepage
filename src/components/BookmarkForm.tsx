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
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default BookmarkForm
