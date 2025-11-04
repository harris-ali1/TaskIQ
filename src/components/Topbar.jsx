export default function Topbar() {
  return (
    // Full-width top header bar
    // Uses your custom #0F0F0F color and a subtle bottom border
    <header className="h-16 bg-[#0F0F0F] flex items-center justify-between px-6 border-b border-gray-800 shadow-md sticky top-0 z-50">
      
      {/* ========== Left: App name / logo ========== */}
      <h1 className="text-2xl font-bold text-[#666666] tracking-wide">
        TaskIQ
      </h1>

      {/* ========== Middle: Centered Search bar ========== */}
      {/* The 'flex-1' lets this section expand to fill space between left and right */}
      <div className="flex justify-center flex-1">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-[50%] bg-[#2A2A2A] text-[#666666] px-4 py-2 rounded-md focus:outline-none focus:ring-2 "
        />
      </div>

      {/* ========== Right: User info ========== */}
      <div className="flex items-center gap-3">
        {/* User circle (initial avatar) */}
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          H
        </div>

        {/* Username text */}
        <span className="text-gray-200 text-sm">Harris</span>
      </div>
    </header>
  );
}
