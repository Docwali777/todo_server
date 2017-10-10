import Todos from '../../MONGO/todos'
import config from '../../Config'
console.log(config.urlBase);
module.exports = (app) => {

app.get(`/api/todos`, async (req, res)=>{

  const allTodos = await Todos.find({})

  try{
    return res.status(200).json({allTodos})
  } catch(e){
  return  res.status(e.status).json({error: 'Could not find todos list or access database'})
  }
})

  app.post(`/api/todos/new`, async (req, res) => {
    const { item } = req.body
 const newTodo = new Todos({item, date: Date.now()})
    try {
      return res.status(200).json({todo: await newTodo.save()})
    } catch(e){
    return  res.status(e.status).json({error: 'Error with creating todo'})
    }
  })

  app.post('/api/todos/delete', async (req, res)=>{
    let { _id } = req.body

  const deletedItem =  await Todos.deleteOne({_id})
  const newTodosWithItemDelete = await Todos.find({})
  
  try{
    return res.status(200).json({deletedItem})
  } catch(e){
  return  res.status(e.status).json({message: 'Issue with deleting item '})
  }

  })
}
