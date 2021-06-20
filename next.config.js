/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate')

const withTM = require('next-transpile-modules')([
  'react-leaflet',
  '@react-leaflet/core'
])

module.exports = {
  ...nextTranslate(),
  ...withTM
}
