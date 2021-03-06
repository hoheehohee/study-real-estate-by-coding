import palette from '../palette';
import typography from '../typography';

export default {
  root: {
    ...typography.body1,
    borderBottom: `1px solid ${palette.divider}`
  },
  head: {
    color: '#fff'
  },
  body: {
    color: '#fff'
  },
  stickyHeader: {
    backgroundColor: '#2A2D33'
  }
};
