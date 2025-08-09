import "./App.css";
import Dashboard from "./pages/Dashboard";
import TestPage from "./testFolder/TestPage";
import TestPage2 from "./testFolder/TestPage2";
// blushPink
// richPlum

function App() {
	return (
		<main className="bg-blushPink-200 text-richPlum-500 min-h-screen">
			<Dashboard />
			{/* <TestPage /> */}
			{/* <TestPage2 /> */}
		</main>
	);
}

export default App;
