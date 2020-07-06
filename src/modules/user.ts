import { createAction,  handleActions } from 'redux-actions';
import * as authAPI from 'lib/api/auth';
import { takeLatest, call } from 'redux-saga/effects'
import createRequestSaga , { createRequestActionType } from 'lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
  'user/CHECK'
);

export const tempSetUser = createAction(TEMP_SET_USER, (user: any) => user);
export const check = createAction(CHECK);

// saga 생성
const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga () {
  try {
    localStorage.removeItem('user');
  } catch (error) {
    console.log('storage is not working');
  }
}

// saga generatro function
export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

export default handleActions({
  [TEMP_SET_USER]: (state, { payload: user}: any) => ({
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
  })
}, initialState)

