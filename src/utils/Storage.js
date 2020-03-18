import { AsyncStorage } from 'react-native'
import { isString, isNull } from 'lodash'

/**
 * @desc pack AsyncStorage.setItem, value should be available to JSON.stringify
 * @param {string} key
 * @param {any} value
 * @return {Promise<void>}
 */
const setItem = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

/**
 * @desc pack AsyncStorage.getItem, JSON.parse auto
 * @param {string} key
 * @return {Promise<any>}
 */
const getItem = (key) => {
  return AsyncStorage.getItem(key).then((res) => {
    return isNull(res) ? null : JSON.parse(res)
  })
}

/**
 * @desc pack AsyncStorage.removeItem
 * @param {string} key
 * @return {Promise<void>}
 */
const removeItem = (key) => {
  return AsyncStorage.removeItem(key)
}

/**
 * @desc pack AsyncStorage.clear
 * @return {Promise<void>}
 */
const clear = () => {
  return AsyncStorage.clear()
}

/**
 * @desc token key in storage
 */
const tokenKey = 'token'

/**
 * @desc get token from storage
 * @return {Promise<string>}
 */
const getToken = async () => {
  const token = await getItem(tokenKey)
  return isString(token) ? token : ''
}

/**
 * @desc set token into storage
 * @param {string} token
 * @return {Promise<void>}
 */
const setToken = async (token) => {
  return setItem(tokenKey, token)
}

/**
 * @desc remove token from storage
 * @return {Promise<void>}
 */
const removeToken = async () => {
  return removeItem(tokenKey)
}

/**
 * @desc username key in storage
 */
const usernameKey = 'username'

/**
 * @desc get username from storage
 * @return {Promise<string>}
 */
const getUsername = async () => {
  const username = await getItem(usernameKey)
  return isString(username) ? username : ''
}

/**
 * @desc set username into storage
 * @param {string} username
 * @return {Promise<void>}
 */
const setUsername = async (username) => {
  return setItem(usernameKey, username)
}

/**
 * @desc remove username from storage
 * @return {Promise<void>}
 */
const removeUsername = async () => {
  return removeItem(usernameKey)
}

export default {
  setItem,
  getItem,
  removeItem,
  clear,
  getToken,
  setToken,
  removeToken,
  getUsername,
  setUsername,
  removeUsername
}
