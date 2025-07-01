import React, { useEffect, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import AddTaskForm from "../components/AddTaskForm";
import TaskCard from "../components/TaskCard";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
// blushPink
// richPlum

const Dashboard = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const openModal = () => setIsModalOpen(true); // open modal fxn...
	const closeModal = () => setIsModalOpen(false); // close modal fxn...
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem("taskWise_tasks");
		return savedTasks ? JSON.parse(savedTasks) : [];
	}); // checking if tasks exist in local storage already

	useEffect(() => {
		// saving tasks to local storage
		localStorage.setItem("taskWise_tasks", JSON.stringify(tasks));
	}, [tasks]);

	const handleTasks = (task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const toggleTaskCompletion = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const deleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	};

	return (
		<section className="flex min-h-screen">
			<SideBar />
			<div className="flex-1 px-6 py-3">
				<Header />
				<div className="grid gap-4">
					{tasks.length === 0 ? (
						<div className="mt-40 text-center animate-bounce">
							<p>No tasks yet. Let's get to work!🧠</p>
						</div>
					) : (
						tasks.map((task) => (
							<TaskCard
								key={task.id}
								task={task}
								onToggleComplete={toggleTaskCompletion}
								onDelete={deleteTask}
							/>
						))
					)}
				</div>
				<button
					onClick={openModal}
					className="bg-accent text-white rounded hover:bg-richPlum-500 px-4 py-2 hover:cursor-pointer fixed right-6 bottom-6 shadow shadow-accent"
				>
					➕ Add Task
				</button>
			</div>
			<AddTaskModal isOpen={isModalOpen} onClose={closeModal}>
				<h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>
				<AddTaskForm onClose={closeModal} onAddTask={handleTasks} />
			</AddTaskModal>
		</section>
	);
};

export default Dashboard;
