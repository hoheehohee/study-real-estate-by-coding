import { createAction } from 'typesafe-actions';
import { createRequestActionType } from 'lib/createRequestSaga';
// 액션 타입
export const [
  LH_LEASE_NOTICEINFO_SEL, 
  LH_LEASE_NOTICEINFO_SEL_SUCCESS, 
  LH_LEASE_NOTICEINFO_SEL_FAILURE
] = createRequestActionType('lh/LH_LEASE_NOTICEINFO_SEL');

// 액션 함수
export const lhLeaseNoticeInfoSel = createAction(LH_LEASE_NOTICEINFO_SEL)<null>()
