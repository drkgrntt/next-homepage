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
        className="input"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input className="button" type="submit" />
    </form>
  )
}

export default AuthForm
