import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authService";
import { cn } from "../lib/cnUtils";

const SignUp = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState("");

	const navigate = useNavigate();

	const onChange = (e) => {
		setForm((f) => ({
			...f,
			[e.target.name]: e.target.value, // check loginComponent for another way to do this...
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setSuccess(false);

		// quick client-side check mirroring the doc...
		if (form.password !== form.confirmPassword) {
			setError("Passwords do not match bro!");
			return;
		}

		setLoading(true);

		try {
			const ok = await registerUser(form);
			if (ok) setSuccess(true);

			// localStorage.setItem("accessToken", ok.token);
			navigate("/login");
		} catch (err) {
			const msg =
				err.response?.data?.message ||
				err.response?.data?.error ||
				err.message ||
				"Unable to Register bro!";
			setError(msg);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="p-5">
			<br />
			<form
				onSubmit={handleSubmit}
				className="flex flex-col gap-1 md:gap-2 max-w-sm p-6 bg-blushPink-300/50 rounded-xl items-center"
			>
				<h1 className="text-xl font-medium mb-1">Create your account</h1>
				<div className="grid md:grid-cols-2 gap-1 md:gap-2 w-full">
					<label htmlFor="firstName" className="block mb-1 w-full">
						<span className="text-sm font-medium">First Name</span>
						<input
							id="firstName"
							type="text"
							name="firstName"
							value={form.firstName}
							onChange={onChange}
							required
							className="bg-white rounded-md p-2 border border-accent w-full"
						/>
					</label>
					<label htmlFor="lastName" className="block mb-1 w-full">
						<span className="text-sm font-medium">Last Name</span>
						<input
							id="lastName"
							type="text"
							name="lastName"
							value={form.lastName}
							onChange={onChange}
							required
							className="bg-white rounded-md p-2 border border-accent w-full"
						/>
					</label>
				</div>
				<label htmlFor="email" className="block mb-1 w-full">
					<span className="text-sm font-medium">Email</span>
					<input
						id="email"
						type="email"
						name="email"
						value={form.email}
						onChange={onChange}
						required
						className="bg-white rounded-md p-2 border border-accent w-full"
					/>
				</label>
				<div className="grid md:grid-cols-2 gap-1 md:gap-2 w-full">
					<label htmlFor="password" className="block mb-1 w-full">
						<span className="text-sm font-medium">Password</span>
						<input
							id="password"
							type="password"
							name="password"
							value={form.password}
							onChange={onChange}
							required
							className="bg-white rounded-md p-2 border border-accent w-full"
						/>
					</label>
					<label htmlFor="confirmPassword" className="block mb-1 w-full">
						<span className="text-sm font-medium">Confirm Password</span>
						<input
							id="confirmPassword"
							type="password"
							name="confirmPassword"
							value={form.confirmPassword}
							onChange={onChange}
							required
							className="bg-white rounded-md p-2 border border-accent w-full"
						/>
					</label>
				</div>
				{error && (
					<p className="text-red-600 text-sm font-medium py-2">{error}</p>
				)}
				{success && (
					<p className="text-green-600 text-sm font-medium py-2">
						Registration successful bro..! <br />
						you will be redirected to the login page soon...
					</p>
				)}
				<br />
				<button
					type="submit"
					disabled={loading}
					className={cn(
						"bg-accent text-white rounded-md px-4 py-2 border border-accent w-full cursor-pointer",
						loading && "bg-gray-500 border-gray-500 cursor-progress"
					)}
				>
					{loading ? "Creating" : "Create Account"}
				</button>
			</form>
		</section>
	);
};

export default SignUp;
