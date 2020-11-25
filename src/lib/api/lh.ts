import client from './client';

// 분양임대공고문 조회
export const lhLeaseNoticeInfoSel = (params: any) => (
  client.get('/api/publicAPI/lhLeaseNoticeInfo', params)
);