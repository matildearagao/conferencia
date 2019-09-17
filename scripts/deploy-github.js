const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://matildehomem.github.io/conferencia/',
  },
  () => {
    console.log('Deploy Complete!')
  }
)