import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FFF9E3] px-6 py-10">
      <div className="w-full max-w-xl border border-black/10 rounded-xl bg-white p-8 shadow flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1B1B1B] mb-5 text-center">
          About InboxGalaxy
        </h2>
        <p className="text-[#222] text-lg mb-4 text-center">
          InboxGalaxy is built for every kind of creator.  
          <br/>Send diverse newsletters — tech, cartoons, horror, sci-fi, art, and beyond!
        </p>
        <ul className="w-full mb-7 text-center">
          <li className="mb-3 text-[#1B1B1B]">
            <span className="font-bold text-[#FFD851]">✔ Infinite Variety:</span> Create and share whatever you imagine.
          </li>
          <li className="mb-3 text-[#1B1B1B]">
            <span className="font-bold text-[#FFD851]">✔ Warm, Fun Design:</span> Friendly, playful, and easy to use.
          </li>
          <li className="mb-3 text-[#1B1B1B]">
            <span className="font-bold text-[#FFD851]">✔ Trusted & Secure:</span> Private authentication, safe community.
          </li>
        </ul>
        <Link href="/" className="py-2 px-8 rounded bg-[#FFD851] text-[#1B1B1B] font-bold shadow border border-black/10 hover:bg-[#fff3c2] transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
