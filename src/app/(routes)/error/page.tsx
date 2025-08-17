// src/app/error/page.tsx
"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E3] px-6 font-[Quicksand,sans-serif]">
      <div className="max-w-md w-full bg-white p-10 rounded-xl border border-[#FFD851] shadow-lg text-center">
        <h1 className="text-5xl font-extrabold text-[#1B1B1B] mb-4">Oops!</h1>
        <p className="text-lg text-[#222] mb-6">
          Something went wrong on our end.
        </p>
        <Link
          href="/"
          className="inline-block py-2 px-6 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow border border-black/10 hover:bg-[#ffe17a] transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
