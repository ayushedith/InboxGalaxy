"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function LoginStatus() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;
    async function fetchUser() {
      setLoading(true);
      const { data, error } = await supabase.auth.getUser();
      if (isMounted) {
        setUser(data?.user ?? null);
        setLoading(false);
      }
    }
    fetchUser();
    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (isMounted) {
          setUser(session?.user || null);
          setLoading(false);
        }
      }
    );
    return () => {
      isMounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <span className="text-[#FFD851] font-semibold">Loading...</span>;
  }

  if (user) {
    return (
      <div className="flex items-center gap-3">
        {user.avatar_url && (
          <Image
            src={user.avatar_url}
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border-2 border-[#FFD851]"
            priority
          />
        )}
        <span className="text-[#1B1B1B] font-semibold hidden sm:inline">
          {user.email}
        </span>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            window.location.reload();
          }}
          className="py-1 px-4 rounded bg-[#FFD851] text-[#1B1B1B] font-bold border border-black/10 shadow hover:bg-[#ffe17a] transition"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button className="py-1 px-4 rounded bg-[#FFD851] text-[#1B1B1B] font-bold border border-black/10 shadow hover:bg-[#ffe17a] transition">
      <Link href="/login" className="nav-link-style">
        Login
      </Link>
    </button>
  );
}
