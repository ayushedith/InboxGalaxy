import Link from "next/link";
import { FiHome, FiInfo, FiStar, FiUserPlus, FiBookOpen, FiKey, FiLogIn, FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="w-full px-2 md:px-10 py-3 bg-[#FFF9E3] border-b border-[#FFD851] shadow flex items-center justify-between font-[Quicksand,sans-serif]">
      <div className="flex items-center gap-3">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* Use the cream/yellow themed logo you generated, recommended size: 40-48px */}
          <img
            src="/logo.png" // Replace with the actual path from your public folder
            alt="InboxGalaxy Logo"
            className="h-10 w-10 rounded-xl border border-[#FFD851] shadow-sm bg-[#FFF9E3] group-hover:scale-105 transition"
            style={{ objectFit: "contain" }}
          />
          <span className="text-3xl font-black text-[#1B1B1B] hover:text-[#FFD851] transition tracking-tight">
            InboxGalaxy
          </span>
        </Link>
      </div>
      <ul className="flex gap-5 items-center">
        <li>
          <Link href="/" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiHome className="text-xl" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiInfo className="text-xl" />
            About
          </Link>
        </li>
        <li>
          <Link href="/features" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiStar className="text-xl" />
            Features
          </Link>
        </li>
        <li>
          <Link href="/docs" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiBookOpen className="text-xl" />
            Docs
          </Link>
        </li>
        <li>
          <Link href="/apikey" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiKey className="text-xl" />
            API Key
          </Link>
        </li>
        <li>
          <Link href="/subscribe" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-white bg-[#FFD851] border border-black/10 shadow hover:bg-[#1B1B1B] hover:text-[#FFD851] transition duration-150">
            <FiUserPlus className="text-xl" />
            Subscribe
          </Link>
        </li>
        <li>
          <Link href="/login" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiLogIn className="text-xl" />
            Login
          </Link>
        </li>
        <li>
          <Link href="/user" className="flex items-center gap-1 px-3 py-2 rounded font-semibold text-[#1B1B1B] hover:text-[#FFD851] transition">
            <FiUser className="text-xl" />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
