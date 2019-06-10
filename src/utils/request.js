import { AsyncStorage } from 'react-native';
import axios from 'axios';

// for dev env
const baseUrl = '';
// for prod env
// const baseUrl = '';

// base url
// 接口 url 前缀
axios.defaults.baseURL = baseUrl;
// 请求 header
// request header
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
// timeout setting
// 超时设置
axios.defaults.timeout = 10000; // 10s
// take cookie or not
// 是否携带 cookie
axios.defaults.withCredentials = false;
// 验证响应状态
// validate response status
axios.defaults.validateStatus = status => (status >= 200 && status < 300) || status === 304;
// max length of the content
// 内容最大字节
axios.defaults.maxContentLength = 524288; // 0.5 MB
// max redirect times
// 最大重定向次数
axios.defaults.maxRedirects = 5;
// response interceptor
// 响应拦截器
axios.interceptors.response.use(
  response => response.data,
  (error) => {
    // just make it like api responses
    const err = {
      success: false,
      msg: '',
    };
    // console.log(error.config);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
      // 发送了请求，响应超出范围 [200, 300) ∪ 304
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      err.msg = 'badStatusCode';
    } else if (error.request) {
      // The request was made but no response was received
      // 发送了请求，没有收到响应
      // console.log(error.request);
      err.msg = 'noResponse';
    } else {
      // Something happened in setting up the request that triggered an Error
      // 请求时发生错误
      // console.log('Error', error.message);
      err.msg = 'requestError';
    }
    return err;
  },
);

const request = {};

// pass null if there is nothing to send

request.get = async (url, params) => {
  const token = await AsyncStorage.getItem('token');
  return axios({
    method: 'get',
    headers: {
      token,
    },
    url,
    params,
  });
};

request.post = async (url, data) => {
  const token = await AsyncStorage.getItem('token');
  return axios({
    method: 'post',
    headers: {
      token,
    },
    url,
    data,
  });
};

request.uploadImage = async (url, data) => {
  const token = await AsyncStorage.getItem('token');
  return axios({
    method: 'post',
    headers: {
      token,
      'Content-Type': 'image/*',
    },
    url,
    data,
  });
};

export default request;
