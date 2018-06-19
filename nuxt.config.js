module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'MY WEB STORY',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My cloude website #2' }
    ],
    link: [
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Teko"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Jua|Song+Myung"},
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Black+Han+Sans"},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Jua' },
    ],
    script: [{ src: 'https://use.fontawesome.com/releases/v5.0.7/js/all.js', defer: '' },
    {
      src:
        "https://uicdn.toast.com/tui.code-snippet/latest/tui-code-snippet.js"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.js"
    },
    { src: "https://uicdn.toast.com/tui.chart/latest/tui-chart.js" }],
  },


  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: ['~assets/custom.css'],
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
};
