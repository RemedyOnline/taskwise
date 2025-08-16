import apiClient from "./apiClient";

export const getTodos = () => {
	return apiClient.get("/todos");
};

export const AddTodo = (data) => {
	return apiClient.post("/todos", data);
};
