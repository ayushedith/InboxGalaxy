"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 py-14 bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-slate-300 flex flex-col items-center">
        <div className="mb-8 flex flex-col items-center">
          {/* <img src="/inboxgalaxy_logo.png" alt="InboxGalaxy Logo" className="h-16 mb-4" /> */}
          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mb-2">
            InboxGalaxy
          </h1>
          <span className="text-lg px-4 py-1 rounded-xl bg-indigo-600 bg-opacity-80 text-white font-semibold mb-4">
            Infinite ideas, one inbox
          </span>
          <p className="text-slate-700 text-center font-medium text-xl">
            Your professional platform for every kind of newsletter:
            <span className="font-semibold text-indigo-600"> tech, art, sci-fi, and more.</span>
            <br />
            Designed for creators, powered by the latest technology.
          </p>
        </div>

        {/* Auth block */}
        <div className="w-full bg-slate-200 rounded-xl shadow mb-8 p-6 flex flex-col items-center">
          {status === "loading" ? (
            <p className="text-indigo-500 font-bold">Authenticating...</p>
          ) : session ? (
            <>
              <p className="text-slate-900 text-lg mb-3">
                Signed in as <strong className="text-indigo-800">{session.user?.email}</strong>
              </p>
              <button
                onClick={() => signOut()}
                className="w-40 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => signIn("github")}
                className="w-40 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl hover:bg-indigo-700 transition"
              >
                Sign in with GitHub
              </button>
              <p className="mt-2 text-sm text-slate-600">
                * Only GitHub login supported.
              </p>
            </>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <Link href="/about">
            <button className="w-full md:w-auto py-2 px-6 rounded-full bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition">
              Learn About InboxGalaxy
            </button>
          </Link>
          <button
            className="w-full md:w-auto py-2 px-6 rounded-full bg-slate-800 text-indigo-100 font-medium shadow hover:bg-slate-900 hover:text-white transition"
          >
            See Features
          </button>
        </div>
      </div>

      <footer className="absolute bottom-0 left-0 w-full py-4 text-center text-slate-400 text-xs font-mono tracking-wide">
        &copy; {new Date().getFullYear()} InboxGalaxy — Trusted, private, and modern.
      </footer>
    </main>
  );
}
