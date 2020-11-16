import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { lhLeaseNoticeInfoSel } from '../service/actions';

import { SectionTitle } from 'components/common';
import { LhNoticeInfoList } from '../components';
import { RootState } from 'modules/store';

const LhNoticeInfoContainer = () => {
  const dispatch = useDispatch();
  const { lhLeaseNoticeInfoList } = useSelector((state: RootState) => state.lh)

  useEffect(() => {
    dispatch(lhLeaseNoticeInfoSel(null));
  }, [dispatch])

  return (
    <React.Fragment>
      <SectionTitle 
        title="분양임대 공고문"
        content="광역시도 코드, 공고유형코드, 공고상태코드, 공고명으로 분양.임대공고문을 이용하여 공고유형, 공고명, 지역, 공고게시일 정보조회 서비스"
      />
      <LhNoticeInfoList 
        lhLeaseNoticeInfoList={lhLeaseNoticeInfoList}
      />
    </React.Fragment>
  );
};

export default LhNoticeInfoContainer;