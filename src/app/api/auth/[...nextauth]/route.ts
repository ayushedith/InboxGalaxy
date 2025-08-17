// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { supabase } from "@/lib/supabaseClient";

// export default function LoginPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [session, setSession] = useState<any>(null);

//   useEffect(() => {
//     // Check session on mount
//     supabase.auth.getSession().then(({ data }) => {
//       if (data.session) {
//         setSession(data.session);
//         router.push("/"); // Redirect if logged in
//       }
//     });

//     // Listen for auth state changes (login/logout)
//     const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//       if (session) router.push("/");
//     });

//     return () => {
//       listener.subscription.unsubscribe();
//     };
//   }, [router]);

//   async function handleEmailLogin() {
//     setLoading(true);
//     setErrorMsg("");
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     setLoading(false);

//     if (error) {
//       setErrorMsg(error.message);
//     } else {
//       alert("Check your email for the login link!");
//     }
//   }

//   async function handleGitHubLogin() {
//     setLoading(true);
//     setErrorMsg("");
//     const { error } = await supabase.auth.signInWithOAuth({ provider: "github" });
//     setLoading(false);

//     if (error) {
//       setErrorMsg(error.message);
//     }
//     // OAuth redirect occurs automatically
//   }

//   async function handleLogout() {
//     setLoading(true);
//     await supabase.auth.signOut();
//     setSession(null);
//     setLoading(false);
//   }

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#FFF9E3] font-[Quicksand,sans-serif]">
//         <p className="text-[#FFD851] font-semibold text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (session) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E3] px-6 font-[Quicksand,sans-serif]">
//         <h2 className="text-[#1B1B1B] text-2xl mb-4">Welcome, {session.user.email}</h2>
//         <button
//           onClick={handleLogout}
//           className="py-2 px-6 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow border border-black/10 hover:bg-[#ffe17a] transition"
//         >
//           Sign Out
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#FFF9E3] px-6 font-[Quicksand,sans-serif]">
//       <div className="rounded-xl p-10 max-w-md w-full bg-white shadow-xl border border-[#FFD851] text-center">
//         <Image
//           src="/logoo.png"
//           alt="InboxGalaxy Logo"
//           width={80}
//           height={80}
//           className="mx-auto mb-6"
//           priority
//         />
//         <h1 className="text-3xl font-extrabold text-[#1B1B1B] mb-4">Login to InboxGalaxy</h1>

//         {errorMsg && (
//           <p className="mb-4 text-red-600 font-semibold">{errorMsg}</p>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mb-4 p-3 w-full border border-black/20 rounded"
//           autoCapitalize="none"
//           autoComplete="email"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mb-6 p-3 w-full border border-black/20 rounded"
//           autoComplete="current-password"
//         />

//         <button
//           onClick={handleEmailLogin}
//           className="w-full mb-6 py-3 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow hover:bg-[#ffe17a] transition"
//         >
//           Sign in with Email
//         </button>

//         <button
//           onClick={handleGitHubLogin}
//           className="w-full py-3 rounded bg-[#FFD851] font-bold text-[#1B1B1B] shadow hover:bg-[#ffe17a] transition"
//         >
//           Sign in with GitHub
//         </button>

//         <p className="mt-6 text-xs text-[#555]">
//           By signing in, you agree to our{" "}
//           <a href="/terms" className="text-[#FFD851] underline">
//             Terms of Service
//           </a>{" "}
//           and{" "}
//           <a href="/privacy" className="text-[#FFD851] underline">
//             Privacy Policy
//           </a>
//           .
//         </p>
//       </div>
//     </div>
//   );
// }
