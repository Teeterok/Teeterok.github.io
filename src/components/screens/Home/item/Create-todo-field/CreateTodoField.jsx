import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6"
const CreateTodoField = ({setTodos}) => {
	const [title, setTitle] = useState('')

	const addTodo = (title) => {
		setTodos(prev => [ {
			id: new Date(),
			title,
			isComplited: false,
		},	
			...prev,
		])
		setTitle('')
	}

	return (
		<div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-20 ' >
			<div className='flex items-center'>
				<button className='flex flex-none items-center justify-center w-6 h-6 bg-pink-400 rounded-md mr-3' onClick={() => addTodo(title)}>
				<FaPlus className='text-black' size={15}/>
				</button>
			
			<input className="bg-transparent w-full border-none outline-none" type="text" onChange={e => setTitle(e.target.value)}  value={title} onKeyPress={e  => e.key === "Enter" && addTodo(title)} placeholder='Add a task' />
			</div>
			
		</div>
	);
}

export default CreateTodoField;
