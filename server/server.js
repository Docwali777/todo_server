import express from 'express'
import bodyParser from 'body-parser'


const app = express()
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

import '../MONGO'

require('../Routes/api/todos')(app)

app.get('/', (req, res)=>{
  res.json({
    message: 'TODO_SERVER_API',
    Access_API_via: 'https://warm-anchorage-56608.herokuapp.com/api/todos'
  })
})

app.listen(PORT, ()=>{
  console.log(`server on PORT: ${PORT}`)
})
