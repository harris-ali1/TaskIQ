import { useState } from "react";
import TaskTable from "../components/TaskTable";
import TaskDrawer from "../components/TaskDrawer";

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

export default function Dashboard() {
  const [tasks] = useState(seedTasks);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState(null);

  const handleSelect = (task) => {
    setSelected(task);
    setEstimate(null); // clear previous estimate when switching tasks
  };

  // Mock estimator for now (simulate backend call)
  const handleEstimate = async () => {
    if (!selected) return;
    setLoading(true);
    setEstimate(null);
    // Simulate latency
    await new Promise((r) => setTimeout(r, 1200));
    // Mocked AI output (until we wire FastAPI)
    setEstimate({
      eta: selected.id === 1 ? "10–14 hrs" : selected.id === 2 ? "6–8 hrs" : "12–18 hrs",
      difficulty: selected.id === 2 ? "Medium" : "High",
      steps: [
        "Understand requirements and constraints",
        "Design UI/state and data flow",
        "Implement core logic and integrations",
        "Write tests and docs",
      ],
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-1">
      <div className="flex-1 p-6 pt-20 pb-6">
        <div className="mb-12">
          <h1 className="text-2xl font-semibold">All Tasks</h1>
          <p className="text-sm text-gray-900">
            Click a row to open details and run an AI estimate.
          </p>
        </div>
        <TaskTable
          tasks={tasks}
          onSelectTask={handleSelect}
          selectedId={selected?.id}
        />
      </div>

      <TaskDrawer
        task={selected}
        loading={loading}
        estimate={estimate}
        onEstimate={handleEstimate}
      />
    </div>
  );
}
