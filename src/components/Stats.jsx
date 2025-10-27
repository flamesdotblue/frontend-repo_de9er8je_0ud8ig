import { Folder, PlayCircle, CheckSquare, Users } from "lucide-react";

export default function Stats() {
  const items = [
    {
      title: "Total Projects",
      value: 18,
      icon: Folder,
      accent: "from-indigo-500 to-purple-500",
    },
    {
      title: "Active Projects",
      value: 7,
      icon: PlayCircle,
      accent: "from-blue-400 to-indigo-500",
    },
    {
      title: "Total Tasks",
      value: 143,
      icon: CheckSquare,
      accent: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Team Members",
      value: 24,
      icon: Users,
      accent: "from-emerald-400 to-cyan-400",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-14 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ title, value, icon: Icon, accent }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-lg shadow-black/20 transition-transform duration-200 will-change-transform hover:scale-[1.01]"
          >
            <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-30 blur-2xl`} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/60">{title}</p>
                <p className="mt-1 text-3xl font-semibold">{value}</p>
              </div>
              <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="mt-4 h-1 w-full rounded bg-white/10 overflow-hidden">
              <div className="h-full w-1/2 bg-gradient-to-r from-white/60 to-white/20 group-hover:w-3/4 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
