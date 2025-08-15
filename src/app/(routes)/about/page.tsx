import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Glowing, animated background orb */}
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-700 blur-3xl opacity-40 animate-pulse z-0" />
      {/* Holographic gradient stripe */}
      <div className="absolute right-0 bottom-40 w-44 h-2 bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-300 rounded-full blur-xl opacity-30 animate-pulse" />

      {/* Glassmorphic card content */}
      <section className="relative z-10 max-w-3xl w-full p-10 rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 flex flex-col items-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 mb-6 drop-shadow-glow text-center tracking-tight animate-fade-in">
          About InboxGalaxy
        </h2>
        <div className="w-full max-w-lg mb-8">
          <p className="text-xl md:text-2xl text-slate-100 font-medium text-center mb-3 animate-slide-up">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-cyan-400 to-indigo-400">
              InboxGalaxy is your portal to the infinite messaging universe.
            </span>
            <br />
            <span className="block mt-2 text-slate-300 font-light">
              Channel ideas, stories, and moods across genres—<span className="italic">tech, cartoons, sci-fi, horror, art, and more.</span>
            </span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-xl">
          <div className="flex flex-col items-center bg-slate-800/70 rounded-2xl shadow-xl p-6">
            <span className="text-3xl mb-3 text-indigo-400 animate-bounce">🌌</span>
            <h3 className="text-lg font-bold text-indigo-200 mb-1">Infinite Themes</h3>
            <p className="text-slate-300 text-center text-sm">
              Send every kind of message imaginable. From playful memes to serious op-eds, InboxGalaxy empowers self-expression.
            </p>
          </div>
          <div className="flex flex-col items-center bg-slate-800/70 rounded-2xl shadow-xl p-6">
            <span className="text-3xl mb-3 text-cyan-400 animate-spin">🔒</span>
            <h3 className="text-lg font-bold text-cyan-200 mb-1">Next-Level Security</h3>
            <p className="text-slate-300 text-center text-sm">
              Your data is protected with quantum-grade encryption and futuristic authentication.
            </p>
          </div>
        </div>
        <div className="w-full max-w-xl flex flex-col items-center">
          <div className="bg-gradient-to-tr from-indigo-600 via-pink-400 to-cyan-500 px-6 py-3 rounded-xl shadow-md font-semibold text-white text-lg text-center mb-2 animate-wiggle">
            Built for 2030—and beyond 🌐
          </div>
          <p className="text-sm text-slate-400 text-center mb-4">
            Inspired by the platforms that changed email—InboxGalaxy is designed to innovate, surprise, and empower every creator.
          </p>
          <Link href="/" className="mt-2 inline-block px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition">
            Back to Home
          </Link>
        </div>
      </section>
      <footer className="absolute bottom-0 left-0 w-full py-4 text-center text-slate-400 text-xs font-mono tracking-wide backdrop-blur-lg">
        &copy; {new Date().getFullYear()} InboxGalaxy — Imagine, Connect, Explore.
      </footer>
    </main>
  );
}
