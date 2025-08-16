import apiClientDemo from "../testFolder/apiClientDemo";

export const getTodos = () => {
	return apiClientDemo.get("/todos");
};

export const AddTodo = (data) => {
	return apiClientDemo.post("/todos", data);
};

export const UpdateTodo = (id, data) => {
	return apiClientDemo.put(`/todos/${id}`, data).then((r) => r.data);
};

export const deleteTask = (id) =>
	apiClientDemo.delete(`/tasks/${id}`).then((r) => r.data);
