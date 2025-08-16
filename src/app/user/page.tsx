"use client";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function UserProfilePage() {
  const { data: session, status } = useSession();
  const [displayName, setDisplayName] = useState("");
  // Fake displayName update for demo (see below for real-way!)

  if (status === "loading") return <div>Loading...</div>;
  if (!session) return <div>Please sign in to view your profile.</div>;

  const user = session.user;

  return (
    <div className="min-h-screen bg-[#FFF9E3] flex flex-col items-center px-6 py-10 font-[Quicksand,sans-serif]">
      <div className="bg-white rounded-xl p-8 shadow-lg border border-[#FFD851] max-w-md w-full flex flex-col items-center">
        {user?.image && (
          <Image
            src={user.image}
            alt="User Avatar"
            width={96}
            height={96}
            className="rounded-full mb-4 border-2 border-[#FFD851]"
            priority
          />
        )}
        <h2 className="text-3xl font-bold text-[#1B1B1B] mb-2">
          {user?.name || user?.email || "User"}
        </h2>
        <p className="text-[#222] mb-6">{user?.email}</p>

        {/* Editable Display Name (demo: client-side only) */}
        <form
          className="mb-4 w-full"
          onSubmit={e => {
            e.preventDefault();
            alert(`Your display name would be updated to: ${displayName}`);
            // For real apps: POST this to your API/server!
          }}
        >
          <label className="block text-left text-[#1B1B1B]">Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            className="w-full p-2 mt-1 rounded border border-black/10"
            placeholder="Enter a new display name"
          />
          <button
            type="submit"
            className="mt-2 py-2 px-6 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow border border-black/10 hover:bg-[#ffe17a]"
          >
            Save Name
          </button>
        </form>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut()}
          className="mt-4 py-2 px-6 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow border border-black/10 hover:bg-[#ffe17a]"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
