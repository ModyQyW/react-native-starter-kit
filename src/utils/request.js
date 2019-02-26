import axios from 'axios';
import { AsyncStorage } from 'react-native';

const devUrl = 'https://easy-mock.com/mock/5c6cf4bb2ecce005c352d635/rn-mobx-starter-kit';
const prodUrl = '';
const baseUrl = process.env.NODE_ENV === 'development' ? devUrl : prodUrl;

// base url
// 接口 url 前缀
axios.defaults.baseURL = baseUrl;
// 请求 header
// request header
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json;charset=UTF-8',
  Accept: 'application/json',
};
// timeout setting
// 超时设置
axios.defaults.timeout = 3000;
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
    const err = {
      success: false,
      message: '',
    };
    // console.log(error.config);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of [200, 300) ∪ 304
      // 发送了请求，响应超出范围 [200, 300) ∪ 304
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      err.message = 'badStatusCode';
    } else if (error.request) {
      // The request was made but no response was received
      // 发送了请求，没有收到响应
      // console.log(error.request);
      err.message = 'noResponse';
    } else {
      // Something happened in setting up the request that triggered an Error
      // 请求时发生错误
      // console.log('Error', error.message);
      err.message = 'requestError';
    }
    return err;
  },
);

const request = {};

request.get = async (url, params, token) => axios({
  method: 'get',
  headers: {
    token,
  },
  url,
  params,
});

request.post = async (url, data, token) => axios({
  method: 'post',
  headers: {
    token,
  },
  url,
  data,
});

request.uploadImage = async (url, data, token) => axios({
  method: 'post',
  headers: {
    token,
    'Content-Type': 'image/*',
  },
  url,
  data,
});

export default request;
