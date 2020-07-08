// const COLOR_O1 = 'rgb(65, 199, 199)';
export default {
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      height: '100%',
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    body: {
      backgroundColor: '#191B1F',
      height: '100%',
      color: 'rgb(224, 228, 228)',
      fontFamily: `-apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        sans-serif;
      `,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    '#root': {
      height: '100%'
    },
    a: {
      textDecoration: 'none'
    },
    '.default-btn': {
      borderColor: 'white',
      color: 'white'
    },
    '.link-btn': {
      color: 'rgb(65, 199, 199)'
    },
  }
}