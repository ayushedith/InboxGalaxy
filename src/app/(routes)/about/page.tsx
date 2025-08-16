import Link from "next/link";
import { FiUsers, FiStar, FiMail, FiShield, FiSmile, FiPocket, FiTwitter, FiLinkedin, FiGithub, FiMail as FiEmail } from "react-icons/fi";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF9E3] px-5 py-10 font-[Quicksand,sans-serif]">
      <div className="w-full max-w-2xl border border-black/10 rounded-xl bg-white shadow-xl p-8 md:p-12 flex flex-col items-center">
        {/* Mascot/Logo */}
        <Image
          src="/logoo.png"
          alt="InboxGalaxy Mascot"
          width={64}
          height={64}
          className="rounded-xl border border-[#FFD851] shadow bg-[#FFF9E3]"
          priority
        />

        <h1 className="text-4xl font-extrabold text-[#1B1B1B] mb-3 text-center">
          About InboxGalaxy
        </h1>

        <p className="text-lg text-[#222] mb-6 text-center max-w-xl">
          InboxGalaxy is a multi-genre newsletter app for creators, storytellers, and knowledge-seekers.  
          Our mission is to make sending and discovering amazing content as joyful, safe, and easy as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
          <div className="flex items-start gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiStar className="text-[#FFD851] text-2xl mt-1" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Infinite Creativity</div>
              <div className="text-[#222] text-sm">
                Send and explore every kind of newsletter—tech, cartoons, sci-fi, art, and more.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiSmile className="text-[#FFD851] text-2xl mt-1" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Positive Community</div>
              <div className="text-[#222] text-sm">
                A friendly space built around fun, help, and mutual respect.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiMail className="text-[#FFD851] text-2xl mt-1" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Instant Delivery</div>
              <div className="text-[#222] text-sm">
                Newsletters and updates that reach subscribers in seconds.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-[#FFF9E3] border border-black/10 rounded-lg p-4 shadow">
            <FiShield className="text-[#FFD851] text-2xl mt-1" />
            <div>
              <div className="font-bold text-[#1B1B1B]">Trust & Safety</div>
              <div className="text-[#222] text-sm">
                Privacy-first, secure, and always moderated for everyone’s peace of mind.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mb-7 text-center">
          <h3 className="text-xl font-bold text-[#1B1B1B] mb-2">
            Meet our Team & Visionaries
          </h3>
          <div className="flex flex-col items-center gap-2">
            <div className="font-semibold text-[#FFD851]">
              <FiPocket className="inline text-lg mr-1" /> Designers, developers, and creators from all backgrounds
            </div>
            <div className="text-[#222] text-sm">
              Built by real newsletter fans, InboxGalaxy is powered by collaboration, fresh ideas, and a pinch of stardust!
            </div>
          </div>
        </div>

        <div className="w-full mb-5 text-center bg-[#FFF9E3] border border-[#FFD851] rounded-xl py-4 px-2 shadow-md">
          <div className="text-[#1B1B1B] font-bold mb-1">
            Why InboxGalaxy?
          </div>
          <div className="text-[#222] text-sm mb-2">
            - No limits on genre or creativity <br />
            - Friendly moderation and safe publishing <br />
            - Innovative, playful design <br />
            - Community-driven development
          </div>
        </div>

        {/* Social & Contact Section */}
        <div className="w-full mb-6 text-center">
          <h3 className="text-lg font-bold text-[#1B1B1B] mb-1">Connect with InboxGalaxy</h3>
          <div className="flex justify-center gap-5 mt-2 mb-2">
            <a href="mailto:team@inboxgalaxy.io" className="flex items-center gap-1 text-[#FFD851] hover:text-[#1B1B1B] text-xl transition">
              <FiEmail /> Email
            </a>
            <a href="https://twitter.com/inboxgalaxy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#FFD851] hover:text-[#1B1B1B] text-xl transition">
              <FiTwitter /> Twitter
            </a>
            <a href="https://www.linkedin.com/company/inboxgalaxy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#FFD851] hover:text-[#1B1B1B] text-xl transition">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#FFD851] hover:text-[#1B1B1B] text-xl transition">
              <FiGithub /> GitHub
            </a>
          </div>
          <div className="text-xs text-[#1B1B1B] mt-1">
            We're always listening. Reach out for support, feedback, or partnership!
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full my-6 px-3 py-4 bg-[#FFF9E3] border border-black/10 rounded-xl shadow text-center space-y-2">
          <h3 className="text-lg font-bold text-[#1B1B1B] mb-2">What our users say</h3>
          <div className="italic text-[#222] text-sm">
            “The most creative newsletter platform I’ve used. Love the vibe and the community!” <br />
            — <span className="font-bold text-[#FFD851]">Priya (designer)</span>
          </div>
          <div className="italic text-[#222] text-sm">
            “InboxGalaxy lets me publish everything—tech blogs, cartoons, even fiction—all in one place.” <br />
            — <span className="font-bold text-[#FFD851]">Alex (developer)</span>
          </div>
          <div className="italic text-[#222] text-sm">
            “The fun design and privacy controls make it my go-to for sharing ideas!” <br />
            — <span className="font-bold text-[#FFD851]">Sam (student)</span>
          </div>
        </div>

        <div className="flex justify-center mt-3">
          <Link
            href="/subscribe"
            className="py-2 px-8 rounded bg-[#FFD851] text-[#1B1B1B] font-bold shadow border border-black/10 hover:bg-[#ffe17a] transition font-[Quicksand,sans-serif]"
          >
            Join the Galaxy — Subscribe!
          </Link>
        </div>
      </div>
    </div>
  );
}
