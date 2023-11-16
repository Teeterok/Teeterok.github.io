import cn from "classnames"
import React from 'react'
import { BsTrash } from "react-icons/bs"
import Check from './Check'


function TodoItem({todo, changeTodo, removeTodo}) {
	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full' > 
		<button onClick={() => changeTodo(todo._id)}  className='flex items-center'>
		<Check isComplited={todo.isComplited}/>
		
			
			<span className={cn({
				'line-through': todo.isComplited
			})}>{todo.title}
			</span>
			</button>
			<button onClick={() => removeTodo(todo._id)}>
			<BsTrash size={22} className='text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300' />
			</button>
			
		</div>
	)
}

export default TodoItem
