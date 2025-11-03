export default function Topbar() {
  return (
    <div className="h-16 bg-gray-800 flex items-center justify-between px-6 border-b border-gray-700">
      <input
        type="text"
        placeholder="Search tasks..."
        className="bg-gray-700 text-gray-200 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">H</div>
        <span className="text-gray-200 text-sm">Harris</span>
      </div>
    </div>
  );
}
