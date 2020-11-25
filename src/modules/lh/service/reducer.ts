import { createReducer } from 'typesafe-actions';
import { LhAction, LhState } from './types';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from 'lib/createRequestSaga';

import * as lhAPI from 'lib/api/lh';
import { 
  LH_LEASE_NOTICEINFO_SEL, 
  LH_LEASE_NOTICEINFO_SEL_SUCCESS,
  LH_LEASE_NOTICEINFO_SEL_FAILURE,
} from './actions';

// saga 생성
const lhLeaseNoticeInfoSaga = createRequestSaga(LH_LEASE_NOTICEINFO_SEL, lhAPI.lhLeaseNoticeInfoSel);

export function* lhSaga() {
  yield takeLatest(LH_LEASE_NOTICEINFO_SEL, lhLeaseNoticeInfoSaga);
}

// 초기값
const initialState: LhState = {
  lhLeaseNoticeInfoList: null
}

// 리듀서
const lh = createReducer<LhState, LhAction>(initialState, {
  [LH_LEASE_NOTICEINFO_SEL_SUCCESS]: (state, { payload: lhLeaseNoticeInfoList}) => {
    return ({
      ...state,
      lhLeaseNoticeInfoList,
      lhError: null,
    })
  },
  [LH_LEASE_NOTICEINFO_SEL_FAILURE]: (state, { payload: error }) => ({
    ...state,
    lhError: error
  })
});

export default lh;