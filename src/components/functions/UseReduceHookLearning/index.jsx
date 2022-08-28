// import React from 'react'
// import { useReducer } from 'react'
// import { useState } from 'react'

// function reducer(state, action ) {

//     switch (action.type) {
//         case 'incerment':
//             return {count: state.count + 1}
//         case 'decrement':
//             return {count: state.count - 1} 
//         default:
//             return state
//     }

// }

// const UseReduceHook = () => {
    
//     const [state , dispatch]=useReducer(reducer, { count: 0 })
    


//     function increment() {
//         dispatch({type:'increment'})
//     }
//     function decrement() {
//         dispatch({type:'decrement'})

//     }
    

//   return (
//     <>
//     <button onClick={decrement}>-</button>
//     <span>{state.count}</span>
//     <button onClick={increment}>+</button>
//     </>
//   )
// }

// export default UseReduceHook

// -------------------------First exapmle------------------------------------

import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOOGEL_TODO: 'toogle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todo, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todo, newTodo(action.payload.name)]
        case ACTIONS.TOOGEL_TODO:
            return todo.map(el=>{
                if (el.id=== action.payload.id) {
                    return {...el, complete: !todo.complete}
                }
                return el
            })
        case ACTIONS.DELETE_TODO:
            return todo.filter(todo => todo.id !== action.payload.id)
        default:
            return todo
    }
    
}
function newTodo(name) {
    return {id:Date.now(), name: name, complete: false}
}



const UseReducerHook = () => {
    const [todos, dispatch]= useReducer(reducer, [])
    const [name,setName]=useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: {name:name}})
        setName('')
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </form>
        {todos.map(el =>{
            return <Todo key={el.id} todo={el} dispatch={dispatch}/>
        })}
    </div>
  )
}

export default UseReducerHook