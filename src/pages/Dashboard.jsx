import React from "react";
// blushPink
// richPlum

const Dashboard = () => {
	return (
		<section className="flex min-h-screen">
			<aside className="w-48 h-screen bg-blushPink shadow p-4 flex flex-col">
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
			<div>
				<header>
					<h1>Today's Tasks</h1>
					<p>Manage your productivity like a Kvng👑</p>
				</header>
				<button>+ Add Task</button>
				<div>
					<p>No tasks yet. Let's get to work!🧠</p>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
