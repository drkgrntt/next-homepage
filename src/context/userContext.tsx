import {
  User,
  onAuthStateChanged,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

interface UserContext {
  currentUser: User | null
  login: Function
  logout: Function
  register: Function
}

const userContext = createContext<UserContext>({
  currentUser: null,
  login: (email, password) => {},
  register: (email, password) => {},
  logout: () => {},
})
export default userContext

export const UserProvider = ({ children }) => {
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
