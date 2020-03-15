import palette from '../palette';

export default {
  root: {
    backgroundColor: '#3A3C45',
    '&$selected': {
      backgroundColor: palette.background.default
    },
    '&$hover': {
      '&:hover': {
        backgroundColor: palette.background.default
      }
    }
  }
};
