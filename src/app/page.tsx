import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-center text-gray-900">
          Newsletter App
        </h1>
        <p className="text-gray-700 text-center">
          🚀 Next.js, TypeScript & Tailwind CSS are working with Bun!
        </p>
      </div>
    </main>
  );
}

