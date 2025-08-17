

import Link from "next/link";
import Image from "next/image";


export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF9E3] flex flex-col items-center justify-center px-6">
      {/* 404 mascot/image with transparent background */}
      <Image
        src="/igNotFound.png"
        alt="404 Envelope Character"
        height={192}
        width={192}
      />
      <h1 className="text-5xl font-extrabold text-[#FFD851] mb-2 font-[Quicksand,sans-serif]">
        404
      </h1>
      <p className="text-xl text-[#1B1B1B] font-semibold mb-4 font-[Quicksand,sans-serif]">
        Whoops! This inbox doesn’t exist.
      </p>
      <p className="mb-8 text-[#222] font-[Quicksand,sans-serif]">
        The page you’re looking for might have moved or never existed.<br />
        Try searching or go back to the galaxy home!
      </p>
      <Link
        href="/"
        className="py-2 px-8 rounded bg-[#FFD851] text-[#1B1B1B] font-bold shadow border border-black/10 hover:bg-[#ffe17a] transition font-[Quicksand,sans-serif]"
      >
        Go Home
      </Link>
    </div>
  );
}
