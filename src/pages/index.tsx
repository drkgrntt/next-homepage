import Clock from '../components/Clock'
import Link from 'next/link'
import Card from '../components/Card'
import BookmarkForm from '../components/BookmarkForm'
import BookmarkList from '../components/BookmarkList'
import styles from '../styles/Home.module.scss'
import { useContext } from 'react'
import userContext from '../context/userContext'

const Home = () => {
  const { currentUser, logout } = useContext(userContext)

  const renderAuthLink = () => {
    if (currentUser) {
      return (
        <button className="button" onClick={() => logout()}>
          Logout
        </button>
      )
    } else {
      return (
        <Link href="/login">
          <a className="button">Login</a>
        </Link>
      )
    }
  }

  return (
    <div className={styles.home}>
      <Card>
        <BookmarkList />
        <BookmarkForm />
      </Card>
      <Card>
        <Clock />
      </Card>
      <Card>{renderAuthLink()}</Card>
    </div>
  )
}

export default Home
