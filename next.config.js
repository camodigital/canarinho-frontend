/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const nextTranslate = require('next-translate')

module.exports = withPlugins([[nextTranslate()]])
