import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, default: false }
})

// if you haven't created the collection, first argument will create it
// if you have the collection already, specify the exact name of it here as the third argument
// Capital T because it is a class
const Todo = mongoose.model('todo', todoSchema)

export default Todo