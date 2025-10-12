import { useState, useEffect } from 'react';

// const createUser = (name, email, password) => ({
//   id: Date.now().toString(),
//   name,
//   email,
//   password,
//   createdAt: new Date().toISOString()
// })
//------------------------------------------------
export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const storedUser = localStorage.getItem('auth_user')
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error('Erro ao carregar usuário do localStorage:', error)
        localStorage.removeItem('auth_user')
      }
    }
    setIsLoading(false)
  }, []);
  //------------------------------------------------------------------------------
  const register = async (name, email, password) => {
    try {
      const respostAPI = await fetch(`http://localhost:3000/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      if (!respostAPI.ok) {
        throw new Error('ERRO! HOOOK-useAuth.register().fetch() ', respostAPI.status)
      }
      //CÓDIGO ANTERIOR - LOCALSTORAGE
      // const existingUsers = JSON.parse(localStorage.getItem('auth_users') || '[]')
      // const userExists = existingUsers.find(u => u.email === email)
      // if (userExists) { throw new Error('Usuário já existe com este email') }
      // const newUser = createUser(name, email, password)
      // existingUsers.push(newUser)
      // localStorage.setItem('auth_users', JSON.stringify(existingUsers))
      // setUser(newUser)
      // localStorage.setItem('auth_user', JSON.stringify(newUser))
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  //----------------------------------------------------------------------
  const login = async (email, password) => {
    try {
      const respostAPI = await fetch(`http://localhost:3000/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      if (!respostAPI.ok) {
        throw new Error('ERRO! HOOOK-useAuth() .login() .fetch() ', respostAPI.status)
      }
      const dados = await respostAPI.json()
      // const users = JSON.parse(localStorage.getItem('auth_users') || '[]') //CÓDIGO ANTERIOR
      // const user = users.find(u => u.email === email && u.password === password)
      // if (!user) { throw new Error('Email ou senha incorretos') }
      setUser(dados.user)
      localStorage.setItem('auth_user', JSON.stringify(dados.user))
      localStorage.setItem('access_token', dados.access_token)
      return { success: true, user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
  //-------------------------------------
  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
    localStorage.removeItem('access_token')
  }
  //-----------------------------
  const isAuthenticated = !!user
  return {
    user,
    isLoading,
    isAuthenticated,
    register,
    login,
    logout
  }
} 
