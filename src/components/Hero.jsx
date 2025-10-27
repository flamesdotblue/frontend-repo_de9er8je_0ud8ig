import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 ring-1 ring-inset ring-white/15 mb-4">
            Dark • Futuristic • Minimal
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Manage projects with a glowing edge
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Streamlined dashboards, smart overviews, and a 3D hero that sets the mood.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30">
              Create project
            </button>
            <button className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/10 hover:bg-white/15">
              Explore workspace
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
