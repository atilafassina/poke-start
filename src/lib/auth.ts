import { action, cache, redirect } from '@solidjs/router'
import { getAuthUser, logoutSession, setAuthOnResponse } from './session'
import {
  getUserByEmail,
  login,
  register,
  validateEmail,
  validatePassword,
} from './user'

export const getLoggedUser = cache(async () => {
  'use server'
  const userEmail = await getAuthUser()
  if (!userEmail) throw redirect('/login')
  const user = await getUserByEmail(userEmail)
  if (!user) throw redirect('/login')
  return { email: user.email }
}, 'user')

export const loginOrRegister = action(async (formData: FormData) => {
  'use server'
  const email = String(formData.get('email'))
  const password = String(formData.get('password'))
  const loginType = String(formData.get('loginType'))
  let error = validateEmail(email) || validatePassword(password)
  if (error) throw new Error(error)

  try {
    const user = await (loginType !== 'login'
      ? register(email, password)
      : login(email, password))
    await setAuthOnResponse(user.email)
  } catch (err) {
    throw err as Error
  }
  throw redirect('/')
})

export const logout = action(async () => {
  'use server'
  await logoutSession()
  throw redirect('/login')
})

export const redirectIfLoggedIn = cache(async () => {
  'use server'

  let userId = await getAuthUser()
  if (userId) {
    throw redirect('/')
  }
  return null
}, 'loggedIn')
