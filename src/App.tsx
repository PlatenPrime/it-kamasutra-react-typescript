import { useState } from 'react'
import {TodoList} from "./TodoList"

import './App.css'

function App() {


	return (
		<div className="App">
			<TodoList title="What to learn" />
			<TodoList title="Movies" />
			
		</div>
	)
}

export default App


