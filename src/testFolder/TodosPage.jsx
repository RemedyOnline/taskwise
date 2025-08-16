// import axios from "axios";
import { useEffect, useState } from "react";
import { getTodos } from "../api/testFolder/todoService";

const TodosPage = () => {
	// fetch("https://jsonplaceholder.typicode.com/todos/1")
	// 	.then((response) => response.json())
	// 	.then((json) => console.log(json));

	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	console.log("Using UseEffect bro");
	// 	axios
	// 		.get("https://jsonplaceholder.typicode.com/todos")
	// 		.then((response) => {
	// 			setTodos(response.data);
	// 			console.log(response.data);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Erro fetching todos bro..:", error);
	// 			setLoading(false);
	// 		});
	// }, []);

	useEffect(() => {
		getTodos()
			.then((res) => setTodos(res.data), setLoading(false))
			.catch((err) => console.error(err));
	}, []);

	if (loading) return <p>Loading...</p>;

	// when using tokens in requests...
	// axios.get("/protected-data", {
	// 	headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
	// });

	return (
		<section>
			<h2>TODO'S</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi excepturi
				repellendus quidem corporis, rerum nesciunt corrupti amet ab quae
				debitis suscipit eum nisi consectetur error ex. Alias nam ducimus iure!
			</p>
			<br />
			<ol className="flex flex-col gap-1">
				<li>Todo 1</li>
				<li>Todo 2</li>
				<li>Todo 3</li>
				<li>Todo 4</li>
				<li>Todo 5</li>
				{todos
					.map((todo) => (
						<li key={todo.id} className="bg-rose-300">
							{todo.title}
						</li>
					))
					.slice(0, 5)}
			</ol>
		</section>
	);
};

export default TodosPage;
