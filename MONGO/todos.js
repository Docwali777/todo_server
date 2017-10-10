import mongoose, {Schema } from 'mongoose'


const todoSchema = new Schema({
  item: String,
  date: Number
})

const Todos = mongoose.model('todos', todoSchema)

export default Todos
