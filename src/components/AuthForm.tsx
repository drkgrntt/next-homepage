import { useState } from 'react'
import styles from '../styles/AuthForm.module.scss'

const AuthForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      className={styles.form}
      onSubmit={async (event) => {
        event.preventDefault()
        await onSubmit(email, password)
      }}
    >
      <input
        className={styles.input}
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className={styles.input}
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input className={styles.submit} type="submit" />
    </form>
  )
}

export default AuthForm
