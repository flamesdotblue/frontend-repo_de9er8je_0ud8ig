import { Search, Filter, Plus, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/30" />
          <div>
            <h1 className="text-white font-semibold leading-none">Nova Projects</h1>
            <p className="text-xs text-white/50 -mt-0.5">Futuristic project management</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="Search projects..."
              className="pl-10 pr-3 py-2 w-72 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white transition">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
            <Plus className="h-4 w-4" />
            <span>New Project</span>
          </button>
          <button className="ml-2 p-2 rounded-md hover:bg-white/10 text-white/80">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
