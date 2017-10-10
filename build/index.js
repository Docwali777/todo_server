require('babel-core').transform('code', {
  "plugins": [
    ["transform-runtime", {
      "helpers": true,
      "polyfill": true,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
})
require('babel-register')({
  presets: ['env']
})
require('./server.bundle.js')
