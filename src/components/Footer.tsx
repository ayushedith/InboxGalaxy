import Link from "next/link";
import { FiBookOpen, FiMail, FiHelpCircle, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-[#FFF9E3] border-t border-[#FFD851] text-center font-[Quicksand,sans-serif] text-[#1B1B1B]">
      <div className="mb-2 flex justify-center gap-6 text-sm">
        <Link href="/docs" className="inline-flex items-center gap-1 hover:text-[#FFD851] transition">
          <FiBookOpen />
          Docs
        </Link>
        <Link href="/contact" className="inline-flex items-center gap-1 hover:text-[#FFD851] transition">
          <FiMail />
          Contact
        </Link>
        <Link href="/support" className="inline-flex items-center gap-1 hover:text-[#FFD851] transition">
          <FiHelpCircle />
          Support
        </Link>
        <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#FFD851] transition">
          <FiGithub />
          GitHub
        </a>
      </div>
      <div className="text-xs mt-2">
        &copy; {new Date().getFullYear()} InboxGalaxy — With warmth & fun!
      </div>
    </footer>
  );
}
