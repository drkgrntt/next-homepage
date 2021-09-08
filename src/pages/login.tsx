import { useContext } from 'react'
import AuthForm from '../components/AuthForm'
import Card from '../components/Card'
import userContext from '../context/userContext'
import styles from '../styles/Login.module.scss'

const Login = () => {
  const { login, register } = useContext(userContext)

  return (
    <div className={styles.login}>
      <Card>
        <h3 className={styles.title}>Login</h3>
        <AuthForm onSubmit={login} />
      </Card>
      <Card>
        <h3 className={styles.title}>Register</h3>
        <AuthForm onSubmit={register} />
      </Card>
    </div>
  )
}

export default Login
