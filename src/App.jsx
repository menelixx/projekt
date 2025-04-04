// src/App.jsx
import { motion } from "framer-motion";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
import { useTodoStore } from "./store";

export default function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, updateSubtasks } = useTodoStore();

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Todo List
        </h1>
        <NewTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          updateSubtasks={updateSubtasks}
        />
      </div>
    </motion.div>
  );
}
