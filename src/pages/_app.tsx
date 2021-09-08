import '../styles/globals.scss'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import UserProvider from '../context/UserProvider'

const App = ({ Component, pageProps }) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDdceS85F3PiSXYKIvSFCi5SNfp55U4FO8',
    authDomain: 'homepage-1653b.firebaseapp.com',
    projectId: 'homepage-1653b',
    storageBucket: 'homepage-1653b.appspot.com',
    messagingSenderId: '509560076636',
    appId: '1:509560076636:web:9ca517056ec3ff2a98e999',
    measurementId: 'G-N7L8QPEH5S',
    databaseURL:
      'https://homepage-1653b-default-rtdb.firebaseio.com/',
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  // const analytics = getAnalytics(app)

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App
