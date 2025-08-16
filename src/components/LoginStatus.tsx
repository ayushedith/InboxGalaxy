"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function LoginStatus() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <span className="text-[#FFD851] font-semibold">Loading...</span>;
  }

  if (session) {
    return (
      <div className="flex items-center gap-3">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-[#FFD851]"
            priority
          />
        )}
        <span className="text-[#1B1B1B] font-semibold hidden sm:inline">
          {session.user?.name || session.user?.email}
        </span>
        <button
          onClick={() => signOut()}
          className="py-1 px-4 rounded bg-[#FFD851] text-[#1B1B1B] font-bold border border-black/10 shadow hover:bg-[#ffe17a] transition"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className="py-1 px-4 rounded bg-[#FFD851] text-[#1B1B1B] font-bold border border-black/10 shadow hover:bg-[#ffe17a] transition"
    >
      Sign In
    </button>
  );
}
