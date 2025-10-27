import { Calendar, Clock, MoreVertical, Users } from "lucide-react";

const projects = [
  {
    id: "P-4012",
    name: "Neon Dashboard Revamp",
    description: "Redesign the analytics surface with glowing tiles and better theming.",
    status: "In Progress",
    progress: 64,
    due: "Dec 12, 2025",
    team: ["RA", "MK", "JS"],
    accent: "from-indigo-500 to-blue-400",
  },
  {
    id: "P-4003",
    name: "Mobile App MVP",
    description: "Ship v1 for iOS/Android with core task flows and auth.",
    status: "Planning",
    progress: 22,
    due: "Nov 30, 2025",
    team: ["AL", "CT"],
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    id: "P-3998",
    name: "AI Task Routing",
    description: "Auto-assign tasks using priority and teammate capacity.",
    status: "Review",
    progress: 88,
    due: "Oct 28, 2025",
    team: ["RA", "MK", "JS", "AL"],
    accent: "from-emerald-400 to-cyan-400",
  },
  {
    id: "P-3982",
    name: "Website Launch",
    description: "Marketing site with 3D hero using Spline and dark theme.",
    status: "Completed",
    progress: 100,
    due: "Oct 10, 2025",
    team: ["JS"],
    accent: "from-amber-400 to-rose-400",
  },
];

function Avatar({ initials }) {
  return (
    <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs font-medium text-white">
      {initials}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white text-lg font-medium">Projects</h3>
        <button className="text-sm px-3 py-1.5 rounded-md bg-white/10 border border-white/10 text-white/90 hover:bg-white/15 transition">
          View all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 text-white hover:bg-white/[0.07] transition-all duration-200 will-change-transform hover:scale-[1.01] shadow-lg shadow-black/20"
          >
            <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-25 blur-2xl`} />
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-white/50">{p.id}</p>
                <h4 className="mt-1 text-lg font-semibold leading-tight">{p.name}</h4>
              </div>
              <button className="p-2 rounded-md hover:bg-white/10 text-white/80">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-2 text-sm text-white/70 line-clamp-2">{p.description}</p>

            <div className="mt-4 h-2 w-full rounded bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-white/80 to-white/40"
                style={{ width: `${p.progress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {p.status}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {p.due}</span>
              </div>
              <div className="flex -space-x-2">
                {p.team.map((t) => (
                  <div key={t} className="relative">
                    <Avatar initials={t} />
                  </div>
                ))}
                <div className="ml-2 inline-flex items-center gap-1 text-xs text-white/70">
                  <Users className="h-4 w-4" />
                  <span>{p.team.length}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
