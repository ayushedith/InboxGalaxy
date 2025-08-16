// src/components/Navbar.tsx
import Link from "next/link";
import { FiHome, FiInfo, FiStar, FiUserPlus } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full px-3 py-3 bg-cream border-b border-warmyellow flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <Link href="/" className="text-2xl md:text-3xl font-black text-darkbrown tracking-tight hover:text-warmyellow transition">
          InboxGalaxy
        </Link>
      </div>
      <ul className="flex gap-7 items-center">
        <li>
          <Link href="/" className="flex items-center gap-2 px-3 py-1 rounded font-semibold text-darkbrown hover:bg-warmyellow/30 hover:text-darkbrown transition">
            <FiHome className="text-xl"/> Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="flex items-center gap-2 px-3 py-1 rounded font-semibold text-darkbrown hover:bg-warmyellow/30 hover:text-darkbrown transition">
            <FiInfo className="text-xl"/> About
          </Link>
        </li>
        <li>
          <Link href="/features" className="flex items-center gap-2 px-3 py-1 rounded font-semibold text-darkbrown hover:bg-warmyellow/30 hover:text-darkbrown transition">
            <FiStar className="text-xl"/> Features
          </Link>
        </li>
        <li>
          <Link href="/subscribe" className="flex items-center gap-2 px-3 py-1 rounded font-semibold text-white bg-warmyellow shadow hover:bg-darkbrown hover:text-warmyellow transition">
            <FiUserPlus className="text-xl"/> Subscribe
          </Link>
        </li>
      </ul>
    </nav>
  );
}
