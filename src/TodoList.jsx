import { TodoItem } from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

export function TodoList({ todos, toggleTodo, deleteTodo, updateSubtasks }) {
  return (
    <div className="flex justify-center gap-8 w-full">
      {/* Lista rzeczy do zrobienia */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Do zrobienia</h2>
        <ul className="mt-4 space-y-2 w-full">
          {todos.filter(todo => !todo.completed).length === 0 && (
            <p className="text-gray-500 text-center">Brak zadań</p>
          )}
          <AnimatePresence>
            {todos.filter(todo => !todo.completed).map((todo) => (
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

      {/* Lista ukończonych rzeczy */}
      <div className="w-full max-w-2xl">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Zrobione</h2>
        <ul className="mt-4 space-y-2 w-full">
          {todos.filter(todo => todo.completed).length === 0 && (
            <p className="text-gray-500 text-center">Brak ukończonych zadań</p>
          )}
          <AnimatePresence>
            {todos.filter(todo => todo.completed).map((todo) => (
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
