// src/store.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: crypto.randomUUID(), title, completed: false, subtasks: [] },
          ],
        })),
      toggleTodo: (id, completed) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),
      updateSubtasks: (todoId, newSubtasks) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === todoId ? { ...todo, subtasks: newSubtasks } : todo
          ),
        })),
    }),
    {
      name: "ITEMS", // klucz w localStorage
    }
  )
);
