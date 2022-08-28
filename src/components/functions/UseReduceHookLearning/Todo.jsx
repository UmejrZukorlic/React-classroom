import React from 'react'
import { ACTIONS } from "./index.jsx"
const Todo = (props) => {
    const {todo, dispatch} = props
  return (
    <div>
        <span style={{color: todo.complete ? "red" : "green"}}>{todo.name}</span>
        <button onClick={()=>{dispatch({ type: ACTIONS.TOOGEL_TODO, payload: {id: todo.id}})}}>Toogle</button>
        <button onClick={()=>{dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}}>Delete</button>
    </div>
  )
}

export default Todo