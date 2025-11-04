export default function TaskDrawer({ task, loading, estimate, onEstimate }) {
  return (
    <aside className="w-[380px] border border-white bg-[#0F0F0F] p-5 hidden md:block rounded-lg shadow-lg">

      {!task ? (
        <div className="text-gray-400">Select a task to view details.</div>
      ) : (
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-400">Assignee: {task.assignee}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-300">Description</h3>
            <p className="text-sm text-gray-300/90">{task.description}</p>
          </div>

          <button
            onClick={onEstimate}
            disabled={loading}
            className={`w-full rounded-md px-4 py-2 font-medium transition
              ${loading ? "bg-blue-700/60 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"}
              text-white`}
          >
            {loading ? "Analyzing with TaskIQ…" : "Estimate with AI"}
          </button>

          {estimate && (
            <div className="mt-3 rounded-md border border-gray-700 p-4 bg-gray-900/50">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">
                    Estimated Time
                  </div>
                  <div className="text-lg font-semibold">{estimate.eta}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-400">
                    Difficulty
                  </div>
                  <div className="text-lg font-semibold">{estimate.difficulty}</div>
                </div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                  Steps
                </div>
                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                  {estimate.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </aside>
  );
}
