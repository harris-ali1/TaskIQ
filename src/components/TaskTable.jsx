export default function TaskTable({ tasks, onSelectTask, selectedId }) {
  return (
    <div className="rounded-lg border border-gray-800 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-800/70">
          <tr className="text-gray-300 text-sm">
            <th className="px-4 py-3">Task</th>
            <th className="px-4 py-3">Assignee</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {tasks.map((t) => (
            <tr
              key={t.id}
              onClick={() => onSelectTask(t)}
              className={`cursor-pointer hover:bg-gray-800/40 ${
                selectedId === t.id ? "bg-gray-800/60" : ""
              }`}
            >
              <td className="px-4 py-3">
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-gray-400 line-clamp-1">
                  {t.description}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-300">{t.assignee}</td>
              <td className="px-4 py-3">
                <span className={`text-xs px-2 py-1 rounded-md
                  ${t.status === "Open" ? "bg-gray-700 text-gray-200" : ""}
                  ${t.status === "In Progress" ? "bg-blue-700/40 text-blue-200" : ""}
                  ${t.status === "Done" ? "bg-green-700/40 text-green-200" : ""}
                `}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
