import React, { useState } from 'react'
import CreateTodoField from './item/Create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'


const data = [
	{
		"_id": "weasdas",
		"title": "finish the easy collaboration",
		"isComplited": false,
	},

	{
		"_id": "weasdasasdasdasd",
		"title": "Read next chapter of the book",
		"isComplited": false,
	},

	{
		"_id": "weasdaasdasds",
		"title": "Send the finished assingment",
		"isComplited": false,
	},
]

function Home() {
	const [todos, setTodos] = useState(data)

	const changeTodo = (id) => {
		const copy = [...todos] 
		const current = copy.find (t => t._id === id)
		current.isComplited = !current.isComplited
		setTodos(copy)
	}

	const removeTodo = id => {
		const copy =  
		
		setTodos([...todos].filter(t => t._id !== id))
	}


	

	// window.addTodo = addTodo так можно оттестировать функцию
	return (
		<div className="bg-zink-900 text-white w-4/5 mx-auto">
			<h1 className='text-2xl font-bold text-white mb-10 text-center'>Todo for Junior</h1>
			{todos.map(todo => ( 
			<TodoItem todo={todo} key={todo._id} changeTodo={changeTodo} removeTodo={removeTodo}/>
			))}
			<CreateTodoField setTodos={setTodos}/>
		</div>
	)
}

export default Home
