import { createAction,  handleActions } from 'redux-actions';
import * as authAPI from 'lib/api/auth';
import { takeLatest, call } from 'redux-saga/effects'
import createRequestSaga , { createRequestActionType } from 'lib/createRequestSaga';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionType(
  'user/CHECK'
);

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
function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}