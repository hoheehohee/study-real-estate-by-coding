import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import user, { userSaga } from './user';
import lh, { lhSaga } from './lh';

const rootReducer = combineReducers({
  auth,
  user,
  lh,
});

export function* rootSaga() {
  yield all([ authSaga(), userSaga(), lhSaga() ]);
}

export default rootReducer;