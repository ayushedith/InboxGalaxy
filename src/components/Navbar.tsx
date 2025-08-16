import Link from "next/link";
import { FiHome, FiInfo, FiStar, FiUserPlus, FiBookOpen, FiKey } from "react-icons/fi";
import Image from "next/image";
import LoginStatus from "./LoginStatus"; // Adjust the path according to your project structure

export default function Navbar() {
  return (
    <nav className="w-full px-2 md:px-10 py-3 bg-[#FFF9E3] border-b border-[#FFD851] shadow flex items-center justify-between font-[Quicksand,sans-serif]">
      <div className="flex items-center gap-3">
        <Image
          src="/logoo.png"
          alt="InboxGalaxy Logo"
          width={40}
          height={40}
          className="rounded-xl border border-[#FFD851] shadow-sm bg-[#FFF9E3]"
          priority
        />
        <Link href="/" className="flex items-center gap-2 group">
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
      </ul>

      {/* Auth Section */}
      <LoginStatus />
    </nav>
  );
}
