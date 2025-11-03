export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-5 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-blue-400">TaskIQ</h1>
      <nav className="flex flex-col gap-3 text-gray-300">
        <a href="#" className="hover:text-blue-400">🏠 Dashboard</a>
        <a href="#" className="hover:text-blue-400">📋 All Tasks</a>
        <a href="#" className="hover:text-blue-400">👥 Team</a>
        <a href="#" className="hover:text-blue-400">📊 Analytics</a>
      </nav>
    </div>
  );
}
