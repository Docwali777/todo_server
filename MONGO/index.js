import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import config from '../Config'

mongoose.connect(config.MONGODB_URI, {useMongoClient: true})
  .then(()=> console.log('connected to mLAB'))
  .catch(e => console.log('Error connecting to mLAB', e))
