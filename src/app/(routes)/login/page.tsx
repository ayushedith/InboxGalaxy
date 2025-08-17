"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check active session on mount
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) setSession(data.session);
    });
    // Subscribe to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) router.push("/"); // Redirect after login
    });
    return () => listener.subscription.unsubscribe();
  }, [router]);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) alert(error.message);
    else alert("Check your email for a login link!");
  }

  async function signInWithGitHub() {
    await supabase.auth.signInWithOAuth({ provider: "github" });
    // Redirect happens automatically after OAuth callback
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9E3] font-[Quicksand,sans-serif]">
        <p className="text-[#FFD851] font-semibold text-lg">Loading...</p>
      </div>
    );
  }

  if (session) {
    router.push("/");
    return null; // or loading spinner while redirecting
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E3] px-6 font-[Quicksand,sans-serif]">
      <div className="rounded-xl p-10 max-w-md w-full bg-white shadow-xl border border-[#FFD851] text-center">
        <Image
          src="/logoo.png"
          alt="InboxGalaxy Logo"
          width={80}
          height={80}
          className="mx-auto mb-6"
          priority
        />
        <h1 className="text-3xl font-extrabold text-[#1B1B1B] mb-4">Welcome Back to InboxGalaxy</h1>

        {/* <input
          type="email"
          placeholder="Email"
          className="mb-4 p-3 w-full border border-black/20 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 p-3 w-full border border-black/20 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}

        {/* <button
          onClick={signInWithEmail}
          className="w-full mb-6 py-3 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow hover:bg-[#ffe17a] transition"
        >
          Sign in with Email
        </button> */}

        <button
          onClick={signInWithGitHub}
          className="w-full py-3 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow hover:bg-[#ffe17a] transition"
        >
          Sign in with GitHub
        </button>

        <p className="mt-6 text-xs text-[#555]">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-[#FFD851] underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-[#FFD851] underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
