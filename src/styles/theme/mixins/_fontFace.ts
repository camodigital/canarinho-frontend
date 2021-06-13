const fontFace = () => {
  return `
    @font-face {
      font-family: 'Balsamiq Sans';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local(''),
        url('/fonts/balsamiq-sans-v3-latin-700.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Livvic';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local(''),
        url('/fonts/livvic-v8-latin-300.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Livvic';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
        url('/fonts/livvic-v8-latin-regular.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Livvic';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local(''),
        url('/fonts/livvic-v8-latin-700.woff2') format('woff2')
    }

    @font-face {
      font-family: 'Pacifico';
      font-style: normal;
      font-weight: 400;
      src: local(''),
        url('/fonts/pacifico-v17-latin-regular.woff2') format('woff2');
    }
  `
}

export default fontFace
