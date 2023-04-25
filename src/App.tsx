import { useState } from 'react'
import { TaskType, TodoList } from "./TodoList"

import './App.css'

function App() {

	let initialTasks: Array<TaskType> = [
		{ id: 1, title: "CSS", isDone: true },
		{ id: 2, title: "JS", isDone: true },
		{ id: 3, title: "React", isDone: false },
		{ id: 4, title: "TS", isDone: false },
	]


	const [tasks, setTasks] = useState(initialTasks);

	let tasks2: Array<TaskType> = [
		{ id: 1, title: "Term", isDone: true },
		{ id: 2, title: "XXX", isDone: false },
		{ id: 3, title: "Oceans elevents", isDone: false },
	]


	function removeTask(id: number) {
		debugger
		let resultTasks = tasks.filter(task => task.id !== id)
		setTasks(resultTasks)

	}




	return (


		<div className="App">
			<TodoList
				title="What to learn"
				tasks={tasks}
				removeTask={removeTask}

			/>


		</div>



	)
}

export default App


