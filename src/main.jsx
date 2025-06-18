import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestPage from "./pages/TestPage.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
		<TestPage />
	</StrictMode>
);
