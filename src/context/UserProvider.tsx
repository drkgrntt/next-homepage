import {
  User,
  onAuthStateChanged,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import userContext from './userContext'

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>()

  useEffect(() => {
    onAuthStateChanged(getAuth(), (user) => {
      console.log(user)
      setCurrentUser(user)
    })
  })

  const register = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password)
    } catch ({ code, message }) {
      console.error({ code, message })
    }
  }

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password)
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
