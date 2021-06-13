module.exports = {
  locales: ['en', 'pt-BR'],
  defaultLocale: 'pt-BR',
  pages: {
    '*': ['common']
  },
  // ...rest of config
  loadLocaleFrom: (lang, ns) =>
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    import(`./src/locales/${lang}/${ns}.json`).then((m) => m.default)
}
