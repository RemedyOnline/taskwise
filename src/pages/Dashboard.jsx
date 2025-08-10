import React, { useEffect, useMemo, useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import AddTaskForm from "../components/AddTaskForm";
import TaskCard from "../components/TaskCard";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import plusIcon from "../assets/plusIcon.svg";
import SidebarRecap from "../testFolder/SidebarRecap";

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

	const [editedTask, setEditedTask] = useState(null);

	const [filterStatus, setFilterStatus] = useState("all"); // completion, priority...
	const [filterPriority, setFilterPriority] = useState("all"); // completion, priority...
	const [sortBy, setSortBy] = useState("entryOrder"); // time, priority...

	useEffect(() => {
		// saving tasks to local storage
		localStorage.setItem("taskWise_tasks", JSON.stringify(tasks));
	}, [tasks]);

	const handleTasks = (task) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const startEditingTask = (task) => {
		setEditedTask(task);
		setIsModalOpen(true);
	};

	const updateTask = (updatedTask) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
		);
		setEditedTask(null);
		setIsModalOpen(false);
	};

	const toggleTaskCompletion = (taskId) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const mutatedTasks = useMemo(() => {
		let mutatedTaskList = [...tasks];

		// filter by status...
		if (filterStatus === "completed") {
			mutatedTaskList = mutatedTaskList.filter((task) => task.completed);
		} else if (filterStatus === "notCompleted") {
			mutatedTaskList = mutatedTaskList.filter((task) => !task.completed);
		}
		// else: "all" -> skip filtering...

		// filter by priority...
		if (filterPriority !== "all") {
			mutatedTaskList = mutatedTaskList.filter(
				(task) => task.priority === filterPriority
			);
		}

		// sort by...
		if (sortBy === "entryOrder") {
			mutatedTaskList.sort(
				(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
			);
		} else if (sortBy === "startTime") {
			mutatedTaskList.sort((a, b) => a.startTime.localeCompare(b.startTime));
		} else if (sortBy === "latest") {
			mutatedTaskList.sort((a, b) => b.startTime.localeCompare(a.startTime));
		} else if (sortBy === "oldest") {
			mutatedTaskList.sort((a, b) => a.startTime.localeCompare(b.startTime));
		} else if (sortBy === "priorityHighFirst") {
			const order = {
				high: 1,
				medium: 2,
				low: 3,
			};
			mutatedTaskList.sort((a, b) => order[a.priority] - order[b.priority]);
		} else if (sortBy === "priorityLowFirst") {
			const order = {
				high: 1,
				medium: 2,
				low: 3,
			};
			mutatedTaskList.sort((a, b) => order[b.priority] - order[a.priority]);
		}

		return mutatedTaskList;
	}, [tasks, filterStatus, filterPriority, sortBy]);

	const deleteTask = (taskId) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
	};

	return (
		<section className="flex h-screen overflow-hidden">
			<SideBar />
			<SidebarRecap />
			<div className="flex-1 px-6 py-3 overflow-y-auto">
				<Header
					filterStatus={filterStatus}
					setFilterStatus={setFilterStatus}
					filterPriority={filterPriority}
					setFilterPriority={setFilterPriority}
					sortBy={sortBy}
					setSortBy={setSortBy}
				/>
				<div className="grid gap-4">
					{mutatedTasks.length === 0 ? (
						<div className="mt-40 text-center animate-bounce">
							<p>No tasks yet. Let's get to work!🧠</p>
						</div>
					) : (
						mutatedTasks.map((task) => (
							<TaskCard
								key={task.id}
								task={task}
								onToggleComplete={toggleTaskCompletion}
								onDelete={deleteTask}
								onEdit={startEditingTask}
							/>
						))
					)}
				</div>
				<button
					aria-label="Add Task button..."
					onClick={openModal}
					className="bg-accent text-white rounded hover:bg-richPlum-500 px-4 py-2 hover:cursor-pointer fixed right-6 bottom-6 shadow shadow-accent text-sm lg:text-base flex "
				>
					<img src={plusIcon} alt="plusIcon" className="w-6 lg:w-8" />
					Add Task
				</button>
			</div>
			<AddTaskModal isOpen={isModalOpen} onClose={closeModal}>
				<h2 className="text-xl font-bold mb-4 text-center">Add New Task</h2>
				<AddTaskForm
					onClose={closeModal}
					onAddTask={handleTasks}
					onUpdateTask={updateTask}
					taskToEdit={editedTask}
				/>
			</AddTaskModal>
		</section>
	);
};

export default Dashboard;
