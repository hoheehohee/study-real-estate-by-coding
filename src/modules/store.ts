import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './login/LoginService';
import user, { userSaga } from './commons/userService';
import lh, { lhSaga } from './lh/service/reducer';

const rootReducer = combineReducers({
  auth,
  user,
  lh,
});

export function* rootSaga() {
  yield all([ authSaga(), userSaga(), lhSaga() ]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;