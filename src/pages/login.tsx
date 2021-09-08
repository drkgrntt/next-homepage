import { useContext, useState } from 'react'
import userContext from '../context/userContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(userContext)

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault()
        await login(email, password)
      }}
    >
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}

export default Login
