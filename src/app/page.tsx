"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { FiSmile, FiStar, FiMail, FiShield, FiUsers } from "react-icons/fi";
import Image from "next/image";


export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-[#FFF9E3] px-4 py-8 font-[Quicksand,sans-serif]">
      <div className="max-w-2xl w-full rounded-xl border border-black/10 bg-white shadow-xl p-8 md:p-12 flex flex-col items-center mb-10">
        <Image
          src="/mascot.png"
          alt="InboxGalaxy Mascot Logo"
          width={64}
          height={64}
          className="rounded-xl border border-[#FFD851] shadow bg-[#FFF9E3]"
          style={{ objectFit: "contain" }}
          priority
        />
        <h1 className="text-4xl md:text-5xl text-center font-extrabold tracking-tight text-[#1B1B1B] mb-2" style={{ fontFamily: "'Quicksand', sans-serif" }}>
          Welcome to <span className="text-[#FFD851]">InboxGalaxy</span>
        </h1>
        <h2 className="text-[#49432e] font-bold text-lg mb-5 text-center">
          One inbox, endless imagination!
        </h2>
        <p className="text-[#222] text-base md:text-lg mb-7 text-center max-w-2xl">
          InboxGalaxy is where creative souls, curious minds, and trendsetters gather.
          Launch heartfelt newsletters, showcase discoveries, or share your unique voice.
        </p>
        <div className="w-full bg-[#FFF9E3] rounded-xl p-3 mb-7">
          <p className="text-[#1B1B1B] text-center font-semibold">
            <FiUsers className="inline text-[#FFD851] text-xl mr-1" />
            <span>Join a growing community:</span>
            <span className="ml-1 font-bold">students, artists, engineers, dreamers, thinkers.</span>
          </p>
        </div>
        
        <div className="flex gap-3 w-full justify-center mb-8">
          <Link href="/about">
            <button className="py-2 px-6 rounded bg-[#FFD851] text-[#1B1B1B] font-semibold shadow hover:bg-[#ffe17a] border border-black/10 transition">
              About
            </button>
          </Link>
          <Link href="/features">
            <button className="py-2 px-6 rounded border border-[#FFD851] bg-white text-[#FFD851] font-semibold shadow hover:bg-[#fff3c2] transition">
              Features
            </button>
          </Link>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-2 mb-2">
          <div className="flex items-center gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiSmile className="text-[#FFD851] text-3xl" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Fun, Friendly Community</div>
              <div className="text-[#222] text-sm">Creativity and smiles encouraged!</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiStar className="text-[#FFD851] text-3xl" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Infinite Newsletters</div>
              <div className="text-[#222] text-sm">Tech, cartoons, art, horror, sci-fi — all welcome!</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiMail className="text-[#FFD851] text-3xl" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Instant Delivery</div>
              <div className="text-[#222] text-sm">Your message orbiting inboxes!</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiShield className="text-[#FFD851] text-3xl" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Privacy & Trust</div>
              <div className="text-[#222] text-sm">Strong security, friendly moderation.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote/Motivation */}
      <div className="w-full max-w-md text-center mt-8 mb-4">
        <div className="rounded-lg bg-[#FFD851] text-[#1B1B1B] font-bold py-3 px-7 border border-black/10 shadow mb-2">
          “The only limit is what you imagine.”
        </div>
        <p className="text-[#1B1B1B] text-sm">
          InboxGalaxy – Made for stories, for creators, for you.
        </p>
      </div>
    </div>
  );
}
