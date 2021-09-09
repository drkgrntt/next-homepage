import Clock from '../components/Clock'
import Card from '../components/Card'
import BookmarkForm from '../components/BookmarkForm'
import BookmarkList from '../components/BookmarkList'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Card>
        <BookmarkList />
        <BookmarkForm />
      </Card>
      <Card>
        <Clock />
      </Card>
    </div>
  )
}

export default Home
