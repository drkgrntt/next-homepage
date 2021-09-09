import {
  User,
  onAuthStateChanged,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import userContext from './userContext'

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>()
  const { push } = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setCurrentUser(user)
    })
    return () => unsubscribe()
  }, [])

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
      push('/')
    } catch ({ code, message }) {
      console.error({ code, message })
    }
  }

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password)
      push('/')
    } catch ({ code, message }) {
      console.error({ code, message })
    }
  }

  const logout = async () => {
    await signOut(getAuth())
  }

  return (
    <userContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
