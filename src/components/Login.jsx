// import axios from "axios";
import { useState } from "react";
import { AddTodo } from "../api/todoService";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const response = await axios.post(
			// 	"https://jsonplaceholder.typicode.com/todos",
			// 	{ email, password }
			// );
			AddTodo({ email, password });
			// console.log("Login Successful", response.data);
			console.log("EMAIL:", email);
			console.log("PASSWORD:", password);

			// after successful login...
			// localStorage.setItem("token", response.data.token);
		} catch (error) {
			console.error("Error logging in:", error);
		}
	};

	return (
		<section className="p-5">
			<br />
			<form
				onSubmit={handleSubmit}
				method="post"
				className="flex flex-col gap-2 max-w-1/2 p-8 bg-blushPink-300/50 rounded-xl items-center"
			>
				<h2>LOGIN </h2>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					placeholder="Enter your email..."
					onChange={(e) => setEmail(e.target.value)}
					className="bg-white rounded-md py-2 px-4 border border-accent w-full"
				/>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					placeholder="Enter a strong password..."
					onChange={(e) => setPassword(e.target.value)}
					className="bg-white rounded-md py-2 px-4 border border-accent w-full"
				/>
				<br />

				<button
					type="submit"
					className="bg-accent text-white rounded-md px-4 py-2 border border-accent w-full"
				>
					Login
				</button>
			</form>
		</section>
	);
};

export default Login;
