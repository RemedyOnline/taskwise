import axios from "axios";
// import { useNavigate } from "react-router-dom";

const apiClientMain = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: { "Content-Type": "application/json" },
});

// adding token to every request if present...
apiClientMain.interceptors.request.use((config) => {
	const token = localStorage.getItem("accessToken");

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// central error handling...
apiClientMain.interceptors.response.use(
	(res) => res,
	(err) => {
		// const navigate = useNavigate();
		// navigate("/login");
		return Promise.reject(err);
	}
);

export default apiClientMain;
