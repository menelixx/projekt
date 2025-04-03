import { useState } from "react";
import { motion } from "framer-motion";

export function TodoItem({ completed, id, title, subtasks = [], toggleTodo, deleteTodo, updateSubtasks }) {
  const [newSubtask, setNewSubtask] = useState("");

  const completedSubtasks = subtasks.filter(sub => sub.completed).length;
  const progress = subtasks.length > 0 ? Math.round((completedSubtasks / subtasks.length) * 100) : 0;

  function handleAddSubtask() {
    if (newSubtask.trim() === "") return;
    const newSubtaskObj = { id: crypto.randomUUID(), title: newSubtask, completed: false };
    updateSubtasks(id, [...subtasks, newSubtaskObj]);
    setNewSubtask("");
  }

  function handleToggleSubtask(subId) {
    const updatedSubtasks = subtasks.map(sub =>
      sub.id === subId ? { ...sub, completed: !sub.completed } : sub
    );
    updateSubtasks(id, updatedSubtasks);

    const allCompleted = updatedSubtasks.length > 0 && updatedSubtasks.every(sub => sub.completed);
    toggleTodo(id, allCompleted);
  }

  function handleToggleMainTask(e) {
    const newStatus = e.target.checked;
    toggleTodo(id, newStatus);
    const updatedSubtasks = subtasks.map(sub => ({ ...sub, completed: newStatus }));
    updateSubtasks(id, updatedSubtasks);
  }

  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md border border-gray-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleToggleMainTask}
            className="w-5 h-5 accent-blue-500"
          />
          <span className={`text-gray-800 ${completed ? "line-through text-gray-500" : ""}`}>
            {title}
          </span>
        </label>
        <button
          onClick={() => deleteTodo(id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
        >
          Usuń
        </button>
      </div>

      {subtasks.length > 0 && (
        <div className="mt-2">
          <div className="h-2 w-full bg-gray-200 rounded-lg">
            <motion.div
              className="h-2 bg-blue-500 rounded-lg"
              style={{ width: `${progress}%` }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{progress}% ukończone</p>
        </div>
      )}

      <ul className="mt-2 space-y-1">
        {subtasks.map((sub) => (
          <li key={sub.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={sub.completed}
              onChange={() => handleToggleSubtask(sub.id)}
              className="w-4 h-4 accent-green-500"
            />
            <span className={`text-sm ${sub.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
              {sub.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center gap-2">
        <input
          type="text"
          value={newSubtask}
          onChange={(e) => setNewSubtask(e.target.value)}
          className="flex-1 px-2 py-1 border border-gray-300 rounded-md"
          placeholder="Dodaj subtask..."
        />
        <button
          onClick={handleAddSubtask}
          className="bg-green-500 text-white px-2 py-1 rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </motion.div>
  );
}
