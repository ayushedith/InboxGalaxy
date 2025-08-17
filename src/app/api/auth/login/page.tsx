"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if logged in
  useEffect(() => {
    if (session) router.push("/");
  }, [session, router]);

  // Show loading spinner if session is loading
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9E3] font-[Quicksand,sans-serif]">
        <p className="text-[#FFD851] font-semibold text-lg">Loading...</p>
      </div>
    );
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
        <h1 className="text-3xl font-extrabold text-[#1B1B1B] mb-4">
          Welcome Back to InboxGalaxy
        </h1>
        <p className="mb-8 text-[#222]">
          Sign in with your account to continue sending and reading newsletters.
        </p>

        <button
          onClick={() => signIn("github")}
          className="w-full py-3 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow hover:bg-[#ffe17a] transition"
        >
          Sign in with GitHub
        </button>

        <p className="mt-6 text-xs text-[#555]">
          By signing in, you agree to our{" "}
          <a href="/terms" className="text-[#FFD851] underline">
            Terms of Service
          </a>
          {" "}and{" "}
          <a href="/privacy" className="text-[#FFD851] underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
