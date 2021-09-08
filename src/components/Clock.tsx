import { useEffect, useState, useRef } from 'react'
import styles from '../styles/Clock.module.scss'

const Clock = () => {
  const [time, setTime] = useState<string>()
  const intervalRef = useRef<NodeJS.Timer>()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  if (!time) return null
  return <h2 className={styles.time}>{time}</h2>
}

export default Clock
