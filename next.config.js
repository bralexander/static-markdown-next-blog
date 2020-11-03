// tells next to use raw loader when .md and .yml files are imorted
module.exports = {
    target: 'serverless',
    webpack: function (config) {
      config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
      config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
      return config
    }
  }