"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-start px-6 py-12 text-gray-900">
      {/* Header */}
      <header className="w-full max-w-4xl mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-indigo-600">NewsPulse</span>
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto">
          The modern and reliable newsletter platform that helps you connect with your audience effortlessly.
          Create, manage, and send beautiful newsletters — all in one place.
        </p>
      </header>

      {/* Auth Card */}
      <section className="w-full max-w-md bg-white rounded-lg shadow-md p-8 mb-12">
        {status === "loading" ? (
          <p className="text-center text-indigo-600 font-semibold">Loading...</p>
        ) : session ? (
          <>
            <p className="mb-6 text-center text-lg">
              Signed in as <span className="font-medium">{session.user?.email}</span>
            </p>
            <button
              onClick={() => signOut()}
              className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => signIn("github")}
              className="w-full py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
            >
              Sign in with GitHub
            </button>
            <p className="mt-3 text-center text-sm text-gray-500">
              You need a GitHub account to sign in.
            </p>
          </>
        )}
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c1.38 0 2.5 1.12 2.5 2.5S13.38 13 12 13s-2.5-1.12-2.5-2.5S10.62 8 12 8z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.07 4.93A10 10 0 105.26 18.74 10 10 0 1019.07 4.93z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Easy Newsletter Creation</h3>
          <p className="text-gray-600">Intuitive editor to craft engaging newsletters in minutes.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h4l3-6 4 12h3"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Subscriber Management</h3>
          <p className="text-gray-600">Effortlessly add, remove, and organize your newsletter subscribers.</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4v-4h-4zM21 9a4 4 0 00-4-4v4h4z"
            />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Reliable Email Delivery</h3>
          <p className="text-gray-600">Powered by trusted email services to reach your audience every time.</p>
        </div>
      </section>

      <footer className="mt-20 w-full max-w-4xl text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} NewsPulse &mdash; Built with Next.js, Bun & Tailwind CSS
      </footer>
    </main>
  );
}
