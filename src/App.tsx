import { useState } from 'react'
import { TaskType, TodoList } from "./TodoList"

import './App.css'


export type FilterValuesType = "all" | "complited" | "active";









function App() {

	


	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: "CSS", isDone: true },
		{ id: 2, title: "JS", isDone: true },
		{ id: 3, title: "React", isDone: false },
		{ id: 4, title: "TS", isDone: false },
	]);


	let [filter, setFilter] = useState <FilterValuesType>("all")



	function removeTask(id: number) {
		debugger
		let filteredTasks = tasks.filter(task => task.id !== id)
		setTasks(filteredTasks)

	}


	function changeFilter(value: FilterValuesType)  {
		setFilter(value)
	} 


	let tasksForTodolist = tasks;

	if (filter === "complited") {
		tasksForTodolist = tasks.filter(task => task.isDone === true);
	}

	if (filter === "active") {
		tasksForTodolist = tasks.filter(task => task.isDone === false);
	}




	return (


		<div className="App">
			<TodoList
				title="What to learn"
				tasks={tasksForTodolist}
				removeTask={removeTask}
				changeFilter={changeFilter}
			/>


		</div>



	)
}

export default App


