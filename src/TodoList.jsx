import { TodoItem } from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

export function TodoList({ todos, toggleTodo, deleteTodo, updateSubtasks }) {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="flex gap-6 mt-4">
      
      <div className="w-1/2">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Do zrobienia
        </h2>
        <ul className="space-y-2">
          {activeTodos.length === 0 && (
            <p className="text-gray-500 text-center">Brak zadań</p>
          )}
          <AnimatePresence>
            {activeTodos.map(todo => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TodoItem
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  updateSubtasks={updateSubtasks}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      <div className="w-1/2">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Zrobione
        </h2>
        <ul className="space-y-2">
          {completedTodos.length === 0 && (
            <p className="text-gray-500 text-center">Brak zadań</p>
          )}
          <AnimatePresence>
            {completedTodos.map(todo => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <TodoItem
                  {...todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                  updateSubtasks={updateSubtasks}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
