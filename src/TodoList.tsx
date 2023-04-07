import React from "react";





type PropsType = {
	title: string
}

export  function TodoList(props: PropsType) {

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<input />s
				<button>+</button>
				<ul>
					<li>
						<input type="checkbox" checked={true} />
						<span>CSS&HTML</span>
					</li>
					<li>
						<input type="checkbox" checked={true} />
						<span>JS</span>
					</li>
					<li>
						<input type="checkbox" checked={false} />
						<span>React</span>
					</li>
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