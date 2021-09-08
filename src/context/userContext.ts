import { User } from 'firebase/auth'
import { createContext } from 'react'

interface UserContext {
  currentUser: User | null
  login: Function
  logout: Function
  register: Function
}

export default createContext<UserContext>({
  currentUser: null,
  login: (email, password) => {},
  register: (email, password) => {},
  logout: () => {},
})
