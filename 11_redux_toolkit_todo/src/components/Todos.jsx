import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, toggleCompleted, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch =useDispatch();

  return (
    <>
    {
    todos.map((todo) =>(
         <div key={todo.id}
         className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
             todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
         }`}
     >
         <input
             type="checkbox"
             className="cursor-pointer"
             checked={todo.completed}
             onChange={()=> dispatch(toggleCompleted(todo.id))}
         />
         <input
             type="text"
             className={`border outline-none w-full bg-transparent rounded-lg 
                 "border-black/10 px-2"
              ${todo.completed ? "line-through" : ""}`}
             value={todo.text}
             onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
         />
         {/* Edit, Save Button */}
         <button
             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
             onClick={() => {
                 if (todo.completed) return;
             }}
             disabled={todo.completed}
         >
             "📁"
         </button>
         {/* Delete Todo Button */}
         <button
             className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
             onClick={() => dispatch(removeTodo(todo.id))}
         >
             ❌
         </button>
     </div>
    ))}
    </>
  )
}

export default Todos