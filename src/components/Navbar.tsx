import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-slate-900 via-indigo-900 to-cyan-900 shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Optionally put logo */}
        {/* <img src="/inboxgalaxy_logo.png" alt="InboxGalaxy Logo" className="h-10" /> */}
        <Link href="/" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 drop-shadow">
          InboxGalaxy
        </Link>
      </div>
      <ul className="flex gap-7 text-lg font-semibold">
        <li>
          <Link className="text-slate-200 hover:text-indigo-200 transition" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-slate-200 hover:text-indigo-200 transition" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text-slate-200 hover:text-indigo-200 transition" href="/features">
            Features
          </Link>
        </li>
        <li>
          <Link className="text-slate-200 hover:text-indigo-200 transition" href="/subscribe">
            Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  );
}
