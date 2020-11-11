import { createAction,  handleActions } from 'redux-actions';
import * as authAPI from 'lib/api/auth';
import { takeLatest, call } from 'redux-saga/effects'
import createRequestSaga , { createRequestActionType } from 'lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
  'user/CHECK'
);
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, (user: any) => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

// saga 생성
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga () {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.log('storage is not working');
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout); // logout api 호출
    localStorage.removeItem('user');  // localStorage 에서 user 삭제
  } catch (error) {
    console.log(error);
  }
}

// saga generatro function
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions({
  [TEMP_SET_USER]: (state, { payload: user }: any) => ({
    ...state,
    user,
  }),
  [CHECK_SUCCESS]: (state, { payload: user }: any) => ({
    ...state,
    user,
    checkError: null,
  }),
  [CHECK_FAILURE]: (state, { payload: error }: any) => ({
    ...state,
    user: null,
    checkError: error
  }),
  [LOGOUT]: state => ({
    ...state,
    user: null
  })
}, initialState)

