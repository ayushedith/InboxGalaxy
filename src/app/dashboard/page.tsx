"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") return <div>Loading...</div>;

  if (!session) return null;

  return <div>Welcome to your Dashboard, {session.user?.name}!</div>;
    if (status === "unauthenticated") {
      return <div className="text-red-600">Error: You are not authenticated. Please log in.</div>;
    }

    if (!session) {
      return <div className="text-red-600">Error: Failed to fetch session. Please try again later.</div>;
    }
}
