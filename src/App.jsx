import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <Dashboard />
      </div>
    </div>
  );
}
