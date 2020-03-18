import axios from 'axios'
import Alert from './Alert'
import Toast from './Toast'
import Storage from './Storage'

// for dev env
const baseUrl = 'http://localhost:3000/api'
// for prod env
// const baseUrl = '';

/**
 * @param {string} apiUrl
 * @return {string}
 */
const getFullUrl = (apiUrl) => {
  if (apiUrl.startsWith('https')) {
    return apiUrl
  }
  if (apiUrl.startsWith('/')) {
    return baseUrl + apiUrl
  }
  return baseUrl + '/' + apiUrl
}

/** @desc default header */
const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
  Accept: 'application/json'
}
/** @desc timeout setting */
axios.defaults.timeout = 10000 // 10s
/** @desc take cookie or not */
axios.defaults.withCredentials = false
/** @desc validate response status */
axios.defaults.validateStatus = (status): boolean => (status >= 200 && status < 300) || status === 304
/** @desc max length of the content */
axios.defaults.maxContentLength = 524288 // 0.5 MB
/** @desc max redirect times */
axios.defaults.maxRedirects = 5
/** @desc response interceptor */
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // just make it like api responses
    const err = {
      success: false,
      message: ''
    }
    // console.log(error.config);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      const { status } = error.response
      switch (status) {
        case 403:
          err.message = 'Forbidden'
          break
        case 404:
          err.message = 'Not found'
          break
        case 500:
          err.message = 'Internal server error'
          break
        case 502:
          err.message = 'Bad gateway'
          break
        case 503:
          err.message = 'Service Unavailable'
          break
        case 504:
          err.message = 'Gateway timeout'
          break
        default:
          err.message = `Unknown error with ${status}`
          break
      }
    } else if (error.request) {
      // The request was made but no response was received
      // console.log(error.request);
      err.message = 'No response'
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
      err.message = 'Request error'
    }
    return err
  }
)

/**
 * @typedef {object} IResponse
 * @property {boolean} success
 * @property {string} message
 * @property {any} data
 */

/**
 * @param {object} payload
 * @param {string} payload.url
 * @param {any} payload.params
 * @param {number} payload.feedbackType
 * @return {Promise<IResponse>}
 */
export const get = async ({
  url,
  params = null,
  feedbackType = 1
}) => {
  const token = await Storage.getToken()
  return axios.request({
    url: getFullUrl(url),
    method: 'get',
    headers: {
      ...defaultHeaders,
      token
    },
    params
  }).then((res) => {
    if (!res.success) {
      switch (feedbackType) {
        case 1:
          Alert({ message: res.message })
          break
        case 2:
          Toast.fail({ message: res.message })
          break
        default:
          break
      }
    }
    return res
  })
}

/**
 * @param {object} payload
 * @param {string} payload.url
 * @param {any} payload.data
 * @param {number} payload.feedbackType
 * @return {Promise<IResponse>}
 */
export const post = async ({
  url,
  data = null,
  feedbackType = 1
}) => {
  const token = await Storage.getToken()
  return axios.request({
    url: getFullUrl(url),
    method: 'post',
    headers: {
      ...defaultHeaders,
      token: token
    },
    data
  }).then((res) => {
    if (!res.success) {
      switch (feedbackType) {
        case 1:
          Alert({ message: res.message })
          break
        case 2:
          Toast.fail({ message: res.message })
          break
        default:
          break
      }
    }
    return res
  })
}

export default {
  get,
  post
}
