// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // Add more providers here (Google, etc.)
  ],
  pages: {
    signIn: "/login",
    error: "/error",
  },
  theme: {
    logo: "/ig_logo_theme.png",
  },
});

export { handler as GET, handler as POST };