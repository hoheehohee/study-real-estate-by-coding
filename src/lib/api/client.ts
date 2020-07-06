import axios from 'axios';

/**
 * axios 인스턴스를 생성
 * 기본적은 axios 기본 옵션들을 지정.
 */
const client = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  withCredentials: true
});

/**
 * 요청 인터셉터
 * 요청 진적 - 인자값: axios config
 * 요청 에러 일때  - 인자값: error
 */
client.interceptors.request.use(
  (config) => {
    // 요청 바로 직전( axios 설정값에 대해 작성 가능 )
    console.log('%c##### debug-coifng: ', 'color: #058FD7', config);
    return config;
  },
  (error) => {
    // 에러 처리
    return Promise.reject(error);
  }
)

/**
 * 응답 인터셉터
 * 응답 정상 - 인자값: http response
 * 응답 에러 - 인자값: http error
 */
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export default client;