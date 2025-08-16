// import axios from "axios";
import { useState } from "react";
import { loginUser } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { cn } from "../lib/cnUtils";

const Login = () => {
	const [form, setForm] = useState({ email: "", password: "" });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm((f) => ({ ...f, [name]: value }));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);

		try {
			await loginUser(form); // stores token in local stroage...
			console.log("Login Successful bro!", form);
			navigate("/dashboard");
			// window.location.href = "/dashboard"
		} catch (err) {
			const msg =
				err.response?.data?.message ||
				err.response?.data?.error ||
				err.message ||
				"Login failed";
			setError(msg);
			console.error("Error logging in:", err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="p-5 flex justify-center items-center">
			<form
				onSubmit={onSubmit}
				className="flex flex-col gap-2 max-w-sm p-6 bg-blushPink-300/50 rounded-xl items-center"
			>
				<h1 className="text-xl font-medium mb-1">Welcome back </h1>
				<label htmlFor="email" className="block mb-1 w-full">
					<span className="text-sm font-medium">Email</span>
					<input
						type="email"
						name="email"
						id="email"
						required
						value={form.email}
						placeholder="Enter your email..."
						onChange={onChange}
						className="bg-white rounded-md p-2 border border-accent w-full"
					/>
				</label>
				<label htmlFor="password" className="block mb-1 w-full">
					<span className="text-sm font-medium">Password</span>
					<input
						type="password"
						name="password"
						id="password"
						required
						value={form.password}
						onChange={onChange}
						placeholder="Enter a strong password..."
						className="bg-white rounded-md p-2 border border-accent w-full"
					/>
				</label>
				{error && <p className="text-red-600 text-sm font-medium">{error}</p>}

				<button
					type="submit"
					disabled={loading}
					className={cn(
						"bg-accent text-white rounded-md px-4 py-2 border border-accent w-full cursor-pointer",
						loading && "bg-gray-500 border-gray-500 cursor-progress"
					)}
				>
					{loading ? "Logging in..." : "Login"}
				</button>
			</form>
		</section>
	);
};

export default Login;
