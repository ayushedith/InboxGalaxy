// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-5 bg-cream border-t border-warmyellow text-center font-mono text-darkbrown text-sm">
      &copy; {new Date().getFullYear()} InboxGalaxy — With warmth & fun!
    </footer>
  );
}
