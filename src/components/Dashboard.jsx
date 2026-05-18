// Dashboard.jsx
import { useState } from "react";
import TaskTable from "../components/TaskTable";
import TaskDrawer from "../components/TaskDrawer";
import AddTaskModal from "../components/AddTaskModal";
import { useTaskContext } from "../context/TaskContext";

// Calls Gemini Flash and returns { eta, difficulty, steps }
async function fetchGeminiEstimate(task) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `
You are a software engineering estimator. Given a task title and description, return ONLY a JSON object with exactly these 3 fields:
- "eta": a string like "8–12 hrs" representing estimated completion time
- "difficulty": one of "Low", "Medium", or "High"
- "steps": an array of 4–6 short strings describing the implementation steps

Do not include any explanation, markdown, or extra text. Just the raw JSON.

Task Title: ${task.title}
Task Description: ${task.description}
  `.trim();

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.3,     // low temp = more consistent structured output
          maxOutputTokens: 1000, // enough for 3 fields, keeps cost low
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();

const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
console.log("Gemini raw response:", raw);

// Strip markdown code fences first, then find the JSON object
const stripped = raw.replace(/```json|```/g, "").trim();
const match = stripped.match(/\{[\s\S]*\}/);
if (!match) throw new Error("No JSON found in response");

return JSON.parse(match[0]);
}

export default function Dashboard() {
  const { tasks } = useTaskContext();

  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState(null);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (task) => {
    setSelected(task);
    setEstimate(null);
    setError(null);
  };

  const handleEstimate = async () => {
    if (!selected) return;
    setLoading(true);
    setEstimate(null);
    setError(null);

    try {
      const result = await fetchGeminiEstimate(selected);
      setEstimate(result);
    } catch (err) {
      console.error("Estimation failed:", err);
      setError("Failed to get estimate. Check your API key or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}

      <div className="flex flex-1">
        <div className="flex-1 p-6 pt-20 pb-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-2xl font-semibold">All Tasks</h1>
              <p className="text-sm text-gray-400">
                Click a row to open details and run an AI estimate.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-md transition"
            >
              + New Task
            </button>
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
          error={error}
          onEstimate={handleEstimate}
        />
      </div>
    </>
  );
}