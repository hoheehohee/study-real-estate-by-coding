import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';

import * as lhAPI from 'lib/api/lh';
import createRequestSaga, { createRequestActionType } from 'lib/createRequestSaga';

// 액션 타입
const [
  LH_LEASE_NOTICEINFO_SEL, 
  LH_LEASE_NOTICEINFO_SEL_SUCCESS, 
  LH_LEASE_NOTICEINFO_SEL_FAILURE
] = createRequestActionType('lh/LH_LEASE_NOTICEINFO_SEL');

// 액션 함수
export const lhLeaseNoticeInfoSel = createAction(LH_LEASE_NOTICEINFO_SEL, (resq: any) => {
  return resq;
});

// saga 생성
const lhLeaseNoticeInfoSaga = createRequestSaga(LH_LEASE_NOTICEINFO_SEL, lhAPI.lhLeaseNoticeInfoSel);

export function* lhSaga() {
  yield takeLatest(LH_LEASE_NOTICEINFO_SEL, lhLeaseNoticeInfoSaga);
}

// 초기값
const initialState = {
  lhLeaseNoticeInfoList: null
}

// 리듀서
const lh = handleActions(
  {
    [LH_LEASE_NOTICEINFO_SEL_SUCCESS]: (state, { payload: lhLeaseNoticeInfoList }: any) => ({
      ...state,
      lhLeaseNoticeInfoList,
      lhError: null,
    }),
    [LH_LEASE_NOTICEINFO_SEL_FAILURE]: (state, { payload: error }) => ({
      ...state,
      lhError: error
    })
  },
  initialState
)

export default lh;