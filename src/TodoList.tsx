import React from "react";


export type TaskType = {
	id: number
	title: string
	isDone: boolean
}


type PropsType = {
	title: string
	tasks: Array<TaskType>
}

export function TodoList(props: PropsType) {
	debugger
	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input />
				<button>+</button>
				<ul>

					{
						props.tasks.map((task) => {
						return	<li>
								<input type="checkbox" checked={task.isDone} />
								<span>{task.title}</span>
							</li>
						})
					}

				</ul>

				<div>
					<button>All</button>
					<button>Active</button>
					<button>Complited</button>
				</div>


			</div>
		</div>
	)
}