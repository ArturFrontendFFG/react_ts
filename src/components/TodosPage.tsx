import { FC, useState, useEffect } from "react";
import { List } from "./List";
import axios from "axios";
import { ITodo } from "../types/types";
import { TodoItem } from "./TodoItem";

export const TodosPage: FC = ({}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodos();
  }, []);
  
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        `https://jsonplaceholder.typicode.com/todos?limit=30`
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} />}
    />
  );
};
