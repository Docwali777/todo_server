
  if(process.env.NODE_ENV !== 'production'){
    module.exports = require('./dev')
  } else {
    module.exports = {
      MONGODB_URI: process.env.MONGODB_URI,
      urlBase: 'https://warm-anchorage-56608.herokuapp.com'
    }
  }
