export default function Footer() {
  return (
    <footer className="w-full py-5 bg-gradient-to-r from-slate-900 via-indigo-900 to-cyan-900 text-center font-mono text-slate-400 text-sm backdrop-blur">
      &copy; {new Date().getFullYear()} InboxGalaxy &mdash; Imagine, Connect, Explore.
    </footer>
  );
}
