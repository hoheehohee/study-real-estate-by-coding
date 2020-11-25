import { createAction, handleActions } from 'redux-actions';
import { LoginDto } from './LoginDTO';
/**
 * takeLatest: 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행.
 */
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

import createRequestSaga, { createRequestActionType } from 'lib/createRequestSaga';
import * as authAPI from 'lib/api/auth';

// 액션 타입
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionType('auth/LOGIN');

// 액션 함수

export const changeFiled = createAction(
  CHANGE_FIELD,
  ({ form, key, value }: any) => ({
    form,   // register, Login
    key,    // username, password, passwordConfirm
    value   // 실제 바꾸려는 값
  })
)

export const initializeForm = createAction(INITIALIZE_FORM, (form: any) => form);
export const login = createAction(LOGIN, ({ username, password }: LoginDto) => {
  return ({
    username,
    password
  })
});

// saga 생성
const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga)
}

// 초기값
const initialState = {
  login: {
    username: '',
    password: ''
  }
};

// 리듀서
const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value }}: any) => 
      produce(state, (draft: any) => {
        draft[form][key] = value;   // 예: state.register.username을 바꾼다.
      }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error
    })
  },
  initialState
)

export default auth;