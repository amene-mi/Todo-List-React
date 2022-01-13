import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext"

export default function useTodo() {
    return useContext(TodoContext);
}