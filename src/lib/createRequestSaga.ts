/**
 * put: 이펙트라고 부르는 애중 하나.
 * 이펙트는 미들웨어에 의해 수행되는 명령을 담고 있는 간단한 자바스트립트 객체.
 * put은 redux store에 dispatch하는 역활
 */

import { call, put } from 'redux-saga/effects';

export const createRequestActionType = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
}

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  /**
   * generator Function
   * 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며,
   * 내부 상태를 관리할 수 있는 함수.
   * 
   * 단 한번의 실행으로 함수의 끝까지 실행이 완료되는 일반 함수와 달리,
   * 제너레이터 함수는 사용자의 요구에 따라 (yield와 next를 통해) 일시적으로 정지될 수도 있고,
   * 다시 시작될 수도 있다.
   * 또한 제너레이터 함수의 반환으로는 제너레이터가 반환된다.
   */
  return function *(action: any) {
    // yield put(...) 로딩바 시작 구현
    try {
      const reponse = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: reponse.data
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
    }
    // yield put(...) 로딩바 종료 구현
  }

}