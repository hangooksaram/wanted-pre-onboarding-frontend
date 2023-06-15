import axios from "axios";
import { API_URL } from "./sign";
import handleApiError from "../utils/handleApiError";
import { TodoWriteApiResponse, TodoReadApiResponse } from "./api";
const authorization = `Bearer ${localStorage.getItem("access_token")}`;

const createTodo = async (todo: string): Promise<TodoWriteApiResponse> => {
  try {
    const { status, data } = await axios.post(
      `${API_URL}/todos`,
      { todo },
      {
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status,
      data,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

const getTodos = async (): Promise<TodoReadApiResponse> => {
  try {
    const { status, data } = await axios.get(`${API_URL}/todos`, {
      headers: {
        Authorization: authorization,
      },
    });
    return {
      status,
      data,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
): Promise<TodoWriteApiResponse> => {
  try {
    const { status, data } = await axios.put(
      `${API_URL}/todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: authorization,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status,
      data,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

const deleteTodo = async (id: number): Promise<TodoWriteApiResponse> => {
  try {
    const { status, data } = await axios.delete(`${API_URL}/todos/${id}`, {
      headers: {
        Authorization: authorization,
      },
    });
    return {
      status,
      data,
    };
  } catch (e: unknown) {
    return handleApiError(e);
  }
};

export { createTodo, getTodos, updateTodo, deleteTodo };
