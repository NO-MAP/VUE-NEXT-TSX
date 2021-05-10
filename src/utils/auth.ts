import Cookies from 'js-cookie'
import config from "../config"

export const TOKEN_KEY = 'token'
export const RE_TOKEN_KEY = 'refreshtoken'

const cookieExpires = config.cookieExpires;

export const setToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: cookieExpires || 1
  })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
}


export const getReToken = () => {
  const token = Cookies.get(RE_TOKEN_KEY)
  if (token) return token
  else return false
}
