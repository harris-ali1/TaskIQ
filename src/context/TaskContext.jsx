// context/TaskContext.jsx
// Single source of truth for all task data across the app.
// Wrap your app in <TaskProvider> and call useTaskContext() anywhere you need tasks.

import { createContext, useContext, useReducer } from "react";

// ─── Seed Data ────────────────────────────────────────────────────────────────
const seedTasks = [
  {
    id: 1,
    title: "Login page with OAuth2",
    description:
      "Build a responsive login page and integrate Google/GitHub OAuth. Connect to backend token exchange. Add basic tests.",
    assignee: "Harris",
    status: "Open",
  },
  {
    id: 2,
    title: "Task detail drawer UI",
    description:
      "Create the right-side drawer for task details with Estimate with AI button and result card.",
    assignee: "Madiha",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Analytics overview widget",
    description:
      "Show total estimated hours, average difficulty, and team load distribution.",
    assignee: "Harris",
    status: "Open",
  },
];

// ─── Reducer ──────────────────────────────────────────────────────────────────
// Handles all task mutations in one place.
function taskReducer(state, action) {
  switch (action.type) {
    // Add a brand-new task
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(), // simple unique id until we have a backend
          title: action.payload.title,
          description: action.payload.description,
          assignee: action.payload.assignee || "",
          status: action.payload.status || "Open",
        },
      ];

    // Update which team member is assigned to a task
    case "ASSIGN_TASK":
      return state.map((t) =>
        t.id === action.payload.taskId
          ? { ...t, assignee: action.payload.assignee }
          : t
      );

    // Change the status of a task (Open / In Progress / Done)
    case "UPDATE_STATUS":
      return state.map((t) =>
        t.id === action.payload.taskId
          ? { ...t, status: action.payload.status }
          : t
      );

    // Delete a task by id
    case "DELETE_TASK":
      return state.filter((t) => t.id !== action.payload.taskId);

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const TaskContext = createContext(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, seedTasks);

  // Convenience action creators — components call these instead of dispatch directly
  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: task });

  const assignTask = (taskId, assignee) =>
    dispatch({ type: "ASSIGN_TASK", payload: { taskId, assignee } });

  const updateStatus = (taskId, status) =>
    dispatch({ type: "UPDATE_STATUS", payload: { taskId, status } });

  const deleteTask = (taskId) =>
    dispatch({ type: "DELETE_TASK", payload: { taskId } });

  return (
    <TaskContext.Provider value={{ tasks, addTask, assignTask, updateStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
// Call this in any component that needs task data or actions.
// e.g. const { tasks, assignTask } = useTaskContext();
export function useTaskContext() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTaskContext must be used inside <TaskProvider>");
  return ctx;
}