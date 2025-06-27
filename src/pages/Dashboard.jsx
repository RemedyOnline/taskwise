import React, { useState } from "react";
import TaskModal from "../components/TaskModal";
import AddTaskForm from "../components/AddTaskForm";
// blushPink
// richPlum

const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true); // open modal fxn...
	const closeModal = () => setIsModalOpen(false); // close modal fxn...

	return (
		<section className="flex min-h-screen">
			<aside className="w-48 h-screen bg-blushPink-300 shadow-lg shadow-accent p-4 flex flex-col">
				<h2 className="text-2xl font-bold text-center mb-4">TaskWise</h2>
				<nav className="flex flex-col flex-grow">
					<ul className="flex flex-col space-y-2 border-t-2 border-richPlum pt-4">
						<li>
							<a
								href="#"
								className="font-medium hover:text-richPlum/70 hover:underline"
							>
								Dashboard
							</a>
						</li>
						<li>
							<a
								href="#"
								className="font-medium hover:text-richPlum/70 hover:underline"
							>
								History
							</a>
						</li>
						<li>
							<a
								href="#"
								className="font-medium hover:text-richPlum/70 hover:underline"
							>
								Settings
							</a>
						</li>
					</ul>
					<ul className="mt-auto border-t-2 border-richPlum pt-2">
						<li>
							<a
								href="#"
								className="font-medium hover:text-richPlum/70 hover:underline"
							>
								Logout
							</a>
						</li>
					</ul>
				</nav>
			</aside>
			<div className="flex-1 p-6">
				<header className="mb-6">
					<h1 className="text-3xl font-bold">Today's Tasks</h1>
					<p className="text-sm text-richPlum-300">
						Manage your productivity like a Kvng👑
					</p>
				</header>
				<button
					onClick={openModal}
					className="bg-accent text-white rounded hover:bg-richPlum-500 px-4 py-2 hover:cursor-pointer"
				>
					➕ Add Task
				</button>
				<div className="mt-4 text-center animate-bounce">
					<p>No tasks yet. Let's get to work!🧠</p>
				</div>
			</div>
			<TaskModal isOpen={isModalOpen} onClose={closeModal}>
				<h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>
				<AddTaskForm />
			</TaskModal>
		</section>
	);
};

export default Dashboard;
