import axios from "axios";

const apiClientDemo2 = axios.create({
	baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000", // 1
	headers: {
		"Content-Type": "application/json", // 2
		Accept: "application/json", // 3
	},
	timeout: 15000, // 4
	withCredentials: false, // 5
});

// authomatically attaching tokens - (request interceptors)...
// request interceptor... attach token if present...

apiClientDemo2.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) config.headers.Authorization = `Bearer ${token}`;
	return config;
});

(error) => Promise.reject(error);

// centralized error handling... (response interceptors)

apiClientDemo2.interceptors.response.use(
	(response) => response, // pass-through success...
	async (error) => {
		const status = error?.response?.status;

		// eg. if token expired, redirect to login or try refresh...
		if (status === 401) {
			// option A: -> just logout
			localStorage.removeItem("token");

			// optionally, navigate to /login
		}

		// build a friendly message...
		const serverMessage =
			error?.response?.data?.message || error.message || "Unknown error";
		return Promise.reject(new Error(serverMessage));
	}
);
export default apiClientDemo2;
