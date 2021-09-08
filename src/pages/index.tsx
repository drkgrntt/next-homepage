import Head from 'next/head'
import Clock from '../components/Clock'
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="A Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Clock />
    </div>
  )
}

export default Home
