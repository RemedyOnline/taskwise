import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import TestPage from "./testFolder/TestPage";
import TestPage2 from "./testFolder/TestPage2";
import SidebarRecap from "./testFolder/SidebarRecap";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import Settings from "./pages/NotFound";
import Profile from "./pages/NotFound";
import Analytics from "./pages/NotFound";
import Reports from "./pages/NotFound";
import TodosPage from "./testFolder/TodosPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";
// blushPink
// richPlum

function App() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route
					index
					element={
						<ProtectedRoute>
							<Dashboard />
						</ProtectedRoute>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/tasks" element={<TestPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/tasks/:taskId" element={<TestPage2 />} />
				<Route path="/analytics" element={<Analytics />} />
				<Route path="/reports" element={<Reports />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Login />} />
			</Route>
			{/* <Route path="*" element={<NotFound />} /> */}
			{/* <Route path="/login" element={<Login />} /> */}
			{/* <Route path="/signup" element={<SignUp />} /> */}
		</Routes>
	);
}

export default App;
