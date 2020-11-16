import { useSelector } from 'react-redux';
import { RootState } from 'modules/store';

const lhList = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lhLeaseNoticeInfoList = useSelector((state: RootState) => state.lh.lhLeaseNoticeInfoList);
  return lhLeaseNoticeInfoList;
}

export default lhList;